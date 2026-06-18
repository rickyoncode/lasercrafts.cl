# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Branding workspace for **LáserCrafts** — taller chileno de regalo personalizado en terciado, operado por su fundador (Felipe / razón social Borquez Solutions SpA). El trabajo en curso es la fase de identidad de marca + acompañamiento al lanzamiento del e-commerce en `lasercrafts.cl` (sitio en construcción por separado).

Esto **no es un repositorio de código**. Es un repositorio de entregables de branding: documentos Markdown, SVGs del logo, renders HTML reproducibles. Trabajar siempre **en español** — el cliente y todos los entregables son en español de Chile.

## Estructura

```
branding/
  brief.md            # Brand brief — propuesta de valor, audiencias, posicionamiento, no-gos
  buyer-persona.md    # "Camila del Sur" — persona principal + persona secundario
  moodboard.md        # Dirección visual, paleta definitiva, tipografía, registros, aplicaciones
  voz-de-marca.md     # Tono de voz: brújula, registros, glosario, plantillas operativas
  logos/              # SVGs originales del logo (fill original #ff0000 = placeholder, IGNORAR)
  assets/
    logo-paleta-grovemade.{html,png}  # Logo aplicado a la paleta definitiva v0.3 (Profundo + Nogal + Cobre)
    logo-paleta-azul.{html,png}       # Paleta v0.2 archivada (Cielo Sur)
    logo-paleta.{html,png}            # Variante menta v0.1 archivada (decisión en moodboard §2.2)
    comparativo.{html,png}            # Side-by-side menta vs azul que fundamentó la transición v0.1→v0.2
    research/                         # Screenshots de IG y competidores usados como input del brief

web/
  brief-disenador.md  # Brief para diseñador de la maqueta HTML del sitio lasercrafts.cl
```

## Decisiones cerradas (no re-litigar sin razón)

- **Paleta (v0.3, dirección Grovemade — 2026-06-18):** `#FFFFFF` Papel, `#0D4080` Profundo, `#703D24` Nogal, `#8F5F3E` Roble, `#7C888D` Fieltro, `#1D1D1D` Antracita, `#BB6A4B` Cobre. **El negro puro `#000000` queda reservado al sello físico láser; en interfaz se usa Antracita.** Detalle de roles, proporciones y accesibilidad en `branding/moodboard.md §2`. Plan de transición v0.2 → v0.3 en `.claude/docs/rebrand-paleta-grovemade/plan.md`. Versiones previas archivadas: v0.1 menta `#B8DBD9` y v0.2 Cielo Sur `#B9CDDA`.
- **Logo:** mascota mono + wordmark "LÁSERCRAFTS" + tagline **"¿Y SI MEJOR LO HACEMOS BIEN?"**. No se rediseña, se sistematiza. El SVG entregado por Felipe usa `#ff0000` como placeholder de color — **ignorar el rojo**, el logo se aplica con `currentColor`.
- **Naming / dominios:** marca registrada en INAPI. `lasercrafts.cl` (principal) y `lasercraft.cl` (defensivo) registrados a Borquez Solutions SpA. `lasercraftcl.com` es competencia de naming (no de producto) y no tiene precedencia.
- **Materialidad:** solo **terciado**. Es decisión de identidad, no limitación.
- **Foco comercial:** B2C — regalo personalizado, despacho a todo Chile, ticket ~$20k CLP, capacidad ~50 pedidos/semana.

## Buyer persona en una frase

**Camila del Sur**: 28–55, mix parejo de género, vive en regiones del sur de Chile, paga sin pelear el precio, se acuerda tarde de las fechas (Día Madre / Padre / Navidad / cumples), llega por referido o por IG, entra al sitio pero **cierra por WhatsApp**. La voz, las decisiones de UX y el calendario operativo se diseñan para ella.

## Tono y voz

Brújula: *"serio para empresas, sobrio para personas"*. La pregunta del tagline (*"¿y si mejor lo hacemos bien?"*) cruza todo el sistema. Tres registros conviven dentro de la misma identidad (ver `moodboard.md §7`):

1. **Editorial sobrio** — B2B, cotizaciones, propuestas.
2. **Taller arquitectónico** — default del sitio, catálogo, packaging.
3. **Taller cotidiano** — IG stories, WhatsApp, "Cliente feliz".

## Regenerar los renders del logo (no es opcional cuando cambian colores)

Los HTML en `branding/assets/` referencian el logo via `currentColor`, así que cualquier cambio de paleta requiere re-servir y re-screenshotear. Workflow:

```bash
# 1. Servir
cd branding/assets && python3 -m http.server 8765

# 2. Abrir en navegador
# http://localhost:8765/logo-paleta-azul.html  (definitivo)
# http://localhost:8765/logo-paleta.html       (menta archivado)
# http://localhost:8765/comparativo.html       (side-by-side)

# 3. Para regenerar PNGs desde Playwright MCP en Claude Code:
#    navegar a la URL → resize 1440x900 (o 1500x900 para comparativo) → fullPage screenshot
```

Los HTMLs son **fuente de verdad** del render — los PNGs son derivados. Si actualizas la paleta, edita el HTML correspondiente y re-screenshot, no edites el PNG.

## Convenciones de documento

- Todo en **Markdown**, en **español**, con headings numerados (`## 1.`, `### 1.1`).
- Documentos versionados en el cuerpo (`v0.1 → v0.2`) con un párrafo blockquote arriba explicando qué cambió.
- Hipótesis abiertas se marcan con `⚠` o checklist al final del doc; no se borran al cerrarse — se actualizan con ✅ y la respuesta.
- Las decisiones de Felipe quedan registradas en el doc mismo; no asumir nada sin pista en el repo.

## Reglas de trabajo aprendidas

- **Planes de implementación van a `.claude/docs/{feature}/`** (regla global del usuario). Los **entregables del branding viven en `/branding/`** del proyecto (este caso).
- Antes de proponer dirección visual nueva, **mirar el SVG real** del logo — la descripción del IG no basta (la primera vez creí "oso", era mono).
- El cliente prefiere **iterar con renders comparativos** (side-by-side HTML servido en `localhost`) antes de cerrar una decisión visual.
- **No introducir paletas nuevas** sin pedido explícito. El cliente fijó la paleta; los ajustes van dentro de esa familia.

## Próximas fases (lo que aún no se hizo)

1. Producir SVGs limpios del logo en las combinaciones aprobadas: `logo-principal.svg` (Petróleo / Lino), `logo-invertido.svg` (Lino / Petróleo), `isotipo.svg` (solo mono), `sello.svg` (Tinta / Lino, sin tagline ni wordmark).
2. Maqueta de la home del sitio (`lasercrafts.cl`) — alineada al stack que Felipe esté usando (pendiente confirmar).
3. Plantillas IG, packaging, sello físico, plantillas WhatsApp — ver `moodboard.md §10`.
4. Mini brand book ~12 páginas.

## Contacto operativo

Felipe — WhatsApp **+56 9 2644 9047** — `rsilva@sultans.co` para temas del proyecto.
