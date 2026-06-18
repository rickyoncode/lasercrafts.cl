# Plan — Rebrand paleta v0.2 → v0.3 (dirección Grovemade)

> 2026-06-18. Felipe entregó una nueva guía visual basada en una foto de escritorio premium (estilo Grovemade / Trophyology). Pide modificar **primero el manual de branding**, luego **la web**. El logo, el wordmark, el tagline, los tres registros tonales y el buyer persona se mantienen — lo que cambia es la **paleta y la jerarquía de aplicación**.

## 1. Origen del cambio

Mensaje del cliente (textual):

> *"El objetivo es capturar la sofisticación, el minimalismo premium y la sensación táctil y cálida de la configuración de escritorio que se ve en la imagen. La paleta debe transmitir profesionalismo, calidad artesanal y diseño reflexivo. No se trata solo de los colores, sino de la jerarquía y la materialidad que representan."*

Referencias entregadas: **grovemade.com**, **trophyology.com**.

Esto reabre la decisión de paleta cerrada en `CLAUDE.md` y en `moodboard.md §2`. Es pedido explícito del cliente, así que procede.

## 2. Qué cambia y qué se mantiene

### Se mantiene
- Logo (mascota mono + wordmark + tagline "¿Y SI MEJOR LO HACEMOS BIEN?").
- Tipografía (Archivo Narrow / Inter / JetBrains Mono).
- Tres registros: editorial sobrio, taller arquitectónico, taller cotidiano.
- Buyer persona Camila del Sur.
- Foco B2C + landing B2B trilingüe en `/empresas`.
- Materialidad: solo terciado.
- Voz y tono.

### Cambia
- **Paleta completa.** v0.2 era "fría enmarca a la cálida"; v0.3 es **"cálida abraza a la cálida"** — la madera entra al sistema digital, no se queda solo en lo físico.
- **Jerarquía de fondos.** Header/footer dejan de ser Lino claro y pasan a azul-gris profundo. El cuerpo intercala madera + fieltro + blanco. El "fondo lino dominante" deja de ser regla.
- **Color de acento.** Cielo Sur azul claro queda archivado (igual que el menta antes). El nuevo acento "pop" es Cobre/Terracota `#BB6A4B`, usado con extrema parquedad.
- **Texto sobre oscuro.** Pasa de Lino `#F4F4F9` a Blanco Puro `#FFFFFF`.
- **Color de marca oscuro.** De Petróleo `#2F4550` a Profundo `#0D4080` (cambio mínimo, casi idéntico — el roleo es lo que cambia).
- **Negro físico.** De `#000000` Tinta a `#1D1D1D` Antracita — se suaviza para interfaz; el negro puro queda reservado al sello físico.

## 3. Paleta v0.3 — definitiva

| HEX | Nombre interno | Rol | Notas |
|---|---|---|---|
| `#0D4080` | **Profundo** | Header, footer, secciones de anclaje, texto sobre claro | Reemplaza a Petróleo. Calza con la imagen de Felipe (pared de fondo). |
| `#703D24` | **Nogal** | Cuerpo principal — secciones destacadas (hero, casos, portfolio) | Madera caliente. Texto blanco sobre nogal. |
| `#8F5F3E` | **Roble** | Variante madera oscura, hover de Nogal, bordes/lineas en piezas madera | No usar como fondo extenso (cansa); pareja del Nogal. |
| `#7C888D` | **Fieltro** | Secciones de contenido detallado, "cómo funciona", FAQ | Gris medio jaspeado. Texto Antracita sobre Fieltro. |
| `#FFFFFF` | **Papel** | Fondo base claro, texto sobre Profundo/Nogal/Roble | Blanco puro, no off-white. |
| `#1D1D1D` | **Antracita** | Texto secundario sobre Papel/Fieltro, bordes finos, íconos | Reemplaza al negro puro en interfaz. |
| `#BB6A4B` | **Cobre** | CTA pop único: carrito, "Comprar ahora", contacto especial | Uso muy raro. Una vez por pantalla máximo. |

### Proporciones sugeridas

- ~30% Papel (#FFFFFF) — fondo base de cuerpo y áreas blancas.
- ~25% Profundo (#0D4080) — header, footer, secciones de anclaje.
- ~20% Nogal (#703D24) — secciones destacadas, cards de producto principales.
- ~15% Fieltro (#7C888D) — secciones de detalle, FAQ, condiciones.
- ~7% Antracita (#1D1D1D) — texto secundario, bordes.
- ~3% Cobre (#BB6A4B) — CTA pop único.
- Roble (#8F5F3E) entra como variante puntual, no se cuenta como % independiente.

## 4. Mapeo de variables CSS (impacto en `web/maqueta/src/styles/global.css`)

Decisión: **renombrar** las variables, no aliasar las viejas. Un `--color-cielo-sur` apuntando a marrón sería confuso al leer el código.

| Variable actual | Nueva variable | Valor actual → nuevo |
|---|---|---|
| `--color-lino` | `--color-papel` | `#F4F4F9` → `#FFFFFF` |
| `--color-petroleo` | `--color-profundo` | `#2F4550` → `#0D4080` |
| `--color-niebla` | `--color-fieltro` | `#586F7C` → `#7C888D` |
| `--color-cielo-sur` | *(eliminado)* | el rol de acento lo absorbe Nogal o Cobre según contexto |
| `--color-tinta` | `--color-antracita` | `#000000` → `#1D1D1D` |
| — | `--color-nogal` (nueva) | `#703D24` |
| — | `--color-roble` (nueva) | `#8F5F3E` |
| — | `--color-cobre` (nueva) | `#BB6A4B` |
| `--color-petroleo-08/16/64` | `--color-profundo-08/16/64` | mismo alpha, nuevo HEX base |
| `--color-niebla-50` | `--color-fieltro-50` | mismo alpha, nuevo HEX base |

Archivos afectados por el rename (21 totales): `global.css`, `BaseLayout.astro`, `EmpresasLayout.astro`, `Header.astro`, `Footer.astro`, `WhatsAppFloat.astro`, `ProductCard.astro`, `OcasionTile.astro`, `ClienteFelizCard.astro`, `LanguageSwitcher.astro`, `EmpresasView.astro`, y 10 archivos `.astro` en `src/pages/`.

## 5. Plan de jerarquía de aplicación en la web

Trasladando la guía del cliente al sitio Astro existente:

### Home B2C (`/`)
- **Header sticky:** fondo Profundo, logo y nav en Papel.
- **Hero:** sigue siendo claro (foto producto sobre fondo Papel o Nogal). Si va Nogal → texto Papel. CTA primario Profundo sobre Papel; CTA pop Cobre solo si hay "Comprar".
- **Sección por ocasión:** fondo Fieltro, cards en Papel con borde fino Antracita-08.
- **Cliente feliz:** fondo Nogal, texto Papel, card de testimonio en Papel.
- **Footer:** fondo Profundo, texto Papel.

### Landing B2B (`/empresas/[lang]/`)
- **EmpresasLayout header:** Profundo + Papel (en vez del Lino actual). Switcher de idioma en Papel sobre Profundo.
- **Hero:** fondo Nogal con foto del catálogo Futangue como cita visual. Texto Papel.
- **Trust strip:** fondo Papel, eyebrows Antracita.
- **Capacidades (4 cards):** fondo Fieltro, cards en Papel.
- **Caso Futangue:** fondo Profundo, texto Papel, grid de 4 imágenes con borde Roble.
- **Proceso (5 pasos):** fondo Papel, números en Profundo, texto Antracita.
- **Materiales:** fondo Nogal, texto Papel.
- **CTA final:** fondo Profundo, botón WhatsApp Cobre (única excepción de pop en el landing).
- **Footer:** Profundo + Papel.

### Componentes transversales
- **`.btn-primary`:** fondo Profundo + Papel (default), hover Nogal.
- **`.btn-ghost`:** transparente + Profundo + borde Antracita-16, hover Papel sobre Profundo.
- **`.btn-pop`** (nueva clase): fondo Cobre + Papel, para CTA único.
- **`.plazo` (pill):** fondo Nogal-12 + texto Profundo. Reemplaza el azul claro Cielo Sur que ya no existe.
- **`.eyebrow`:** mono, micro, Antracita o Fieltro según fondo.

## 6. Plan del manual de branding

### `branding/moodboard.md` (v0.2 → v0.3)
- Bloque inicial: agregar línea "Cambio v0.2 → v0.3: dirección Grovemade. Cielo Sur archivado junto al menta. Madera entra al sistema digital."
- **§0:** mantener (los hallazgos del logo siguen vigentes).
- **§1:** mantener (la frase síntesis sigue funcionando, ahora con la materialidad coherente).
- **§2.1:** **reescribir completo** con paleta v0.3.
- **§2.2:** renombrar a "Alternativas exploradas y archivadas" — Menta + Cielo Sur, ambas con explicación.
- **§2.3:** Accesibilidad (recalcular tabla WCAG con nuevos colores).
- **§3:** **reescribir** — la filosofía cambia. Ya no es "fría enmarca cálida"; ahora es "madera y profundidad como sistema unificado". El terciado físico dialoga con Nogal/Roble digitales.
- **§4:** mantener (tipografía intacta).
- **§5–6:** mantener (materialidad física + fotografía).
- **§7:** ajustar — los tres registros heredan los nuevos colores. Editorial sobrio = Papel + Profundo + Antracita. Taller arquitectónico = Papel + Nogal + Profundo. Taller cotidiano = Nogal + Papel + Cobre.
- **§8:** mantener (tagline intacto).
- **§9:** **reescribir** — combinaciones de logo:
  - Profundo sobre Papel — principal.
  - Papel sobre Profundo — hero/redes.
  - Papel sobre Nogal — secciones destacadas.
  - Antracita sobre Papel — versión técnica/sello.
  - Tinta `#000000` sobre Papel — únicamente sello físico.
- **§10–11:** mantener (aplicaciones piloto + hipótesis abiertas).

### `branding/brief.md` (v0.3 → v0.4)
Cambio mínimo: §17.2 ("paleta — proponer eje madera natural + un acento contemporáneo") queda cumplido. Agregar nota: paleta definitiva en moodboard §2 v0.3.

### `CLAUDE.md`
Reemplazar línea "Paleta:" en sección "Decisiones cerradas" con paleta v0.3. Cambiar también la línea "Reemplazar el negro puro por `#2F4550`" → "por `#1D1D1D` Antracita en interfaz; `#000000` queda reservado al sello físico".

## 7. Plan de renders del logo

`branding/assets/`:
- **Crear** `logo-paleta-grovemade.html` con las 6 combinaciones nuevas (Profundo/Papel, Papel/Profundo, Papel/Nogal, Antracita/Papel, Papel/Fieltro, Tinta/Papel).
- **Servir** con `python3 -m http.server` en `:8765` y screenshot via Playwright a 1440×900 fullPage.
- `logo-paleta-azul.html` queda como archivo histórico (no se borra — sirve de registro de la decisión anterior).

## 8. Orden de ejecución

1. ✅ Plan documentado (este archivo).
2. moodboard.md v0.3.
3. CLAUDE.md sección Decisiones cerradas.
4. brief.md notita en §17.
5. Render `logo-paleta-grovemade.html` + screenshot.
6. global.css con variables nuevas.
7. Find/replace en components/, layouts/, pages/.
8. Ajustes finos donde la jerarquía cambia (header del EmpresasLayout, cards de producto, etc.).
9. Build (`astro build`).
10. Screenshots full-page de home, /empresas, /empresas/pt, /empresas/en a 1440×900.

## 9. Riesgos e hipótesis abiertas

- ⚠ El cliente puede preferir que el cuerpo principal NO use Nogal extenso (madera como fondo grande puede cansar). Producir primera versión y validar con Felipe antes de empujar a otras páginas no-críticas.
- ⚠ El acento Cobre `#BB6A4B` está muy cerca del Nogal `#703D24` en hue — verificar que se distingan en pantalla. Si no, considerar Cobre más saturado.
- ⚠ La paleta v0.3 tiene 7 colores nominales vs los 5 v0.2. Más expresividad, pero más riesgo de inconsistencia. Las reglas de proporción en §3 son la guarda.
- ⚠ El landing B2B `/empresas` ya tiene screenshots aprobados en v0.2. Estos quedan obsoletos — re-screenshot después de aplicar v0.3.
- ⚠ Decisión separada: si Felipe quiere que se mantenga **alguna** sección clara extensa en la home (estilo Grovemade), confirmarlo. Default propuesto: hero claro, intercalado con secciones Nogal/Fieltro/Profundo.

## 10. Out of scope (no se toca en esta iteración)

- Catálogo Futangue PDF (es entregable cerrado, queda en v0.2 estética).
- IG / packaging / sello físico (siguiente fase).
- SVGs limpios del logo (`logo-principal.svg`, etc.) — siguen pendientes desde §10 del moodboard original.
- Mini brand book ~12 páginas — última fase.
