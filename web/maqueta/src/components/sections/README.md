# Secciones modulares (`/components/sections/`)

Cada archivo `.astro` aquí es una **sección de página independiente**: tiene su propio estilo, props y datos. Diseñadas para experimentar — moverlas, ocultarlas o reemplazarlas sin tocar las otras.

## Convención

Toda sección recibe (como mínimo):

| Prop | Default | Para qué |
|---|---|---|
| `enabled?: boolean` | `true` | Si `false`, la sección no se renderiza (`return null`). Es la forma rápida de "ocultar". |

Opcionalmente:
- Props específicas para customizar texto, CTAs, fondos.
- Defaults que hagan que `<HeroFoo />` sin props ya se vea bien.

## Patrón de uso en una página

```astro
---
import HeroGrovemade from "../components/sections/HeroGrovemade.astro";
import HeroOriginal from "../components/sections/HeroOriginal.astro";  // si existe
---

<BaseLayout title="…">
  <HeroGrovemade enabled={true} />
  <HeroOriginal enabled={false} />
  {/* …el resto de la página */}
</BaseLayout>
```

Para experimentar:
- **Ocultar:** flip `enabled={false}`.
- **Mover:** cortar el bloque y pegarlo arriba/abajo.
- **Cambiar variante:** cambia el componente importado (`HeroGrovemade` → `HeroOtro`).
- **Tunear copy:** pasa `title="…"`, `subtitle="…"`, etc. sin tocar el componente.

## Lista actual

- `HeroGrovemade.astro` — hero estilo Grovemade (foto de escritorio premium + texto a la derecha). Acepta `bgImage`, `title`, `subtitle`, `ctaPrimaryLabel/Href`, `ctaSecondaryLabel/Href`, `align`.
