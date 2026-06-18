# Plan — Landing para empresas (B2B, trilingüe)

> v0.1 · junio 2026. Plan de implementación del landing dedicado al canal B2B/institucional de LáserCrafts, dentro del Astro existente en `web/maqueta/`.

## 1. Objetivo

Crear un **único landing page** dedicado al canal B2B de LáserCrafts, disponible en **español, portugués e inglés**, con dos llamados a la acción primarios:

1. **Cotizar por WhatsApp** (al +56 9 2644 9047) con mensaje pre-cargado en el idioma activo.
2. **Conectar por LinkedIn** (link a la empresa).

**Casos de uso del canal B2B** (definidos por el referente Futangue):

- Parques, reservas naturales, hoteles, viñas que necesitan **souvenirs o merchandising con identidad local** en madera grabada.
- Marcas que buscan **regalos corporativos sustentables** para fin de año, lanzamientos, ferias.
- Eventos: bodas, congresos, lanzamientos — kits con grabado personalizado.
- Distribuidores/retailers que quieren **stock mayorista** de líneas propias.

**Goal estratégico** (palabras de Felipe): llevar la marca a **ferias internacionales** y consolidar el sitio como **punto de contacto institucional**. El landing trilingüe es la herramienta para presentarse fuera de Chile (Brasil, mercados angloparlantes).

## 2. Estructura URL

| Idioma | URL | Default |
|---|---|---|
| Español | `/empresas/` | Sí (sin prefijo) |
| Portugués | `/empresas/pt/` | — |
| Inglés | `/empresas/en/` | — |

**Decisión:** mantener `/empresas/` como root español sin prefijo (coherente con el resto del sitio chileno, que es ES por default). Los otros dos idiomas viven bajo subcarpetas. El `LanguageSwitcher` mapea entre las tres equivalencias.

**hreflang:** cada página declara `<link rel="alternate" hreflang="…" />` para las otras dos + `x-default` apuntando al español.

## 3. Secciones del landing

Orden vertical (mismo en los 3 idiomas):

1. **Hero**
   - Eyebrow: "B2B · Wholesale · Corporate"
   - H1 (ES): *"Productos únicos en madera para marcas que cuentan un territorio."*
   - Subhead: propuesta clara — diseño a medida, grabado láser de precisión, terciado chileno, despacho en Chile e internacional.
   - CTA primario: **Cotizar por WhatsApp** → mensaje pre-cargado por idioma.
   - CTA secundario: **LinkedIn** (icono + label).
   - Imagen: render hero con un producto del catálogo Futangue (posavasos o ciervo armable).

2. **Trust strip** (banda angosta debajo del hero)
   - 4 micro-claims: *Marca registrada INAPI · Taller propio en Paillaco · Terciado chileno · Despacho nacional e internacional*

3. **Capacidades** (4 cards en grid 2×2 ó 4×1)
   - **Posavasos & coasters** — packs de 6, grabado a medida.
   - **Llaveros y piezas pequeñas** — fauna nativa, logos, recordatorios de evento.
   - **Marcapáginas y editorial** — alto valor botánico, ideal hoteles/librerías.
   - **Cajas para vino y packaging** — para viñas, regalos corporativos, ferias.
   - + un quinto bloque "**A medida**" full-width: "Si no está acá, lo diseñamos."

4. **Caso de estudio: Parque Futangue**
   - Texto corto explicando la colaboración: catálogo 2026 con fauna del parque (martín pescador, chucao, monito del monte, ranita de Darwin, helecho, hongos magallánicos).
   - **Grid de 4 imágenes** del catálogo (extraídas del PDF) — posavasos, llaveros, marcapáginas, cajas vino.
   - Métricas visibles si las hubiera; por ahora cualitativo.

5. **Proceso** (5 pasos numerados)
   1. **Brief** — nos cuentas qué necesitas, para qué y para cuándo.
   2. **Propuesta** — entregamos diseño, plazos y precio neto en 3–5 días hábiles.
   3. **Muestra física** — opcional, una pieza de prueba antes del volumen.
   4. **Producción** — 7 a 15 días hábiles según volumen.
   5. **Despacho** — directo al cliente o a un punto único.

6. **Materiales y técnica** (bloque editorial)
   - Solo terciado (rosado eucalipto, lenga, otros bajo pedido).
   - Grabado láser de precisión sub-milimétrica.
   - Acabados: barnizado, sellado contra humedad.
   - Tamaño mínimo viable: 50 unidades por ítem para tarifa mayorista (referencia, no cierre).

7. **CTA final**
   - Headline: *"¿Tienes una idea para tu marca? Conversemos."*
   - 2 botones grandes: **WhatsApp · cotizar** + **LinkedIn**.
   - Email de respaldo: `hola@lasercrafts.cl`.

8. **Footer mínimo del landing**
   - Logo + razón social (Borquez Solutions SpA · Marca registrada en INAPI).
   - Links rápidos a las otras dos versiones de idioma.
   - Link a la tienda B2C (`lasercrafts.cl`) para quien llegó por error.

## 4. Capa i18n

Archivo: `src/i18n/empresas.ts`

```ts
export type Lang = "es" | "pt" | "en";
export const langs: Lang[] = ["es", "pt", "en"];
export const empresasCopy: Record<Lang, EmpresasCopy> = { es: {...}, pt: {...}, en: {...} };
```

Tipo `EmpresasCopy` cubre todos los strings de las 8 secciones. Decisión: **inline en TS, no JSON ni i18n runtime** — son 3 idiomas y no esperamos crecer. Mantenible, type-safe, sin overhead.

## 5. Componente LanguageSwitcher

`src/components/LanguageSwitcher.astro`

- Recibe prop `current: Lang`.
- Renderiza 3 botones: ES · PT · EN.
- Mapea a `/empresas/`, `/empresas/pt/`, `/empresas/en/`.
- Position: top-right del landing (encima del hero, dentro del primer container).
- Visualmente: chips con borde, el actual con fondo Petróleo y texto Lino.
- aria-current="page" para el actual.

## 6. WhatsApp parameterizado

Extender `src/lib/whatsapp.ts` con un nuevo tipo:

```ts
type Contexto =
  | { kind: "comprar" | "duda" | "home" | "flotante" | "ocasion"; ...existente }
  | { kind: "empresas"; lang: Lang };
```

Mensaje por idioma (URL-encoded):

- ES: `"Hola, los contacto desde lasercrafts.cl/empresas. Estoy evaluando un proyecto B2B y me gustaría cotizar..."`
- PT: `"Olá, entro em contato de lasercrafts.cl/empresas. Estou avaliando um projeto B2B e gostaria de orçar..."`
- EN: `"Hi, I'm reaching out from lasercrafts.cl/empresas. I'm exploring a B2B project and would like a quote..."`

## 7. LinkedIn

**Pendiente con Felipe:** URL exacto de la empresa en LinkedIn. Por ahora:

- Placeholder: `https://www.linkedin.com/company/lasercrafts/` (slug coincidente con la marca; verificar y reemplazar).
- Si no existe aún, dejar el botón **deshabilitado visualmente** con tooltip "Próximamente" hasta que se confirme. En esta primera entrega lo dejo como link activo con el placeholder — si el slug es otro, es un cambio de 1 línea.
- `rel="noopener noreferrer me"` para SEO/seguridad.

## 8. Assets

**Imágenes del caso Futangue:** extraídas del PDF con `pdftoppm` a `public/empresas/casos/futangue/page-{1..7}.png`. Usar las páginas 2, 3, 4, 5 (productos) en el grid del caso.

**Logo:** `/logo-horizontal.svg` ya existente.

**Hero:** decisión preliminar — usar `page-1.png` del catálogo (la portada con el ciervo armable) como hero image, ya que muestra producto + dirección visual cálida. Alternativa: usar un patrón abstracto si Felipe prefiere algo más neutro/internacional.

## 9. Tipografía y paleta

Misma del sitio — `Archivo Narrow` (display) + `Inter` (body) + `JetBrains Mono` (micro). La paleta Cielo Sur/Petróleo/Niebla/Lino aplica idéntica. No introducir nada nuevo.

**Registro:** el más editorial sobrio del moodboard (§7). Sin tono cotidiano. Frases cortas y precisas, presencia del español neutro para que no chille en Argentina/Perú/España.

## 10. Header del sitio

Agregar item nav `Empresas` al final del menú desktop (después de Contacto) y al final del menú móvil. El link apunta siempre a `/empresas/` (español) — desde ahí el visitante elige idioma.

**No** integrar el switcher de idiomas al header global, solo al landing empresas (es un canal específico, no el sitio entero traducido).

## 11. SEO

- `<title>` por idioma: *"Productos únicos en madera para empresas — LáserCrafts"* / *"Produtos únicos em madeira para empresas — LáserCrafts"* / *"Custom wood products for brands — LáserCrafts"*.
- Meta description única por idioma.
- `<link rel="alternate" hreflang>` × 3 + x-default.
- `<link rel="canonical">` apuntando a la versión del idioma actual.
- JSON-LD `Organization` con `sameAs: [linkedin, instagram]`.

## 12. Lo que NO se hace en esta entrega

- No traducir el resto del sitio (catálogo, FAQ, legales) — explícitamente fuera de alcance del landing B2B.
- No crear formulario web. Todo conduce a WhatsApp + LinkedIn.
- No agregar el caso Futangue al sitio B2C (`/casos`) — vive solo en el landing por ahora.
- No producir versión PDF del landing.

## 13. Riesgos / hipótesis a confirmar con Felipe

- ⚠ URL real de LinkedIn de la empresa.
- ⚠ ¿Hay otros casos B2B además de Futangue para mencionar? (Si los hay, vale anonimizar o pedir permiso.)
- ⚠ Tarifa mínima mayorista — ¿declarar un piso público o dejarlo "a cotizar"?
- ⚠ Despacho internacional — ¿con qué courier, costos quién los asume?
- ⚠ El catálogo Futangue dice "Reumén, Paillaco" como ubicación del taller — confirmar si publicar dirección o solo región.

## 14. Verificación

1. `npx astro build` sin errores.
2. Screenshot de las 3 versiones con Playwright.
3. Validar hreflang con `curl -I` o inspector.
4. Click sobre WA verifica mensaje en el idioma correcto.
