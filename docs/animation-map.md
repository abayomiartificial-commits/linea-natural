# LÍNEA NATURAL — V0

# ANIMATION MAP

## PRINCIPIO

Las animaciones deben sentirse naturales, elegantes y cinematográficas.

No utilizar animaciones solamente porque “se ven bonitas”. Cada movimiento
debe tener una función narrativa.

Principios:

- lento
- orgánico
- preciso
- discreto
- premium

Evitar:

- rebotes
- flashes
- zooms agresivos
- efectos excesivos
- parallax exagerado
- elementos volando sin propósito

---

## 01 — HEADER

### Estado inicial

- transparente
- contenido estable

### Al hacer scroll

- fondo crema translúcido
- blur suave
- transición aproximada de 300–500 ms

No hacer desaparecer o reaparecer el header constantemente.

---

## 02 — HERO

El video controla la experiencia visual. No añadir una capa de animación que
compita con el video.

- Texto: fade-in suave al cargar.
- CTA: fade con desplazamiento vertical muy pequeño.
- Durante scroll: el video continúa su narrativa.
- Al finalizar: la transición debe conducir visualmente hacia `DESCUBRE LA FÓRMULA`.

---

## 03 — MASTER DE INGREDIENTES

### Entrada

Fade con scale muy sutil.

### Hover de un ingrediente

- aumentar ligeramente su presencia
- reducir visualmente el resto
- mostrar el nombre
- mostrar indicación de interacción

Duración aproximada: 250–400 ms.

No utilizar rebote ni efectos luminosos fuertes.

---

## 04 — TRANSICIÓN A CENTELLA

Al seleccionar Centella:

- el master desaparece progresivamente
- Centella entra mediante crossfade
- el usuario conserva la sensación de continuidad

No utilizar un cambio brusco de página.

---

## 05 — CENTELLA

La sección debe ser scroll-driven. El panel visual permanece sticky en desktop.

Cada estado tiene:

- entrada
- permanencia
- transición
- salida

Estados:

1. `LA PLANTA`
2. `EL DETALLE`
3. `EL EXTRACTO`
4. `LA CIENCIA`
5. `EN TU FÓRMULA`

Transición: crossfade con transformación espacial muy ligera. Evitar cortes
secos.

---

## 06 — CENTELLA: PROGRESO

Indicador: `01 → 02 → 03 → 04 → 05`

- El estado activo debe destacarse.
- Los estados anteriores pueden quedar ligeramente atenuados.
- El indicador nunca debe ocupar más atención que las imágenes.

---

## 07 — OTROS INGREDIENTES

### Entrada de tarjetas

Stagger muy sutil, con no más de 100–150 ms entre elementos.

### Hover

- elevación mínima
- scale muy ligero en la imagen
- texto sin animaciones complejas

---

## 08 — NATU

NATU puede utilizar una entrada lateral o vertical suave.

Una vez visible, se permite una microanimación opcional muy discreta:

- pequeño movimiento de respiración
- parpadeo ocasional
- movimiento mínimo

No hacer que NATU rebote o baile. Debe sentirse vivo, no como un sticker
animado.

---

## 09 — BIENESTAR

Los tres pilares aparecen secuencialmente al entrar en el viewport:

`NATURAL → EQUILIBRIO → RUTINA`

Animación: fade con desplazamiento mínimo.

---

## 10 — RUTINA

Utilizar la transición narrativa:

`mañana → producto → rutina`

Si no existen assets específicos, utilizar una composición estática elegante.
No inventar animaciones de producto.

---

## 11 — CONFIANZA

El producto puede realizar un scale-in muy suave.

- No utilizar rotaciones 3D agresivas.
- El producto debe permanecer estable.

---

## 12 — CTA

- Entrada del CTA: fade-in.
- El fondo puede realizar una transición tonal muy suave.
- El botón utiliza hover mediante cambio de contraste o tono.
- No utilizar pulsaciones continuas.

---

## 13 — REDUCED MOTION

Cuando `prefers-reduced-motion: reduce` esté activo:

- desactivar parallax
- reducir transformaciones
- eliminar movimientos continuos
- convertir transiciones complejas en fades
- mantener información y navegación completamente funcionales

---

## 14 — PERFORMANCE

Priorizar:

- `transform`
- `opacity`
- transiciones CSS
- `IntersectionObserver` cuando corresponda

Evitar animar propiedades costosas. El video del Hero debe tener comportamiento
responsive. No cargar assets innecesarios antes de tiempo.

---

## 15 — PRINCIPIO FINAL

La animación debe sentirse como:

> RESPIRACIÓN

Y no como:

> EFECTO ESPECIAL.
