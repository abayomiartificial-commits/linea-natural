# LÍNEA NATURAL — NATU
## CREATIVE SPEC V0

### 01. PAPEL DE NATU

NATU es el guía emocional de LÍNEA NATURAL.

No es simplemente una mascota ni un recurso decorativo.

Su función narrativa es acompañar al usuario después de haber descubierto la naturaleza, los ingredientes y la experiencia Centella.

La transición narrativa es:

NATURALEZA
→ FÓRMULA
→ DESCUBRIMIENTO
→ ACOMPAÑAMIENTO

NATU representa:

- cercanía
- curiosidad
- optimismo
- confianza
- acompañamiento

No representa:

- venta agresiva
- autoridad médica
- infantilidad
- espectáculo
- entretenimiento independiente de la marca

---

# 02. IDENTIDAD VISUAL

La hoja de personaje existente continúa siendo la referencia maestra de identidad.

El asset:

/assets/natu/natu-web-master.png

es la referencia visual maestra para esta sección web.

Este NATU puede diferir ligeramente del NATU utilizado en video/social.

No se considera inconsistencia mientras conserve los rasgos fundamentales:

- silueta botánica
- cuerpo verde oliva
- rostro crema
- ojos grandes y oscuros
- pequeña hoja superior
- emblema de hoja
- personalidad amable
- estética 3D premium

La versión web debe sentirse más:

- editorial
- cinematográfica
- refinada
- atmosférica

No convertirlo en un personaje infantil.

---

# 03. CONCEPTO DE LA SECCIÓN

Concepto:

> HOLA. SOY NATU.

La sección representa el momento en que la marca deja de hablar únicamente sobre la fórmula y comienza a hablar directamente con el usuario.

Debe sentirse como un cambio de capítulo.

Venimos de una experiencia botánica clara y detallada.

Entramos en:

ACOMPAÑAMIENTO.

---

# 04. COMPOSICIÓN

Mantener una composición editorial dividida:

IZQUIERDA:
narrativa y navegación.

DERECHA:
NATU como protagonista visual.

La distribución actual de la sección es una buena base y no debe rediseñarse innecesariamente.

NATU debe ocupar aproximadamente entre 35% y 45% del ancho visual disponible en desktop, adaptándose al viewport.

Debe tener presencia suficiente para ser protagonista.

No debe dominar toda la pantalla.

Debe existir espacio negativo alrededor del personaje.

---

# 05. FONDO

Mantener el fondo:

forest green / verde bosque profundo.

Debe funcionar como transición visual desde Centella.

El fondo debe sentirse:

- profundo
- natural
- elegante
- sereno

No convertirlo en un fondo tecnológico.

---

# 06. CÍRCULOS CONCÉNTRICOS

Los círculos existentes detrás de NATU forman parte del lenguaje visual de la sección.

Representan una presencia/onda sutil alrededor del personaje.

No deben parecer:

- radar
- HUD
- tecnología futurista
- interfaz científica

Utilizar opacidad baja.

La animación, si existe, debe ser prácticamente imperceptible.

---

# 07. COPY

Eyebrow:

04 / ACOMPAÑAMIENTO

Headline:

Hola. Soy
Natu.

Supporting copy:

Estoy aquí para acompañarte
a descubrir LÍNEA NATURAL.

Descriptor:

NATURALEZA · EQUILIBRIO · BIENESTAR

CTA:

CONTINUAR EL RECORRIDO →

No añadir más párrafos.

No añadir claims.

No añadir beneficios médicos.

No añadir argumentos de venta.

---

# 08. ENTRADA DE LA SECCIÓN

La entrada debe sentirse como una escena que se revela.

Secuencia conceptual:

1. aparece el fondo;
2. aparece el eyebrow;
3. aparece el texto principal;
4. aparecen/revelan suavemente los círculos;
5. aparece NATU.

No utilizar:

- rebotes
- flashes
- entradas bruscas
- giros
- escalas agresivas
- efectos de presentación de mascota

La entrada debe ser:

cinemática
+
suave
+
orgánica
+
premium.

---

# 09. INTERACCIÓN CON EL MOUSE

La sección debe incorporar una microinteracción de escritorio basada en pointer/mouse.

PRINCIPIO:

NATU debe parecer ligeramente consciente de la presencia del usuario.

NO debe parecer que persigue el cursor.

### CAPAS DE MOVIMIENTO

OJOS:

respuesta ligera y relativamente rápida.

CABEZA:

respuesta más lenta y de menor amplitud.

CUERPO:

movimiento mínimo.

ELEMENTOS EXTERIORES/HOJAS:

parallax extremadamente sutil y más lento.

El movimiento debe estar interpolado/suavizado.

No realizar movimientos bruscos.

---

# 10. RESPUESTA AL CURSOR

Cuando el cursor se mueve:

NATU responde ligeramente hacia la dirección del cursor.

Cuando el cursor permanece quieto:

NATU vuelve suavemente a posición de reposo.

Cuando el cursor se aproxima al personaje:

puede existir una respuesta ligeramente mayor, pero siempre sutil.

No utilizar:

- seguimiento exacto del cursor
- rotaciones exageradas
- movimientos grandes de cabeza
- saltos
- rebotes
- persecución del cursor

El objetivo es que el usuario descubra la interacción accidentalmente.

La reacción debe sentirse natural.

---

# 11. TECNOLOGÍA

Priorizar una implementación ligera.

No añadir plugins o dependencias innecesarias solamente para producir el efecto.

Puede utilizarse:

- pointermove
- transform
- interpolación
- requestAnimationFrame

o una solución equivalente si el stack existente ofrece una alternativa mejor.

La implementación debe ser:

- ligera
- estable
- mantenible
- responsive

---

# 12. MOBILE

En mobile no existe la interacción de mouse.

La experiencia debe conservar la atmósfera mediante:

- aparición suave de NATU;
- movimiento ambiental mínimo;
- círculos muy sutiles;
- hojas/partículas discretas si el asset las incluye.

No añadir una interacción táctil compleja.

Orden visual prioritario:

1. NATU
2. headline
3. copy
4. descriptor
5. CTA

---

# 13. REDUCED MOTION

Con:

prefers-reduced-motion

desactivar:

- seguimiento del cursor
- parallax
- movimiento ambiental continuo
- animaciones innecesarias

Conservar:

- contenido
- navegación
- CTA
- legibilidad

Utilizar únicamente transiciones simples cuando sean necesarias.

---

# 14. RELACIÓN CON EL PRODUCTO

NO mostrar el producto en esta sección.

NATU representa:

ACOMPAÑAMIENTO.

El producto tendrá su protagonismo posteriormente.

No añadir:

- botella
- cápsulas
- precio
- descuento
- compra
- oferta

---

# 15. RELACIÓN CON CENTELLA

NATU aparece inmediatamente después de la experiencia Centella.

Debe funcionar como transición narrativa:

CENTELLA:
"descubre"

NATU:
"te acompaño"

La estética debe mantener continuidad con Centella mediante:

- verde
- crema
- dorado contenido
- naturaleza
- iluminación cálida
- espacio negativo
- elegancia editorial

Pero NATU debe sentirse más humano/emocional que la sección científica/botánica.

---

# 16. CRITERIO DE SATURACIÓN

La escena ya contiene suficientes elementos:

- NATU
- vegetación
- partículas
- círculos
- iluminación
- profundidad

NO agregar efectos adicionales salvo que tengan una función clara.

Regla:

Si un efecto compite con NATU, eliminarlo.

Si un efecto ayuda a que NATU se integre en el ambiente, puede mantenerse de forma sutil.

NATU debe ser siempre el punto focal.

---

# 17. CRITERIO DE ÉXITO

La sección debe producir esta sensación:

"Hay alguien acompañándome en este recorrido."

No:

"Hay una mascota animada en esta página."

El usuario debe percibir:

NATU
+
MARCA
+
NATURALEZA
+
ACOMPAÑAMIENTO

como una misma experiencia.

---

# 18. REGLA PARA CODEX

Codex implementa.

No interpreta creativamente.

No cambia:

- diseño
- copy
- personaje
- composición
- colores
- narrativa
- escala conceptual

sin autorización.

Si existe una dificultad técnica:

resolver con la alternativa técnica más simple que conserve esta dirección.

Si una decisión exige una reinterpretación creativa:

detenerse y reportarla.

---

# 19. ASSET MASTER

Asset principal:

/assets/natu/natu-web-master.png

No modificar el archivo fuente.

No reemplazarlo.

No editarlo destructivamente.

Si posteriormente se necesita un NATU aislado/transparente para una interacción más avanzada, generar un asset derivado y conservar el master intacto.

---

# 20. ESTADO

CREATIVE DIRECTION:
APROBADA

COPY:
APROBADO

NATU WEB MASTER:
APROBADO

INTERACCIÓN MOUSE:
APROBADA COMO MICROINTERACCIÓN

PRODUCTO EN ESTA SECCIÓN:
NO

ESTÉTICA:
PREMIUM / EDITORIAL / BOTÁNICA / CINEMATOGRÁFICA

FIN DEL NATU CREATIVE SPEC V0