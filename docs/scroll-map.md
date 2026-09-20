# LÍNEA NATURAL — V0

# SCROLL MAP

## PRINCIPIO

El scroll no es únicamente navegación: es parte de la narrativa. El usuario
debe sentir que avanza por una historia.

---

## 00 — HEADER

- `Scroll = 0`: header transparente.
- `Scroll > Hero inicial`: header con crema translúcido y blur.

---

## 01 — HERO

### Altura

Aproximadamente `100vh` en desktop.

### Progresión

- Estado inicial: `NATURALEZA`.
- Durante scroll: `NATURALEZA → INGREDIENTES → CÁPSULAS → PRODUCTO`.
- Final: `PRODUCTO → transición hacia sección de fórmula`.

El video existente controla la experiencia visual. No añadir otro video.

---

## 02 — DESCUBRE LA FÓRMULA

### Entrada al viewport

El contenido aparece en este orden:

1. Título.
2. Subtítulo.
3. Composición master.
4. Interacción.

La composición permanece visible suficiente tiempo para ser explorada.

---

## 03 — INTERACCIÓN DE INGREDIENTES

Cuando el usuario selecciona `CENTELLA ASIÁTICA`, se realiza una transición
continua hacia `CENTELLA EXPERIENCE`.

Los demás ingredientes permanecen disponibles para navegación futura mediante
la estructura de tarjetas y placeholders definida para V0.

---

## 04 — CENTELLA EXPERIENCE

### Desktop

La sección es sticky. El panel visual permanece aproximadamente en el centro
del viewport y el contenido cambia mediante scroll.

Secuencia:

- Scroll 1 → `01 LA PLANTA`
- Scroll 2 → `02 EL DETALLE`
- Scroll 3 → `03 EL EXTRACTO`
- Scroll 4 → `04 LA CIENCIA`
- Scroll 5 → `05 EN TU FÓRMULA`

No saltar estados. No permitir que el usuario quede atrapado indefinidamente.
La salida de la sección debe ser natural.

---

## 05 — CENTELLA: TEXTO

### Entrada de la experiencia

`02 / 07`  
`CENTELLA ASIÁTICA`  
`Una historia que empieza en la naturaleza.`

### Estados

1. `LA PLANTA` — `Todo comienza con la planta.`
2. `EL DETALLE` — `Acércate.`
3. `EL EXTRACTO` — `De la planta a la fórmula.`
4. `LA CIENCIA` — `La naturaleza también tiene una historia que contar.`
5. `EN TU FÓRMULA` — `De la naturaleza a tu rutina.`

Los números conceptuales de entrada no deben generar una numeración
inconsistente en la interfaz. La implementación puede mostrar la progresión
operativa como:

`01 / 05 → 02 / 05 → 03 / 05 → 04 / 05 → 05 / 05`

---

## 06 — MOBILE CENTELLA

No utilizar sticky complejo si perjudica la experiencia.

Preferencia: secuencia vertical. Cada estado debe mantener el orden:

`imagen → título → texto`

El usuario debe poder avanzar naturalmente. Se permite un indicador de progreso
opcional.

---

## 07 — OTROS INGREDIENTES

Después de Centella aparece el título:

`CONOCE LOS DEMÁS INGREDIENTES.`

Mostrar tarjetas para:

- `ALGAS MARINAS`
- `MARRUBIO`
- `CAJETO`
- `POMELO`
- `ENDRINO`
- `ESPIRULINA`

Si todavía no existe imagen, utilizar un placeholder elegante. No romper el
diseño ni generar assets nuevos.

---

## 08 — NATU

NATU aparece después de ingredientes, con una entrada más emocional.

Secuencia:

`NATU aparece → mensaje → CTA secundario`

Esta sección representa el cambio:

`INFORMACIÓN → ACOMPAÑAMIENTO`

El CTA secundario y sus destinos quedan pendientes de definición si no están
confirmados en el contenido de V0.

---

## 09 — CONTROL & BIENESTAR

Entrada:

1. Título.
2. `NATURAL`.
3. `EQUILIBRIO`.
4. `RUTINA`.

Cada pilar aparece según el scroll. No convertir la sección en una lista de
beneficios médicos.

---

## 10 — RUTINA

Entrada: `Hazlo parte de tu rutina.`

Durante el scroll: visual de producto o rutina.

Final: transición hacia confianza.

Si no existen assets específicos, mantener una composición estática elegante y
no inventar instrucciones de consumo ni animaciones de producto.

---

## 11 — CONFIANZA

El producto aparece como elemento central en este orden narrativo:

`PRODUCTO → FÓRMULA → PRESENTACIÓN → ATRIBUTOS VERIFICABLES`

No introducir claims no confirmados.

---

## 12 — CTA

Al llegar, la atmósfera cambia a fondo verde bosque.

Texto:

`Tu bienestar,`  
`nuestra naturaleza.`

CTA: `DESCUBRE LA FÓRMULA`.

La animación debe ser tranquila. El usuario debe sentir que llegó al cierre de
la historia, no a una interrupción comercial.

---

## 13 — FOOTER

Después del CTA aparece un footer simple. No generar contenido ficticio.

---

## 14 — MOBILE GLOBAL

- Hero: aproximadamente `100svh`, evitando problemas con barras del navegador.
- Master de ingredientes: composición vertical o carrusel.
- Centella: secuencia vertical.
- Cards: una columna o carrusel.
- NATU: composición vertical.
- CTA: centrado.
- Footer: vertical.

---

## 15 — NAVEGACIÓN

La navegación debe permitir el recorrido:

`Hero → Fórmula → Ingredientes → Bienestar → CTA`

No crear una navegación con demasiadas opciones. La web debe sentirse como
una experiencia guiada.

---

## 16 — REGLA DE SCROLL

El usuario siempre debe saber:

- dónde está
- qué está descubriendo
- qué viene después

Utilizar títulos, pequeños indicadores, progresión y cambios de atmósfera.
No utilizar barras de progreso gigantes.

---

## 17 — PRINCIPIO FINAL

El scroll debe sentirse como:

> DESCUBRIR

Y no como:

> BAJAR POR UNA PÁGINA.
