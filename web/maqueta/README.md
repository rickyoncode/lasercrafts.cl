# Maqueta lasercrafts.cl — Astro

Maqueta navegable estática del sitio. Producto, listado, PDP, sobre, FAQ y páginas legales.
**No tiene checkout** — todos los CTA llevan a WhatsApp con mensaje pre-rellenado.

## Cómo correrla

```bash
cd web/maqueta
npm install
npm run dev
```

Sirve en `http://localhost:4321`.

Para build de producción:

```bash
npm run build
npm run preview
```

El output queda en `dist/` (HTML estático, listo para Cloudflare Pages, Vercel, Netlify o cualquier hosting estático).

## Convenciones

- **Paleta**, **tipografía** y **logo**: variables CSS en `src/styles/global.css`. Cualquier ajuste de color va ahí.
- **Productos**, **ocasiones** y **clientes felices**: `src/data/`. Edita los TS para cambiar el catálogo.
- **WhatsApp**: el helper `src/lib/whatsapp.ts` construye los links con el mensaje correcto por contexto.
- **Imágenes**: los placeholders viven en `public/img/products/*.svg`. Cuando haya fotografía real, **reemplazar archivo manteniendo el mismo nombre** y la maqueta queda funcional sin tocar código.

## Decisiones que no son cosméticas

| | |
|---|---|
| **Mobile-first** | El persona compra desde celular. Maqueta diseñada desde 375px hacia arriba. |
| **CTA → WhatsApp parametrizado** | Cada PDP envía el nombre del producto y la URL en el mensaje, para que Felipe sepa de qué le hablan sin preguntar. |
| **Sin foto de Felipe** | Decisión del cliente. `/sobre` se enfoca en el taller y el oficio, no en el founder visualmente. |
| **Páginas legales** | Borradores. **Validar con abogado antes de publicar.** Especialmente §3 de cambios y devoluciones (Ley 19.496) y §1 de privacidad (Ley 19.628). |
| **SVG placeholders** | Hasta que haya sesión fotográfica. El reemplazo es drop-in (mismo nombre de archivo, misma proporción 4:5). |

## Contexto del proyecto

Documentos hermanos en este repo:

- `../../branding/brief.md` — brand brief.
- `../../branding/buyer-persona.md` — persona principal "Camila del Sur".
- `../../branding/moodboard.md` — sistema visual y paleta.
- `../brief-disenador.md` — brief que originó esta maqueta.
