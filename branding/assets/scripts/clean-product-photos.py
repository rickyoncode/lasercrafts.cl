"""
Limpia el fondo de las fotos del taller usando rembg (modelo neural u2net).
Para cada producto del catálogo:

- Toma la primera foto cruda en branding/assets/productos/fotos/
- Corrige orientación EXIF
- Saca el fondo (rembg) y compone sobre fondo blanco puro
- Recorta al bounding box del producto con 5% padding
- Genera dos versiones:
    · thumb 280px de ancho → branding/assets/productos/thumbs/<slug>.jpg
    · grande 900px de ancho → web/maqueta/public/img/products/catalogo/<slug>.jpg

Uso:
    cd /root/lasercrafts
    python3 branding/assets/scripts/clean-product-photos.py [--force]

La primera ejecución descarga el modelo u2net (~170MB) a ~/.u2net/.
Es idempotente: salta los slugs cuya foto final ya existe (a menos que
se pase --force).
"""
import sys
from pathlib import Path
from io import BytesIO

from PIL import Image, ImageOps
from rembg import remove, new_session

# --- Paths -----------------------------------------------------------------
ROOT = Path(__file__).resolve().parents[3]
FOTOS_DIR = ROOT / "branding/assets/productos/fotos"
THUMBS_DIR = ROOT / "branding/assets/productos/thumbs"
SITE_IMG_DIR = ROOT / "web/maqueta/public/img/products/catalogo"

THUMBS_DIR.mkdir(parents=True, exist_ok=True)
SITE_IMG_DIR.mkdir(parents=True, exist_ok=True)

THUMB_W = 280
LARGE_W = 900
PADDING_PCT = 0.06  # 6% padding alrededor del bounding box

# --- Slug → primera foto (igual orden que build-catalogo-xlsx.py) ----------
PHOTO_FOR = {
    "posavasos-valdivia":          "20260328_123630(1).jpg",
    "posavasos-fauna-nativa":      "20260531_135930.jpg",
    "set-posavasos-geometricos":   "20260328_122332.jpg",
    "bandeja-portavasos":          "20260328_115416.jpg",
    "cofre-tapa-hojas":            "20260328_110045.jpg",
    "cofre-cuadrado-firma":        "20260328_122332.jpg",
    "soporte-celular-plegable":    "20260328_123021.jpg",
    "soporte-celular-engranaje":   "20260328_162735.jpg",
    "pins-imanes-naturaleza":      "20260328_111352.jpg",
    "llaveros-fauna-nativa":       "20260531_130739.jpg",
    "marcapaginas-fauna":          "20260531_130023.jpg",
    "cuadro-3d-pez-betta":         "20260328_111942.jpg",
    "cuadro-3d-manga":             "20260328_113614.jpg",
    "carta-pokemon-3d":            "20260328_123148.jpg",
    "medallas-pokemon":            "20260328_111549.jpg",
    "casa-halloween-armable":      "20260328_114526.jpg",
    "placa-direccion-escena":      "20260328_120002.jpg",
    "letrero-exterior-tienda":     "20260328_115809.jpg",
    "expositor-hot-wheels":        "IMG-20260328-WA0058.jpg",
}

FORCE = "--force" in sys.argv

# --- Sesión rembg con modelo u2net (uso general) ---------------------------
print("Inicializando rembg (puede bajar el modelo la primera vez)...", flush=True)
session = new_session("u2net")
print("OK\n", flush=True)


def process(slug: str, photo_name: str) -> bool:
    src = FOTOS_DIR / photo_name
    if not src.exists():
        print(f"  [SKIP] {slug}: foto fuente no encontrada ({photo_name})")
        return False

    thumb_dst = THUMBS_DIR / f"{slug}.jpg"
    site_dst = SITE_IMG_DIR / f"{slug}.jpg"

    if not FORCE and thumb_dst.exists() and site_dst.exists():
        # Heurística: si ambos existen Y son mayores que la versión "sin
        # fondo limpio" antigua, asumimos que ya están limpios.
        if thumb_dst.stat().st_mtime > (FOTOS_DIR / photo_name).stat().st_mtime:
            print(f"  [SKIP] {slug}: ya existe (--force para regenerar)")
            return True

    # 1. Abrir y corregir EXIF
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im).convert("RGB")

    # 2. rembg → PNG con alpha
    buf = BytesIO()
    im.save(buf, "PNG")
    cut_bytes = remove(buf.getvalue(), session=session)
    cut = Image.open(BytesIO(cut_bytes)).convert("RGBA")

    # 3. Recortar al bounding box del alfa
    bbox = cut.getbbox()
    if bbox is None:
        print(f"  [WARN] {slug}: rembg no detectó producto, usando imagen completa")
        cut_cropped = cut
    else:
        # padding
        w, h = cut.size
        l, t, r, b = bbox
        pad_w = int((r - l) * PADDING_PCT)
        pad_h = int((b - t) * PADDING_PCT)
        l = max(0, l - pad_w)
        t = max(0, t - pad_h)
        r = min(w, r + pad_w)
        b = min(h, b + pad_h)
        cut_cropped = cut.crop((l, t, r, b))

    # 4. Pegar sobre fondo blanco puro
    bg = Image.new("RGB", cut_cropped.size, (255, 255, 255))
    bg.paste(cut_cropped, (0, 0), cut_cropped)

    # 5. Resize a las dos versiones (LANCZOS)
    def save_resized(target_w: int, dst: Path, quality: int = 85):
        ratio = target_w / bg.width
        new_size = (target_w, int(bg.height * ratio))
        bg.resize(new_size, Image.LANCZOS).save(dst, "JPEG", quality=quality, optimize=True)

    save_resized(LARGE_W, site_dst, quality=85)
    save_resized(THUMB_W, thumb_dst, quality=80)

    print(f"  [OK]   {slug}: {bg.width}×{bg.height} → thumb + site")
    return True


# --- Main ------------------------------------------------------------------
ok = 0
fail = 0
for slug, photo in PHOTO_FOR.items():
    print(f"· {slug}", flush=True)
    if process(slug, photo):
        ok += 1
    else:
        fail += 1

print(f"\nListo: {ok}/{len(PHOTO_FOR)} procesados (fail: {fail})")
print(f"  · Thumbs (Excel): {THUMBS_DIR}")
print(f"  · Grandes (web):  {SITE_IMG_DIR}")
