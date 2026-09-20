# LÍNEA NATURAL — Interface Design System

## Direction and feel

- Editorial, cinematic and premium natural-wellness experience.
- Calm, warm, contemporary and trustworthy; never aggressive or generic ecommerce.
- Narrative principle: nature → discovery → ingredients → formula → accompaniment → wellbeing → trust → action.
- Visual hierarchy: approximately 70% visual experience, 20% narrative and 10% direct selling.
- Generous negative space, restrained UI chrome and varied section rhythm.

## Domain signature

- Botanical discovery as the signature interaction: the ingredients master image acts as a visual map, then Centella becomes a pinned five-state story.
- Motion should feel like breathing: slow, organic, precise and discreet.
- Editorial serif headlines paired with a clean sans-serif for navigation and functional text.

## Palette

- Forest green: primary brand surface and CTA background.
- Olive and sage: secondary botanical tones and supporting text.
- Cream, ivory and natural beige: primary light surfaces.
- Metallic gold: restrained accent for product details, indicators and emphasis lines only.

## Product treatment

- White bottle, metallic gold cap, forest-green label, green-and-white capsules.
- Product imagery should remain realistic, stable and commercially photographed.
- Avoid aggressive 3D rotation, exaggerated perspective and unnecessary effects.

## Depth strategy

- Prefer open layouts, subtle surface shifts and quiet 1px dividers.
- Use tinted, restrained shadows only where they communicate product elevation.
- Avoid nested boxes and heavy glassmorphism.
- Rounded controls may be pill-shaped; editorial content remains mostly open and flat.

## Spacing base

- Use a breathable rhythm based on multiples of 8px where practical.
- Use large section padding with responsive `clamp()` values.
- Desktop gutters are fluid and generous; mobile collapses to approximately 1.1–1.25rem.

## Motion patterns

- Animate only `opacity` and `transform` where possible.
- Use soft deceleration easing and no bounce, flash, shake, spin or aggressive zoom.
- Header transition: translucent cream, subtle blur, approximately 300–500ms.
- Reveal: fade plus minimal upward translation.
- Centella: crossfade and light spatial transformation across five states.
- Respect `prefers-reduced-motion`; replace complex transitions with simple fades and remove continuous movement.

## Reusable section patterns

- Fixed cinematic Hero using the existing local video asset.
- Ingredient explorer with a master visual and an accessible list of destinations.
- Desktop sticky storytelling with mobile vertical fallback.
- Ingredient placeholder cards for unavailable assets; never invent imagery or claims.
- Dark forest-green emotional sections for NATU and final CTA.
- Minimal footer with only defined or explicitly pending information.

## Accessibility and performance

- Semantic sections, real buttons and links, visible focus, descriptive alt text and keyboard operation.
- Essential interactions must work without hover and on touch.
- Lazy-load below-fold images, keep Hero video non-blocking, and avoid unnecessary assets.
