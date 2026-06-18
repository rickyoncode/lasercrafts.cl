# Moodboard — LáserCrafts v0.3

> 2026-06-03. Dirección dada por Felipe: **"serio para empresas, sobrio para personas"**. Logo existente (mono + wordmark + tagline "¿Y si mejor lo hacemos bien?") como punto de partida — no se rediseña, se afina y se sistematiza.
>
> **Cambio v0.1 → v0.2:** el quinto color de la paleta quedaba fijado en azul muted `#B9CDDA` ("Cielo Sur") después del comparativo side-by-side. El menta `#B8DBD9` original quedaba como alternativa explorada.
>
> **Cambio v0.2 → v0.3 (2026-06-18):** Felipe entregó nueva guía visual basada en una foto de escritorio premium (referencias: **grovemade.com**, **trophyology.com**). La paleta cambia completa: entra la **madera al sistema digital** (no solo en lo físico), el blanco puro reemplaza al lino, y el acento azul claro Cielo Sur queda **archivado junto al menta** (ver §2.2). Filosofía v0.2 ("fría enmarca cálida") queda revertida — ahora es **"madera y profundidad como sistema unificado"** (§3).

---

## 0. Hallazgos de los assets entregados

Al renderizar el logo entregado por Felipe con la paleta nueva, aparecieron tres cosas que reorientan el moodboard:

1. **La mascota es un mono estilizado**, no un oso. Esto cambia el registro: el mono trae *atención, oficio y un punto travieso* — quita rigidez al "serio" sin contradecirlo.
2. **El logo ya trae tagline:** *"¿Y SI MEJOR LO HACEMOS BIEN?"*. Esto es **propuesta de marca expresada** y es uno de los activos más fuertes del sistema. Toda la voz del rebrand puede vivir alrededor de esta pregunta.
3. **El wordmark "LÁSERCRAFTS"** está construido en una sans-serif geométrica condensed con tilde en la Á. Es industrial/técnico, no orgánico, y ya está alineado con la dirección "estudio + taller".

**Verificación visual de cómo se comporta el logo con la paleta:**
- `assets/logo-paleta-grovemade.png` — **paleta definitiva v0.3** (Profundo + Nogal + Roble + Fieltro + Papel + Antracita + Cobre).
- `assets/logo-paleta-azul.png` — paleta v0.2 archivada (Cielo Sur `#B9CDDA`).
- `assets/logo-paleta.png` — variante menta v0.1 archivada (`#B8DBD9`).
- `assets/comparativo.png` — side-by-side menta vs azul que fundamentó la transición v0.1 → v0.2.
- HTMLs reproducibles equivalentes en `assets/*.html` (servir con `python3 -m http.server` desde `branding/assets/`).

---

## 1. Síntesis de dirección — una frase

> **"Taller chileno con estándar de estudio de diseño."**

Editorial sin ser frío. Sobrio sin ser solemne. La pregunta del tagline (*"¿y si mejor lo hacemos bien?"*) atraviesa todo: tono, foto, packaging, despacho, atención.

### Lo que la marca SÍ es

- Editorial, arquitectónica, calmada.
- Founder-led (Felipe se ve y se nota).
- Material honesta: terciado real, no falso roble.
- Precisa en el lenguaje: cero relleno corporativo.
- Atenta a la fecha: la promesa del plazo se respeta.

### Lo que la marca NO es

- Manualidades Pinterest, kraft tipográfico "rustic", brush handwritten.
- Influencer studio: gradient, holografía, glitter, lifestyle.
- Cabaña / folk: ramas, hojas, serif tradicional decorada.
- Corporate frío: stock photo, "we are passionate about", azul SaaS.
- Etsy genérico: "handmade with love" + tipografía caligráfica.

---

## 2. Paleta — análisis y uso operativo

### 2.1 Paleta definitiva v0.3 (dirección Grovemade)

Paleta entregada por Felipe el 2026-06-18, leyendo una foto de escritorio premium (madera nogal + pared azul-gris mate + fieltro gris + planta + acento terracota). Referencias: **grovemade.com**, **trophyology.com**.

| HEX | Nombre interno | Rol | Proporción sugerida | Nota |
|---|---|---|---|---|
| `#FFFFFF` | **Papel** | Fondo base claro, texto sobre fondos oscuros | ~30% | Blanco puro mate. Reemplaza al Lino — el cliente quiere blanco directo, no off-white. |
| `#0D4080` | **Profundo** | Header, footer, secciones de anclaje, texto principal sobre claro | ~25% | Azul real saturado. Confirmado por Felipe el 2026-06-18 como reemplazo del primer estimado `#2D394C` (más mate). Más contraste, más identidad. |
| `#703D24` | **Nogal** | Cuerpo principal de secciones destacadas (hero, casos, portfolio) | ~20% | Café profundo y saturado, confirmado por Felipe el 2026-06-18 (reemplaza el primer estimado `#A17351`). Texto Papel sobre Nogal. |
| `#7C888D` | **Fieltro** | Secciones de contenido detallado (FAQ, condiciones, "cómo funciona") | ~15% | Gris medio jaspeado. Texto Antracita sobre Fieltro. Reemplaza a Niebla. |
| `#1D1D1D` | **Antracita** | Texto secundario sobre Papel/Fieltro, bordes finos, íconos | ~7% | Reemplaza al negro puro en interfaz. El `#000000` queda solo para sello físico. |
| `#BB6A4B` | **Cobre** | CTA pop único (carrito, "Comprar ahora", contacto especial) | ~3% | Acento terracota. **Una vez por pantalla máximo.** Si se usa dos veces pierde su función. |
| `#8F5F3E` | **Roble** | Variante madera intermedia: hover suave, bordes/líneas en piezas con fondo Nogal | uso puntual | Más claro que Nogal — la jerarquía ahora es Nogal (oscuro) > Roble (intermedio) > Cobre (acento). |

### 2.2 Alternativas exploradas y archivadas

- **Menta Sur `#B8DBD9` (v0.1).** Quinto color de la propuesta original de Coolors. Descartado porque rompe coherencia monocromática-azul y tira al "spa/wellness". Render: `assets/logo-paleta.png`.
- **Cielo Sur `#B9CDDA` (v0.2).** Acento azul muted que reemplazó al menta tras comparativo side-by-side. Quedó descartado en v0.3 porque la dirección Grovemade no admite un acento azul claro: la familia ahora es **profundo + madera + fieltro**, no monocromática azul. Render: `assets/logo-paleta-azul.png`. Comparativo menta/azul: `assets/comparativo.png`.
- Ambas quedan como **recursos archivados con valor histórico**. No se usan, pero la documentación está para entender el camino que llevó a v0.3.

### 2.3 Reglas de uso

- **Papel (#FFFFFF) puede ser fondo dominante** o texto sobre Profundo/Nogal/Roble. No usar Papel sobre Fieltro como texto — el contraste no llega (ver §2.4).
- **Profundo (#0D4080)** es el ancla oscura del sistema: header, footer, y cualquier sección donde la marca quiere "callar y hacerse seria". Texto sobre Profundo: Papel.
- **Nogal (#703D24)** entra como **fondo de sección destacada** — hero, casos de estudio, cuerpo de portfolio, "qué hacemos". Es el sello visual cálido. **No usar Nogal en cuerpos de texto largos** (cansa); usarlo en bloques de máximo 600px de alto.
- **Roble (#8F5F3E)** es la pareja **intermedia** del Nogal (más clara que el Nogal nuevo): hover, bordes, separadores dentro de piezas con fondo Nogal. **No fondo extenso.**
- **Fieltro (#7C888D)** es donde vive el detalle: FAQ, condiciones, "cómo funciona", proceso. Texto sobre Fieltro: Antracita.
- **Antracita (#1D1D1D) reemplaza al negro puro en interfaz.** Texto secundario sobre Papel/Fieltro, bordes finos, íconos. El `#000000` queda únicamente para sello físico láser sobre madera.
- **Cobre (#BB6A4B) es la regla del "una vez por pantalla".** CTA principal de la home si hay "Comprar ahora", botón de WhatsApp del landing B2B, link único de "contacto urgente". Si se usa dos veces deja de ser pop y se vuelve color institucional.
- **El terciado físico dialoga ahora con Nogal/Roble en lo digital.** Esto es el cambio filosófico de v0.3 (ver §3).

### 2.4 Accesibilidad (contraste WCAG)

| Fondo / Texto | Ratio | OK |
|---|---|---|
| Profundo `#0D4080` sobre Papel `#FFFFFF` | 10.4:1 | ✅ AAA |
| Antracita `#1D1D1D` sobre Papel | 16.7:1 | ✅ AAA |
| Papel sobre Profundo | 10.4:1 | ✅ AAA |
| Papel sobre Nogal `#703D24` | 8.2:1 | ✅ AAA |
| Papel sobre Roble `#8F5F3E` | 6.1:1 | ✅ AA |
| Antracita sobre Fieltro `#7C888D` | 5.0:1 | ✅ AA |
| Papel sobre Fieltro | 3.4:1 | ❌ no para cuerpo, OK solo headings grandes (AA large) |
| Profundo sobre Nogal | 2.3:1 | ❌ no usar para texto, OK para borde decorativo |
| Papel sobre Cobre `#BB6A4B` | 4.0:1 | ✅ AA para CTAs (botones grandes) |
| Antracita sobre Cobre | 4.2:1 | ✅ AA texto large, ❌ body |

---

## 3. El sistema material: madera y profundidad como sistema unificado

**v0.2 partía de "paleta fría enmarca al material cálido".** Era una decisión que sostenía la seriedad pero que dejaba al terciado *afuera* del sistema digital. v0.3 invierte la decisión: la **madera entra al sistema** — Nogal y Roble son colores nominales del branding, no solo texturas en la foto producto.

**Por qué tiene sentido:**
- LáserCrafts trabaja **solo en terciado**. La identidad ya es materialidad. Encerrarla en una paleta fría era pelearse con la propia marca.
- Las referencias del cliente (Grovemade, Trophyology) son estudios que venden objeto cálido en madera real, y su web usa madera *como color*, no solo como foto.
- La sofisticación premium no la da el "blanco quirúrgico"; la da el **contraste entre profundo y madera**, con blanco como respiro.

**Estrategia v0.3:**
- **Profundo + Papel** son el sistema editorial: hero claros, header/footer oscuros, jerarquía limpia.
- **Nogal + Roble** son el sistema material: secciones donde la marca se vuelve táctil. El cliente percibe el producto antes de tocarlo.
- **Fieltro + Antracita** son el sistema funcional: donde vive el detalle de operación (condiciones, FAQ, proceso, cotización).
- **Cobre** es el sistema de acción: el "haz click ahora" — sale del coro institucional para llevar a una decisión.
- La foto del producto (terciado real) dialoga con el Nogal del fondo en lugar de pelearse con un Lino frío.

**Lo que NO hacemos:**
- **Nogal en cuerpos de texto largos.** Es fondo de sección, no de párrafo. Una sección Nogal trae 1–2 párrafos máximo + CTA. Lo extenso vive en Papel/Fieltro.
- **Cobre en más de un elemento por vista.** Pierde la función de "pop".
- **Mezclar Cielo Sur, Menta o cualquier acento azul claro** — el sistema ya no admite esa familia. Si una pieza vieja lo necesita (ej. catálogo Futangue v0.2), queda como pieza histórica.
- **Filtrar la foto del terciado para que tire a frío** — la madera honesta sigue siendo la regla, ahora reforzada por la paleta.

---

## 4. Tipografía — propuesta para alinear al sitio en construcción

Como el sitio ya está en construcción, esta sección es propositiva — debe validarse contra lo que Felipe ya implementó. Si hay tipografía elegida, se ajusta el moodboard a eso.

**Recomendación de pairing (un único par para todo el sistema):**

| Rol | Familia propuesta | Por qué | Alternativa libre |
|---|---|---|---|
| **Display / Headers** | **GT America Condensed** o **Söhne Breit** | Geométrica con presencia editorial; calza con la condensación del wordmark del logo. | **Archivo Narrow** (Google Fonts, gratis) — buen sustituto. |
| **Texto / Cuerpo** | **Söhne** o **Inter** | Sans neutra contemporánea, legibilidad larga. | **Inter** (Google Fonts, gratis). |
| **Detalle técnico / mono** | **Söhne Mono** | Solo para tickers, precios, códigos de pedido. | **JetBrains Mono** (gratis). |

**Si el presupuesto pesa**, el pairing 100% libre/Google Fonts es: **Archivo Narrow (display) + Inter (texto) + JetBrains Mono (detalle)**. Funciona y es serio.

---

## 5. Sistema material y texturas

| Elemento | Tratamiento |
|---|---|
| **Veta del terciado** | Foto macro real, nunca patrón vectorial. Aparece en hero, fichas de producto y stories. |
| **Grabado láser** | Detalle visible en macros. Se respeta el tono quemado (caramelo a marrón oscuro), no se filtra a negro. |
| **Papel kraft** | En bolsa de despacho y tarjeta interior. Honesto, sin estética "DIY". |
| **Hilo / amarre** | Hilo natural (yute o algodón crudo) en cierre de bolsa. No usar lazo decorativo. |
| **Sello físico** | Negro puro `#000000` (única aplicación que usa negro puro en todo el sistema), dos tamaños (8mm y 15mm), solo isotipo (sin tagline ni wordmark). |
| **Firma manuscrita** | Posibilidad de un "F." manuscrito de Felipe en algunas piezas — sello de autor opcional. |

---

## 6. Tono fotográfico

| Aspecto | Decisión |
|---|---|
| **Fondo** | Papel `#FFFFFF`, Nogal `#703D24` (madera plana) o terciado real fotografiado. Nada de marble, nada de tela, nada de café. Plantas verdes frescas opcionales (referencia Grovemade). |
| **Luz** | Natural cenital o ventana grande, sombras suaves. Tiempo diurno. |
| **Composición** | Producto centrado o con regla de tercios. Mucho aire. No styling de Pinterest. |
| **Mano humana** | Mano de Felipe esporádica, para escala y calor. No mano "femenina con manicura perfecta". |
| **Retrato del fundador** | 1–2 retratos editoriales del taller (Felipe trabajando, no posando), para home y página "sobre". |
| **Producto en uso** | Casos reales de clientes felices con permiso (cumple, matri). Estética documental, no publicitaria. |

---

## 7. Tres registros dentro del mismo sistema

Una sola identidad, tres tonos según contexto. **No son tres rutas competidoras** — son tres marcas de volumen del mismo sistema.

### 7.1 — Editorial sobrio (registro corporativo)

- **Usar cuando:** cotización a empresa, propuesta de matrimonio/evento, página "sobre", contacto B2B, landing `/empresas`.
- **Visual:** mucho aire, tipografía display grande, foto producto sola sobre Papel. **Papel + Profundo + Antracita.** Cero Nogal extenso, cero Cobre.
- **Voz:** institucional pero humana. "LáserCrafts produce piezas en terciado grabado, con despacho a todo Chile."
- **Referencias estéticas:** Aesop, Le Labo, Mast Brothers.

### 7.2 — Taller arquitectónico (registro core, default del sitio)

- **Usar cuando:** home, catálogo, fichas de producto, packaging.
- **Visual:** lockup con tagline "¿y si mejor lo hacemos bien?", combinación de tipografía display + texto, foto producto con terciado visible. **Papel + Profundo + Nogal + Fieltro.** El Nogal entra en hero y secciones destacadas; el Cobre solo en CTA principal.
- **Voz:** clara, corta, en primera persona. "Lo hicimos esta mañana. Llega antes del viernes."
- **Referencias estéticas:** Grovemade, Trophyology; estudios de cerámica/madera contemporáneos: Stockholm Surfboard Club, Public Records (NY), Stroke (Berlín).

### 7.3 — Taller cotidiano (registro IG / stories)

- **Usar cuando:** stories, reels, WhatsApp, comunicación cotidiana, "Cliente feliz".
- **Visual:** foto del proceso, mano de Felipe, terciado en bruto, tipografía sobre foto con caja de Profundo o Papel. Predominan **Nogal + Papel + Cobre** (este último para una palabra clave por placa).
- **Voz:** Felipe en primera persona, casi conversacional. "Saliendo el pedido de la Cami 🌳"
- **Referencias estéticas:** estudios chilenos honestos (Bombo, Rojo Bermejo, Yaco) — sin caer en folklorismo.

---

## 8. Uso del tagline "¿Y si mejor lo hacemos bien?"

Esto es el activo verbal más valioso del sistema. Recomendaciones:

- **En el logo:** se mantiene como parte del lockup horizontal (ya viene incluido en el SVG).
- **En la home:** se usa como sub-hero, no como hero principal. El hero es producto + plazo.
- **En el packaging:** sello impreso en la tarjeta interior. El cliente lo lee al abrir el regalo.
- **En el sello físico:** NO se imprime el tagline (solo el isotipo).
- **En el WhatsApp:** no se usa como saludo automático (sería forzado). Sí en cierres de email/cotización.

**Versiones derivadas posibles** (a explorar): "Lo hacemos bien." (afirmativa, para cierres), "Hagámoslo bien." (invitación, para colaboraciones B2B).

---

## 9. Aplicación del logo — recomendaciones operativas

Basado en las pruebas renderizadas en `assets/logo-paleta-grovemade.png` (paleta v0.3 definitiva):

| Combinación | Uso recomendado | Por qué |
|---|---|---|
| **Profundo sobre Papel** | Logo principal en sitio (header sticky con fondo Papel), packaging, papelería B2B | Contraste óptimo, legibilidad clínica, default editorial. |
| **Papel sobre Profundo** | Header oscuro del sitio, footer, hero de redes sociales, uniformes | Más cinematográfico, ideal para impacto e identidad de canal. |
| **Papel sobre Nogal** | Hero del landing B2B, cards de portfolio, secciones destacadas con cuerpo madera | Calidez premium; el logo se vuelve sello sobre material. Es el "logo Grovemade". |
| **Antracita sobre Papel** | Variante técnica para fichas de producto, manual, documentación interna | Más neutro que Profundo cuando se quiere "callar" la marca. |
| **Antracita sobre Fieltro** | Logo en zonas de detalle (footer secundario, FAQ, condiciones legales) | Calmado, descansa la vista en zonas largas. |
| **Tinta `#000000` sobre madera real** | Sello físico láser, firma del taller en cada pieza | Es donde el negro puro tiene sentido — el grabado láser quema en negro sobre terciado. |
| **Cobre sobre Profundo** | Una única aplicación de "logo activado" para CTA hero opcional (ej. promo de temporada) | Solo si la página entera apoya el pop. Default: no. |

**Aplicaciones donde se prefiere isotipo solo (sin wordmark):**
- Favicon y app icon.
- Sello físico en madera (grabado láser, Tinta `#000000`).
- Avatar de redes sociales (la cabeza del mono se lee a 32px; el lockup completo no).
- Sticker pequeño de packaging.

---

## 10. Aplicaciones piloto (a producir como entregable de la siguiente fase)

| Pieza | Descripción | Prioridad |
|---|---|---|
| **Home del sitio** | Hero foto producto + headline + plazo calculado + CTA WhatsApp + categorías por ocasión. | #1 |
| **Ficha de producto** | Foto principal terciado, opciones de personalización, plazo, botón "Pedir por WhatsApp". | #1 |
| **Plantilla IG feed** | 3 plantillas: producto solo, cliente feliz, proceso. | #2 |
| **Plantilla stories** | Diaria + temporada (Día Madre, Navidad). | #2 |
| **Packaging:** bolsa kraft + sticker + tarjeta | Sticker circular con isotipo, tarjeta con tagline + mensaje manuscrito. | #2 |
| **Sello físico** | 8mm y 15mm, isotipo en tinta. | #3 |
| **Plantillas WhatsApp** | 6 plantillas: saludo, cotización, plazo, pago, despacho, post-venta. | #3 |
| **Firma email** | Texto plano con jerarquía. | #3 |
| **Mini brand book** | 12 páginas: logo, paleta, tipografía, voz, do/don't. | #4 |

---

## 11. Hipótesis a validar antes de pasar a producción

- [ ] ¿Tipografía elegida en el sitio en construcción? Validar pairing.
- [ ] ¿Se mantiene el lockup actual del logo o se quiere refinar (kerning, tilde, proporciones del mono)?
- [ ] ¿La mascota tiene nombre? Si lo tiene, vale la pena documentarlo para tonos posteriores.
- [ ] ¿Felipe quiere que las versiones del logo se generen como entregable (HEX exactos en SVG limpios, varias proporciones)?
- [ ] ¿Hay productos cuyo grabado requiere variante simplificada del isotipo (silueta solo, sin detalles)?
- [ ] ¿Existe ya un fotógrafo o se necesita producción fotográfica?

---

**Estado:** moodboard listo. Pieza acompañante: `assets/logo-paleta.png` (render del logo aplicado a la paleta).

**Próximo paso propuesto:** producir los SVGs limpios del logo en las combinaciones aprobadas (`logo-principal.svg`, `logo-invertido.svg`, `isotipo.svg`, `sello.svg`) + maqueta de la home del sitio (Pieza #1 de §10).
