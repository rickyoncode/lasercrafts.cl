# Brief de Diseño Web — LáserCrafts

> v0.1 — 2026-06-03. Brief para el diseñador a cargo de la **maqueta HTML** del sitio `lasercrafts.cl`. Esta maqueta es la **primera versión estática** del sitio: muestra el catálogo y deriva la conversión a WhatsApp. **No hay carrito ni pasarela de pago** — eso se evalúa más adelante.
>
> Documentos asociados (lectura obligatoria antes de empezar):
> - `../branding/brief.md` — propuesta de marca, audiencias, no-gos.
> - `../branding/buyer-persona.md` — "Camila del Sur", el journey real, comportamiento mobile.
> - `../branding/moodboard.md` — paleta definitiva, tipografía, registros visuales, aplicaciones del logo.
> - `../branding/logos/` — SVGs del logo (ignorar el rojo, fill = `currentColor`).
> - `../branding/assets/logo-paleta-azul.png` — referencia visual del logo aplicado a la paleta.

---

## 1. Contexto en una frase

LáserCrafts es un taller chileno de **regalo personalizado en terciado grabado a láser**, operado por Felipe (fundador único), con despacho a todo Chile. El sitio sirve dos públicos a la vez —**sobrio para personas, serio para empresas**— sin partir la marca en dos.

**Tagline transversal de la marca:** *"¿Y si mejor lo hacemos bien?"*

---

## 2. Objetivo de esta maqueta

| | |
|---|---|
| **Sirve para** | Ser la **vitrina creíble** que valida al cliente referido (el 80% del tráfico es boca-a-boca → IG → web) y termina derivando la conversación a WhatsApp para cerrar el pedido. |
| **No sirve para** | Vender por sí sola con checkout propio. No es un Shopify-killer. Es un catálogo navegable + páginas legales mínimas. |
| **Métrica clave** | **Clics al botón de WhatsApp** desde PDP y listado. Todo lo demás es secundario. |

---

## 3. Stack y entregable

| Aspecto | Decisión |
|---|---|
| **Entregable** | **Maqueta HTML estática** — un set de archivos `.html` + CSS + assets, navegable abriendo `index.html`. |
| **Build** | Sin framework obligatorio. Si el diseñador prefiere usar un static site generator (Astro, 11ty), bienvenido — siempre que el output final sea HTML plano servible. |
| **Estilos** | CSS plano o Tailwind. Variables CSS para la paleta (ver §8). |
| **JS** | Mínimo. Solo lo necesario: menú móvil, galería de fotos en PDP, lazy-load de imágenes. No SPA. |
| **Hosting (futuro)** | Cloudflare Pages o Vercel (DNS de los dominios ya está en Cloudflare). |
| **Repo** | Sugerido entregar como zip + repo Git con instrucciones para servir local (`python3 -m http.server` o `npm run dev` según stack). |

---

## 4. Sitemap

```
/                                  → Home
/productos                         → Listado completo (con filtros)
/productos/{slug-ocasion}          → Listado filtrado por ocasión
/producto/{slug-producto}          → PDP (Product Detail Page)
/sobre                             → Sobre el taller / Felipe
/despachos                         → Política de despachos y plazos
/cambios-y-devoluciones            → Política de cambios y devoluciones
/terminos                          → Términos y condiciones
/privacidad                        → Política de privacidad (Ley 19.628)
/preguntas-frecuentes              → FAQ
/contacto                          → Contacto (WhatsApp + email + redes)
```

URLs siempre en **kebab-case** y en **español**. Sin trailing slash. Sin `.html` en la URL final (servidor lo resuelve).

---

## 5. Estructura página por página

### 5.1 Home (`/`)

**Bloque obligatorio (en orden vertical):**

1. **Header global** (ver §6.1).
2. **Hero:**
   - Headline grande en Petróleo sobre Lino.
   - Sub-headline corta que use el tagline o variante: *"Regalo en madera, hecho a propósito."*
   - **Píldora de plazo dinámica**: *"Si pides hoy, llega antes del [fecha calculada]"* — por ahora hard-coded "antes del viernes" o similar; luego se parametriza por región.
   - CTA primario: botón Petróleo → lleva a `/productos`.
   - CTA secundario: enlace WhatsApp (icono + texto) → ver §7.
   - Foto principal: producto real sobre fondo Lino, alta calidad.
3. **Categorías por ocasión** (cuadrícula 3 × 2 o 2 × 3 en mobile):
   - Cumpleaños, Día de la Madre, Día del Padre, Matrimonios, Navidad, San Valentín.
   - Cada tile = foto + nombre de ocasión + link a `/productos/{ocasion}`.
   - Decisión de UX clave: **el sitio se organiza por ocasión antes que por producto** — Camila entra con una fecha en la cabeza, no con un objeto.
4. **Top productos** (carrusel o grilla de 6–8):
   - Card de producto (ver §6.4) → linkea a PDP.
5. **Sección "Cliente feliz"**:
   - 4–6 fotos reales de pedidos entregados, con nombre del cliente y ocasión.
   - Estética documental, no publicitaria.
6. **Cómo funciona** (3 pasos):
   - "Eliges tu pieza → conversamos por WhatsApp → llega a tu puerta."
   - Iconografía simple, sin emojis decorativos.
7. **Sobre el taller** (banner corto):
   - Retrato de Felipe en el taller + 2 líneas.
   - Link a `/sobre`.
8. **Footer global** (ver §6.2).

**Lo que NO va en la home:**
- Newsletter / "suscríbete".
- Reviews carrusel "5 estrellas".
- "Síguenos en redes" pesado.
- Banner de descuentos.

### 5.2 Listado de productos (`/productos` y `/productos/{ocasion}`)

**Estructura:**

1. Header global.
2. Breadcrumb: `Inicio › Productos › [Ocasión]`.
3. Título de la sección + subtítulo corto.
4. **Filtros laterales (desktop) / colapsables (mobile):**
   - Ocasión.
   - Rango de precio.
   - Tipo de producto (posavasos, llavero, recordatorio, decoración…).
   - Tiempo de entrega (≤3 días, ≤7 días).
5. **Grilla de productos** — 3 columnas desktop, 2 mobile.
   - Card de producto (ver §6.4).
6. Paginación numerada (no infinite scroll — el catálogo no será gigante).
7. Footer global.

**Si no hay productos en el filtro:** estado vacío con copy honesto + CTA WhatsApp ("¿No encuentras lo que buscas? Conversémoslo →").

### 5.3 PDP — Product Detail Page (`/producto/{slug}`)

**Esta es la página más importante** — es donde se gana o pierde el clic al WhatsApp.

**Layout (desktop dos columnas, mobile una):**

| Izquierda (~55%) | Derecha (~45%) |
|---|---|
| Galería de fotos (3–5 imágenes), con miniaturas abajo o al costado. Zoom on hover deseable. Primera imagen: producto solo. Resto: detalle de grabado, escala con mano, envoltorio. | Bloque de info y CTA. |

**Bloque de info derecho — orden vertical:**

1. **Breadcrumb** + nombre de la ocasión.
2. **Nombre del producto** (display tipográfico grande).
3. **Precio** en CLP, claro y visible. Sin "antes / ahora" — no hay descuentos sistemáticos.
4. **Descripción corta** (2–3 líneas honestas).
5. **Opciones de personalización** (campos visuales, **no son formularios funcionales en esta maqueta** — son representación):
   - Texto a grabar (placeholder: "Ej: Para mi mamá").
   - Color de terciado (si aplica).
   - Cantidad.
6. **Plazo de entrega calculado** (píldora Cielo Sur): *"Llega antes del [fecha]"*.
7. **CTA principal — botón ancho de WhatsApp** (ver §7).
8. **Sub-CTA secundario** (link discreto): *"¿Tienes una duda antes de pedir? Escríbeme →"* — mismo WhatsApp con mensaje "Hola, tengo una duda sobre {producto}".
9. **Indicadores de confianza** (íconos + texto, una línea cada uno):
   - Despacho a todo Chile.
   - Hecho a mano por Felipe.
   - Terciado real, no impreso.
10. **Descripción larga / "Sobre esta pieza"** — bloque de texto editorial, 1–2 párrafos.
11. **Productos relacionados** — 3–4 cards de la misma ocasión.

**Footer global.**

### 5.4 Sobre / Taller (`/sobre`)

- Foto editorial de Felipe en el taller.
- Texto en primera persona ("Hola, soy Felipe…").
- Historia corta: por qué terciado, por qué grabado láser, por qué desde el sur.
- 2–3 fotos del proceso.
- CTA: link a productos + link WhatsApp.

### 5.5 Páginas legales

Todas con la misma plantilla: header global, título grande, contenido en formato editorial cómodo (líneas no más anchas que ~70ch), footer global.

**Contenido mínimo a redactar (puedo ayudar después con borradores):**

- **`/terminos`** — naturaleza del servicio (regalo personalizado, no retail), formalización del pedido por WhatsApp, modificaciones, plazo de producción, reserva del derecho de admisión.
- **`/privacidad`** — datos que se recogen (solo lo conversado por WhatsApp + dirección de despacho), Ley 19.628 sobre protección de la vida privada, derecho ARCO, no se comparten con terceros, contacto del responsable.
- **`/despachos`** — couriers utilizados (Starken, Chilexpress, Blue Express — confirmar con Felipe), regiones cubiertas, tarifas por tramo, plazos por zona, qué pasa si llega dañado.
- **`/cambios-y-devoluciones`** — al ser pieza personalizada **no aplica retracto del artículo 3 bis Ley 19.496**. Sí aplica garantía por defecto de fabricación: se repone o se reembolsa. Plazo para reclamar.
- **`/preguntas-frecuentes`** — colapsables. Mínimo 8 preguntas reales: cómo personalizo, cuánto demora, despachan a mi región, qué pasa si me arrepiento, puedo cambiar el texto después de pedir, hacen volumen para empresas, métodos de pago, garantía.

---

## 6. Componentes globales

### 6.1 Header

- Logo horizontal (versión Petróleo sobre Lino) a la izquierda → linkea a `/`.
- Navegación: `Productos · Ocasiones · Sobre · FAQ`.
- Botón WhatsApp fijo a la derecha (Petróleo sobre Lino, ícono + texto "WhatsApp").
- En mobile: hamburguesa colapsable + botón WhatsApp persistente arriba.
- Sticky al hacer scroll (con ligero shrink).

### 6.2 Footer

- Fondo Petróleo, texto Lino.
- 4 columnas (desktop) / acordeón (mobile):
  - **LáserCrafts** — tagline, dirección legal (Borquez Solutions SpA), región.
  - **Comprar** — Productos, Ocasiones, FAQ.
  - **Legal** — Términos, Privacidad, Despachos, Cambios y devoluciones.
  - **Conversemos** — WhatsApp, email, IG, dirección física del taller (si Felipe acepta).
- Marca registrada (®) visible junto al nombre.
- Año dinámico, sin "All rights reserved" innecesario.

### 6.3 Botón WhatsApp flotante

- Aparece en mobile en todas las páginas excepto legales (en legales también, pero más discreto).
- Posición: bottom-right, fixed.
- Fondo Petróleo, ícono Lino.
- Lleva al mismo link de §7 con mensaje genérico: *"Hola, te escribo desde lasercrafts.cl"*.

### 6.4 Card de producto

```
┌─────────────────────────┐
│                         │
│      [Foto producto]    │   ← lazy-load, aspect-ratio 4:5
│                         │
├─────────────────────────┤
│ Nombre del producto     │   ← Petróleo, tipografía display
│ Ocasión · etiqueta      │   ← Niebla, micro
│ $20.000                 │   ← Petróleo, peso fuerte
│ Llega en 4–5 días       │   ← Niebla, pequeño
└─────────────────────────┘
```

Toda la card es clickeable hacia la PDP. Hover sutil: foto se acerca 2%, no más.

### 6.5 Píldora de plazo

```
[ ✓  Llega antes del viernes ]
```

Fondo Cielo Sur, texto Petróleo, esquinas pill (border-radius alto). Aparece en home hero, listado y PDP.

---

## 7. Integración WhatsApp

### 7.1 Número y formato

- **Número:** +56 9 2644 9047
- **Formato wa.me:** `https://wa.me/56926449047`
- Texto pre-rellenado va como query param `text=`, URL-encoded.

### 7.2 Mensajes por contexto

Felipe pidió el siguiente mensaje base para el CTA de producto:

> **"Hola, vi este producto en la página y me gustaría comprarlo..."**

**Recomendación: parametrizar por producto** para que Felipe sepa de qué producto le hablan sin tener que preguntar. Tres versiones:

| Contexto | Texto |
|---|---|
| **Botón principal en PDP** | `Hola, vi este producto en la página y me gustaría comprarlo: {NOMBRE_PRODUCTO} - {URL_PRODUCTO}` |
| **Sub-CTA "Tengo una duda"** en PDP | `Hola, tengo una duda sobre {NOMBRE_PRODUCTO} ({URL_PRODUCTO})` |
| **Card de producto en listado** | `Hola, vi este producto en la página y me gustaría comprarlo: {NOMBRE_PRODUCTO} - {URL_PRODUCTO}` |
| **Botón flotante global** | `Hola, te escribo desde lasercrafts.cl` |
| **CTA en home / hero** | `Hola, te escribo desde lasercrafts.cl, me gustaría conversar sobre un regalo` |

### 7.3 Ejemplo de URL final (PDP)

Producto: "Posavasos personalizado"
URL: `https://lasercrafts.cl/producto/posavasos-personalizado`

```
https://wa.me/56926449047?text=Hola%2C%20vi%20este%20producto%20en%20la%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20comprarlo%3A%20Posavasos%20personalizado%20-%20https%3A%2F%2Flasercrafts.cl%2Fproducto%2Fposavasos-personalizado
```

### 7.4 Tracking

- Cada link de WhatsApp debe disparar un evento JS (Google Analytics 4 o Plausible) con `event: "click_whatsapp"` y `label: {contexto}` (pdp / listado / home / flotante / faq).
- Esto permite medir desde dónde se cierran las conversaciones.

### 7.5 Confirmar con Felipe antes de hardcodear

- ¿El número +56 9 2644 9047 es el correcto y único, o hay un WhatsApp Business separado del personal? **Si va a haber un WhatsApp Business**, usar ese número.
- Horario de atención visible en el footer (ej: lun–vie 9:00–19:00) — clave para que el cliente no se frustre escribiendo a las 23:00 y no recibir respuesta.

---

## 8. Sistema visual — referencias rápidas

> Documentación completa en `../branding/moodboard.md`. Aquí solo los datos que el diseñador usa día a día.

### 8.1 Variables CSS

```css
:root {
  --color-lino:      #F4F4F9;  /* fondo principal */
  --color-petroleo:  #2F4550;  /* texto principal, headers, botones */
  --color-niebla:    #586F7C;  /* texto secundario, líneas */
  --color-cielo-sur: #B9CDDA;  /* acentos, píldoras */
  --color-tinta:     #000000;  /* sello, raramente */

  --font-display: "Archivo Narrow", "GT America Condensed", sans-serif;
  --font-text:    "Inter", "Söhne", system-ui, sans-serif;
  --font-mono:    "JetBrains Mono", monospace;

  --radius-pill:  999px;
  --radius-card:  8px;
  --radius-tile:  12px;
}
```

### 8.2 Reglas visuales no negociables

- **Reemplazar el negro puro por Petróleo** en interfaces. Negro solo para sello físico.
- **Cielo Sur nunca se usa para texto** (contraste 1.3:1 con Lino, ❌). Solo fondos, pills, íconos.
- **El logo se aplica con `currentColor`** — no hardcodear color en el SVG.
- **Mobile-first** — el persona compra desde celular casi siempre.
- **Foto producto siempre sobre fondo Lino o terciado natural**. Nunca mármol, plantas, café, pétalos.

---

## 9. Responsive

| Breakpoint | Diseño |
|---|---|
| ≤ 640px (mobile) | 1 columna, header colapsable, botón WhatsApp flotante visible, foto producto 4:5. |
| 641–1024px (tablet) | 2 columnas en listado, 2 columnas en PDP. |
| ≥ 1025px (desktop) | 3 columnas en listado, 2 columnas (55/45) en PDP, header expandido. |

**Mobile no es responsive del desktop — es el diseño principal.** Maquetar desde 375px hacia arriba.

---

## 10. SEO mínimo

- **Title pattern:**
  - Home: `LáserCrafts — Regalo personalizado en madera. Despacho a todo Chile.`
  - PDP: `{Nombre del producto} — LáserCrafts`
  - Listado: `{Ocasión} — Regalos personalizados en madera | LáserCrafts`
- **Meta description** en cada página, 140–160 chars, escrita a mano (no template).
- **Open Graph + Twitter Card** con imagen 1200×630 derivada del logo o foto de producto.
- **JSON-LD `Product` schema** en cada PDP (nombre, imagen, descripción, marca, precio, disponibilidad).
- **JSON-LD `Organization` schema** en home (nombre, logo, sameAs Instagram, contactPoint WhatsApp).
- **Sitemap.xml** automático.
- **robots.txt** sin `noindex`.
- **Canonical URL** en cada página.

**Keywords objetivo** (apuntar a intención de regalo, no a "lasercraft chile" — ese pleito está perdido frente a `lasercraftcl.com`):

- "regalo personalizado madera chile"
- "regalo día de la madre madera"
- "souvenir matrimonio personalizado"
- "llavero personalizado chile"
- "regalo cumpleaños personalizado"

---

## 11. Accesibilidad

- **WCAG 2.1 nivel AA** como mínimo.
- Contraste de cuerpo verificado:
  - Petróleo sobre Lino → 9.6:1 ✅
  - Niebla sobre Lino → 5.4:1 ✅ (límite, OK para cuerpo)
  - Lino sobre Petróleo → 9.6:1 ✅
- Todas las imágenes con `alt` significativo.
- Botones con texto, no solo íconos. Si hay solo ícono → `aria-label`.
- Navegación funcional con teclado.
- Focus rings visibles (no removerlos por estética).
- Tipografía base mínimo 16px en mobile.

---

## 12. Performance

- Imágenes en formato **WebP** con fallback JPG.
- Lazy-load de todas las imágenes que no estén en el viewport inicial.
- Fonts cargadas con `font-display: swap`.
- Sin JS bloqueante en `<head>`.
- Lighthouse target: **Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95** en mobile.

---

## 13. Lo que NO va en esta maqueta

- ❌ Carrito persistente.
- ❌ Login / cuenta de usuario.
- ❌ Pasarela de pago (Webpay, Mercado Pago, Stripe).
- ❌ Cupones / códigos de descuento.
- ❌ Newsletter / formulario de suscripción.
- ❌ Chat-bot.
- ❌ Reviews con estrellas.
- ❌ "Pop-up" de bienvenida.
- ❌ Cookie banner pesado (si se necesita, una pill discreta en footer).
- ❌ Catálogo dinámico desde un CMS — los productos se renderizan estáticos en esta versión.

---

## 14. Insumos que el diseñador necesita de Felipe

- [ ] **Catálogo de productos** — top 10 a 20 productos definidos: nombre, descripción, foto principal + 3 fotos de detalle, precio, opciones de personalización, plazo, ocasión asociada.
- [ ] **Fotografía** — si Felipe no tiene fotos de calidad uniforme, hay que producir una sesión antes (o resolver con lo que hay en IG).
- [ ] **Confirmar número de WhatsApp** definitivo (¿personal o Business?).
- [ ] **Horario de atención** para mostrar en footer.
- [ ] **Direcciones legales** — razón social (Borquez Solutions SpA), RUT, dirección fiscal.
- [ ] **Foto de Felipe en el taller** para `/sobre`.
- [ ] **Couriers utilizados** y tarifas por región.
- [ ] **Texto base de páginas legales** (puedo redactar borradores si se necesita).

---

## 15. Entregable y plazo

- **Entregable:** carpeta con HTML + CSS + JS + assets, comprimida en zip y repo Git.
- **Mínimo:** 8 plantillas funcionales (home, listado, ocasión, PDP, sobre, FAQ, 4 legales).
- **Plazo:** **a confirmar con Felipe.** Sin presión de fecha; calidad sobre velocidad.
- **Revisión:** al menos una iteración intermedia con Felipe (entrega de home + PDP antes de continuar con el resto).

---

## 16. Decisiones cerradas con Felipe (2026-06-03)

- ✅ **Stack:** **Astro**.
- ✅ **Catálogo:** **se inventa para la maqueta**. 12 productos placeholder cubriendo todas las ocasiones, precios entre $12k y $35k.
- ✅ **Fotografía:** no hay aún. Maqueta usa **SVG placeholders** (gradiente + tipografía + isotipo) hasta que haya sesión real. Reemplazo es "drop-in": misma proporción, mismo path.
- ✅ **WhatsApp:** **+56 9 2644 9047** (sin Business separado por ahora).
- ✅ **Horario de atención:** **Lunes a Viernes, 9:00 a 18:00**. Visible en footer y en página `/contacto`.
- ✅ **Retrato de Felipe:** **no**. `/sobre` se redacta sin cara — foco en el taller y el oficio, no en el founder visualmente. La voz sigue en primera persona en el copy.
- ✅ **Couriers:** **Chilexpress, Starken, BlueExpress y Correos de Chile**. Página `/despachos` los enumera; el cliente elige al cotizar por WhatsApp.
- ✅ **Staging:** no hay aún. Entrega como repo Git + zip; Felipe decide hosting cuando esté listo (sugerencia: Cloudflare Pages, mismo proveedor que DNS).
- ✅ **Contenido editorial:** **lo redactamos en este flujo** (home, sobre, FAQ, legales). Borradores en la maqueta; validar legales con abogado antes de publicar.

---

**Estado:** brief cerrado. Maqueta Astro construida en `web/maqueta/` (ver `web/maqueta/README.md` para instrucciones).
