"""
Genera las imágenes "hero" (primarias) de cada producto: producto recortado
con rembg, compuesto sobre fondo-bosque.jpg con blur y oscurecimiento sutil
para que el producto resalte.

También conserva las imágenes "clean" (fondo blanco, secundarias) ya
generadas por clean-product-photos.py — solo las mueve a una subcarpeta.

Salidas:
    web/maqueta/public/img/products/catalogo/hero/<slug>.jpg    (primarias)
    web/maqueta/public/img/products/catalogo/clean/<slug>.jpg   (secundarias)

Uso:
    cd /root/lasercrafts
    python3 branding/assets/scripts/compose-hero-images.py [--force]

Reusa el modelo u2net de rembg (ya descargado por clean-product-photos.py).
"""
import sys
import shutil
from pathlib import Path
from io import BytesIO

from PIL import Image, ImageOps, ImageFilter, ImageEnhance
from rembg import remove, new_session

# --- Paths -----------------------------------------------------------------
ROOT = Path(__file__).resolve().parents[3]
FOTOS_DIR = ROOT / "branding/assets/productos/fotos"
FONDO = ROOT / "branding/assets/productos/fondo-bosque.jpg"
SITE_DIR = ROOT / "web/maqueta/public/img/products/catalogo"
HERO_DIR = SITE_DIR / "hero"
CLEAN_DIR = SITE_DIR / "clean"
HERO_DIR.mkdir(parents=True, exist_ok=True)
CLEAN_DIR.mkdir(parents=True, exist_ok=True)

OUT_SIDE = 1100             # lado de la imagen hero final (cuadrada)
PRODUCT_PCT = 0.74          # % del lado que ocupa el producto (el resto es margen)
BLUR_PX = 12                # blur del fondo (suaviza detalle)
DARKEN = 0.78               # multiplicar fondo por (0–1) para oscurecer
SHADOW_OFFSET = (10, 24)    # px de desplazamiento de la sombra del producto
SHADOW_BLUR = 28
SHADOW_OPACITY = 110        # 0–255

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

# --- Paso 1: mover las "clean" actuales a clean/ ---------------------------
moved = 0
for slug in PHOTO_FOR:
    old = SITE_DIR / f"{slug}.jpg"
    new = CLEAN_DIR / f"{slug}.jpg"
    if old.exists() and not old.is_dir():
        if new.exists() and not FORCE:
            old.unlink()
        else:
            shutil.move(str(old), str(new))
        moved += 1
print(f"Movidas {moved} imágenes 'clean' a {CLEAN_DIR.relative_to(ROOT)}")

# --- Paso 2: preparar fondo base (recorte cuadrado + blur + oscurecimiento)
print("Preparando fondo bosque (crop cuadrado + blur + oscurecer)...")
with Image.open(FONDO) as f_orig:
    f_orig = ImageOps.exif_transpose(f_orig).convert("RGB")
    w, h = f_orig.size
    side = min(w, h)
    left = (w - side) // 2
    top = (h - side) // 2
    f_sq = f_orig.crop((left, top, left + side, top + side))
    # Redimensionar a OUT_SIDE * 1.05 antes del blur (más detalle en el resize final)
    f_sq = f_sq.resize((int(OUT_SIDE * 1.05),) * 2, Image.LANCZOS)
    # Blur
    f_blur = f_sq.filter(ImageFilter.GaussianBlur(radius=BLUR_PX))
    # Oscurecer
    f_dark = ImageEnhance.Brightness(f_blur).enhance(DARKEN)
    # Crop centrado al tamaño final
    cs = (f_dark.size[0] - OUT_SIDE) // 2
    fondo_listo = f_dark.crop((cs, cs, cs + OUT_SIDE, cs + OUT_SIDE))
print("OK fondo listo.\n")

# --- Paso 3: rembg session -------------------------------------------------
print("Cargando rembg (u2net)...")
session = new_session("u2net")
print("OK\n")


def compose_hero(slug: str, photo_name: str) -> bool:
    src = FOTOS_DIR / photo_name
    if not src.exists():
        print(f"  [SKIP] {slug}: foto fuente no encontrada")
        return False

    dst = HERO_DIR / f"{slug}.jpg"
    if dst.exists() and not FORCE:
        print(f"  [SKIP] {slug}: ya existe (--force para regenerar)")
        return True

    # 1. abrir + EXIF
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im).convert("RGB")

    # 2. rembg → PNG con alpha
    buf = BytesIO()
    im.save(buf, "PNG")
    cut = Image.open(BytesIO(remove(buf.getvalue(), session=session))).convert("RGBA")

    # 3. crop al bbox del producto
    bbox = cut.getbbox()
    if bbox is None:
        print(f"  [WARN] {slug}: rembg no detectó producto")
        return False
    prod = cut.crop(bbox)

    # 4. resize producto manteniendo aspecto, al PRODUCT_PCT del lado
    pw, ph = prod.size
    target = int(OUT_SIDE * PRODUCT_PCT)
    if pw >= ph:
        new_pw = target
        new_ph = int(ph * target / pw)
    else:
        new_ph = target
        new_pw = int(pw * target / ph)
    prod = prod.resize((new_pw, new_ph), Image.LANCZOS)

    # 5. preparar sombra (blur del alpha desplazado, opacidad)
    alpha = prod.split()[-1]
    shadow = Image.new("RGBA", (OUT_SIDE, OUT_SIDE), (0, 0, 0, 0))
    sh_mask = Image.new("L", (OUT_SIDE, OUT_SIDE), 0)
    sh_x = (OUT_SIDE - new_pw) // 2 + SHADOW_OFFSET[0]
    sh_y = (OUT_SIDE - new_ph) // 2 + SHADOW_OFFSET[1]
    sh_mask.paste(alpha, (sh_x, sh_y))
    sh_mask = sh_mask.filter(ImageFilter.GaussianBlur(radius=SHADOW_BLUR))
    # construir sombra negra usando la máscara
    shadow_rgba = Image.new("RGBA", (OUT_SIDE, OUT_SIDE), (0, 0, 0, 0))
    shadow_rgba.putalpha(sh_mask.point(lambda v: int(v * SHADOW_OPACITY / 255)))

    # 6. componer: fondo + sombra + producto
    base = fondo_listo.convert("RGBA").copy()
    base.alpha_composite(shadow_rgba)
    px = (OUT_SIDE - new_pw) // 2
    py = (OUT_SIDE - new_ph) // 2
    base.alpha_composite(prod, dest=(px, py))

    # 7. guardar como JPG
    base.convert("RGB").save(dst, "JPEG", quality=86, optimize=True)
    print(f"  [OK]   {slug}: hero {OUT_SIDE}px")
    return True


# --- Main ------------------------------------------------------------------
ok = 0
for slug, photo in PHOTO_FOR.items():
    print(f"· {slug}", flush=True)
    if compose_hero(slug, photo):
        ok += 1

print(f"\nListo: {ok}/{len(PHOTO_FOR)} heroes generados → {HERO_DIR.relative_to(ROOT)}")
