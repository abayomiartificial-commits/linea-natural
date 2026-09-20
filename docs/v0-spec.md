# Especificación de la V0 — LINEA NATURAL

Documento previo a la implementación de la landing page. Define estructura,
contenido conocido, comportamiento e inventario disponible sin crear interfaz,
componentes ni assets nuevos.

La dirección creativa de la V0 establece el criterio visual y narrativo
vinculante para la implementación. La experiencia debe sentirse como una
marca de bienestar natural premium, no como una página genérica de suplementos.

## Principios de la V0

- Usar exclusivamente los assets registrados en `docs/asset-inventory.md`.
- Mantener como `PLACEHOLDER / PENDING` todo asset, copy o claim que todavía no esté confirmado.
- No inventar propiedades, afirmaciones médicas, certificaciones, datos de contacto ni instrucciones de consumo.
- La experiencia debe degradar elegantemente en tablet y mobile.
- La implementación posterior deberá respetar la accesibilidad y `prefers-reduced-motion`.
- La jerarquía aproximada será 70% experiencia visual, 20% narrativa y 10% venta directa.
- La narrativa general seguirá: `NATURALEZA → DESCUBRIMIENTO → INGREDIENTES → TRANSFORMACIÓN → FÓRMULA → ACOMPAÑAMIENTO → BIENESTAR → CONFIANZA → ACCIÓN`.
- La marca venderá principalmente mediante percepción de calidad, narrativa, producto, ingredientes y confianza; no mediante presión comercial.

---

## 00 — HEADER

### Objetivo

Proporcionar una navegación mínima y persistente que no compita con el Hero.

### Contenido

- Marca.
- Navegación hacia las secciones definidas.
- CTA: `DESCUBRE LA FÓRMULA`.

Los enlaces y datos de marca no definidos quedan pendientes de validación.

### Asset

No se requiere un asset adicional al inventario actual.

### Interacción

- Sobre el Hero: header transparente y minimalista.
- Al hacer scroll: fondo crema translúcido con blur sutil.
- La navegación debe llevar a las secciones correspondientes mediante anclas accesibles.
- El CTA debe conservar un objetivo único: `DESCUBRE LA FÓRMULA`.

### Desktop

Navegación horizontal con presencia discreta sobre el Hero y estado translúcido al abandonar el Hero.

### Mobile

Navegación compacta y accesible, con menú colapsable si resulta necesario para preservar espacio. El CTA debe permanecer identificable.

### Estado

Estructura, CTA y comportamiento visual definidos. Enlaces y datos de marca: `PENDING`.

---

## 01 — HERO: “De la naturaleza al producto”

### Objetivo

Introducir la marca y presentar el producto mediante una experiencia visual principal que conecte naturaleza, ingredientes, cápsulas y producto.

### Contenido

- Nombre conceptual: “De la naturaleza al producto”.
- Título: `El bienestar nace en la naturaleza.`
- Subtítulo: `Una fórmula creada para acompañarte en tu rutina de bienestar.`
- CTA: `DESCUBRE LA FÓRMULA`.
- Narrativa: `NATURALEZA → INGREDIENTES → CÁPSULAS → PRODUCTO → NATURALEZA`.

### Asset

- `assets/hero/hero-naturaleza-producto.mp4`

No crear otro video.

### Interacción

- El video funciona como experiencia visual principal.
- Debe iniciar y reproducirse de forma no intrusiva, respetando las políticas del navegador y el estado de reduced motion.
- Overlay suficiente para mantener legible el texto sin ocultar la experiencia visual.
- Al hacer scroll, el contenido del Hero debe salir de forma natural y ceder el foco a “Descubre la fórmula”.
- Fallback: mostrar un contenedor visual estático con el asset disponible o un estado neutro claramente marcado como `PLACEHOLDER / PENDING` si no existe una imagen de fallback aprobada. No generar una imagen nueva.

### Desktop

Viewport de altura amplia, con el video ocupando el área principal y el texto superpuesto según la jerarquía que se valide durante la implementación. La posición exacta del foco del video queda pendiente de revisión con el asset.

### Mobile

El video debe adaptarse al viewport sin forzar una composición ilegible. Priorizar legibilidad, carga razonable y fallback cuando la reproducción automática no sea posible.

### Estado

Asset, narrativa, copy y CTA definidos. Overlay, posición exacta del video y tratamiento final del viewport: `PENDING`.

---

## 02 — DESCUBRE LA FÓRMULA

### Objetivo

Presentar visualmente los siete ingredientes y establecer esta sección como punto de navegación hacia sus contenidos.

### Contenido

- Título: `Descubre la fórmula.`
- Subtítulo: `Siete ingredientes. Una fórmula pensada desde la naturaleza.`

Ingredientes establecidos:

1. Algas marinas
2. Centella asiática
3. Marrubio
4. Cajeto (Qb)
5. Pomelo
6. Endrino
7. Espirulina

No añadir información sobre propiedades.

### Asset

- `assets/ingredients/master/ingredients-master.png`

### Interacción

La composición master actúa como referencia visual principal. Cada ingrediente debe funcionar como destino de navegación hacia su experiencia o placeholder correspondiente.

### Desktop

Composición master visible con una navegación clara hacia los siete ingredientes.

### Mobile

La composición debe mantenerse legible sin depender de un zoom complejo. La navegación puede presentarse en una secuencia vertical o lista accesible.

### Estado

Asset, título, subtítulo y lista de ingredientes definidos. Tratamiento exacto de navegación: `PENDING`.

---

## 03 — EXPERIENCIA CENTELLA

### Objetivo

Desarrollar una experiencia narrativa de cinco estados alrededor de Centella, sin añadir claims científicos no validados.

### Contenido

- Entrada: `02 / 07` — `CENTELLA ASIÁTICA`.
- Texto de entrada: `Una historia que empieza en la naturaleza.`

Estados establecidos:

1. `LA PLANTA` — `Todo comienza con la planta.`
2. `EL DETALLE` — `Acércate.`
3. `EL EXTRACTO` — `De la planta a la fórmula.`
4. `LA CIENCIA` — `La naturaleza también tiene una historia que contar.`
5. `EN TU FÓRMULA` — `De la naturaleza a tu rutina.`

El texto asociado a cada estado debe limitarse al copy aprobado. Claims científicos nuevos: `PLACEHOLDER / PENDING`. La prioridad narrativa es imagen → observación → transición → comprensión.

### Asset

- `assets/ingredients/centella/centella-overview.png`
- `assets/ingredients/centella/01-la-planta.png`
- `assets/ingredients/centella/02-el-detalle.png`
- `assets/ingredients/centella/03-el-extracto.png`
- `assets/ingredients/centella/04-la-ciencia.png`
- `assets/ingredients/centella/05-en-tu-formula.png`

### Interacción

Concepto: scroll-driven / sticky storytelling.

- Entrada: la sección entra después de “Descubre la fórmula” y establece el primer estado.
- Transición: el progreso del scroll cambia de estado con una transición suave y comprensible.
- Estado activo: un único estado activo muestra su asset, etiqueta, texto aprobado e indicador de progreso.
- Progreso: indicar la posición dentro de los cinco estados.
- Salida: después del quinto estado, la sección libera el panel sticky y continúa hacia “Otros 6 ingredientes”.

### Desktop

Panel visual sticky, progresión mediante scroll, transición entre estados, indicador de progreso y texto asociado al estado activo.

### Mobile

No depender de una interacción sticky compleja. Conservar los cinco estados mediante progresión vertical o carousel accesible, con controles y estados anunciables por teclado.

### Estado

Assets, entrada, cinco estados y copy base definidos. Claims científicos adicionales: `PENDING`.

---

## 04 — OTROS 6 INGREDIENTES

### Objetivo

Dar continuidad a los seis ingredientes que no cuentan todavía con assets individuales.

### Contenido

- Título: `Conoce los demás ingredientes.`

- Algas marinas
- Marrubio
- Cajeto (Qb)
- Pomelo
- Endrino
- Espirulina

### Asset

Assets individuales todavía no disponibles. Rutas preparadas:

- `assets/ingredients/algas/`
- `assets/ingredients/marrubio/`
- `assets/ingredients/cajeto/`
- `assets/ingredients/pomelo/`
- `assets/ingredients/endrino/`
- `assets/ingredients/espirulina/`

### Interacción

Utilizar tarjetas o placeholders estructurales. No generar imágenes nuevas ni bloquear la V0 por la ausencia de assets.

### Desktop

Presentar seis tarjetas estructurales con jerarquía consistente y navegación preparada para assets futuros.

### Mobile

Disponer las tarjetas en una progresión vertical o carrusel accesible, evitando que el contenido dependa de imágenes inexistentes.

### Estado

Estructura y título definidos. Assets individuales, copy ampliado y propiedades: `PLACEHOLDER / PENDING`.

---

## 05 — NATU

### Objetivo

Introducir a NATU como guía emocional y puente entre el contenido técnico y el emocional.

### Contenido

- NATU: personaje/mascota emocional de la marca.
- Funciones: guía emocional, conexión con el usuario y tono amigable.
- Concepto: `HOLA. SOY NATU.`
- Texto: `Estoy aquí para acompañarte a descubrir una forma más natural de cuidar tu bienestar.`

No convertir NATU en protagonista del Hero.

### Asset

No hay nuevos assets disponibles para NATU. La carpeta `assets/natu/` queda preparada para incorporarlos posteriormente.

### Interacción

La sección debe reservar una estructura para poses o apariciones futuras sin requerirlas para la V0.

### Desktop

Presencia secundaria, integrada como transición entre contenido técnico y emocional.

### Mobile

Mantener una aparición contenida y legible, sin desplazar el contenido principal. Assets no disponibles: `PLACEHOLDER / PENDING`.

### Estado

Estructura y copy base definidos. Assets de NATU: `PLACEHOLDER / PENDING`.

---

## 06 — CONTROL & BIENESTAR

### Objetivo

Presentar una sección visual de beneficios o pilares sin formular afirmaciones médicas ni terapéuticas.

### Contenido

Título: `Pequeñas decisiones. Grandes hábitos.`

Tres pilares:

- `NATURAL`
- `EQUILIBRIO`
- `RUTINA`

El copy final queda `PENDIENTE DE VALIDACIÓN`.

### Asset

La carpeta `assets/benefits/` queda disponible. No se han definido assets adicionales para esta sección.

### Interacción

Presentación visual de pilares mediante una estructura simple. No añadir claims, métricas, resultados ni propiedades no confirmadas.

### Desktop

Pilares organizados en una composición equilibrada y fácil de escanear.

### Mobile

Pilares en secuencia vertical o tarjetas accesibles, manteniendo el copy breve y pendiente de validación.

### Estado

Título y pilares definidos. Claims específicos: `PENDIENTE DE VALIDACIÓN`. Assets: `PLACEHOLDER / PENDING`.

---

## 07 — RUTINA

### Objetivo

Preparar una estructura para explicar la integración del producto en la rutina.

### Contenido

- Título: `Hazlo parte de tu rutina.`
- Texto: `El bienestar también se construye con pequeños hábitos.`

No inventar instrucciones de consumo, horarios ni pasos adicionales.

Si se muestra “1 cápsula diaria”, debe marcarse como contenido pendiente de validación contra el etiquetado final.

### Asset

La carpeta `assets/routine/` queda disponible. No hay assets adicionales definidos.

### Interacción

Estructura narrativa simple para una futura explicación de rutina, sin convertir placeholders en instrucciones definitivas.

### Desktop

Secuencia de rutina preparada para recibir copy y assets aprobados.

### Mobile

Secuencia vertical legible y accesible.

### Estado

Título y texto base definidos. Instrucciones de consumo, dosis, horarios y frecuencia: `PENDING`.

---

## 08 — CONFIANZA

### Objetivo

Reservar un espacio para comunicar presentación, calidad, fórmula, origen natural e información verificable.

### Contenido

Título: `Lo natural también puede ser extraordinario.`

Categorías previstas:

- `Fórmula avanzada.`
- `Presentación cuidada.`
- `Ingredientes seleccionados.`

Todo claim no confirmado debe permanecer como `PLACEHOLDER`.

No inventar certificaciones, registros, estudios, porcentajes, laboratorios ni garantías.

### Asset

La carpeta `assets/trust/` queda disponible. No hay assets adicionales definidos.

### Interacción

Presentar únicamente información aprobada. Los elementos sin respaldo verificable se mantienen como placeholders no publicados.

### Desktop

Sección de confianza de lectura clara, con espacio para evidencia futura.

### Mobile

Contenido apilado, escaneable y sin depender de tablas o composiciones complejas.

### Estado

Título y apoyos base definidos, sujetos a verificación. Claims, evidencia y assets: `PLACEHOLDER / PENDING`.

---

## 09 — CTA

### Objetivo

Cerrar la narrativa con una llamada a la acción final alineada con la marca.

### Contenido

Fondo: verde bosque.

- Texto: `Tu bienestar, nuestra naturaleza.`
- Subtexto: `Descubre LÍNEA NATURAL.`
- CTA: `DESCUBRE LA FÓRMULA`.

### Asset

La carpeta `assets/cta/` queda disponible. No hay assets adicionales definidos.

### Interacción

Crear únicamente la estructura visual para el CTA final. No implementar checkout ni ecommerce mientras no estén definidos.

### Desktop

Bloque final con jerarquía clara y espacio suficiente para el CTA validado.

### Mobile

CTA de ancho y tamaño adecuados para interacción táctil, sin implementar flujo de compra.

### Estado

Fondo, copy y CTA definidos. Assets específicos: `PENDING`.

---

## 10 — FOOTER

### Objetivo

Cerrar la página con un footer minimalista y preparado para información futura.

### Contenido

Reservar espacio para:

- Marca
- Navegación
- Información legal
- Contacto
- Redes sociales, si posteriormente se definen

No inventar datos de contacto.

### Asset

No se requiere un asset adicional al inventario actual.

### Interacción

Enlaces de navegación y legales accesibles. Los destinos no definidos quedan pendientes.

### Desktop

Distribución minimalista y ordenada de los grupos de información.

### Mobile

Contenido apilado, con enlaces legibles y áreas táctiles suficientes.

### Estado

Estructura definida. Datos, enlaces y redes: `PENDING`.

---

## 11 — SISTEMA VISUAL

### Objetivo

Conservar el lenguaje visual de marca ya establecido como referencia para la futura implementación.

### Contenido

- Crema
- Verde salvia
- Verde oliva
- Verde bosque
- Dorado metálico utilizado con moderación
- Estética botánica premium
- Fotografía de producto realista
- Iluminación cálida y natural
- Composición limpia
- Sensación premium
- Evitar estética infantil

Personalidad: natural, premium, serena, cercana, elegante, confiable,
contemporánea, cálida y optimista.

Evitar estética farmacéutica fría, estética agresivamente fitness, exceso de
verde, exceso de dorado, gradients excesivos, interfaces recargadas, lenguaje
de venta agresivo y apariencia de plantilla genérica de ecommerce.

Tipografía:

- Serif elegante para titulares emocionales o conceptuales.
- Sans-serif limpia para navegación, etiquetas, datos y textos funcionales.
- Mantener pocas familias tipográficas, titulares con aire y bloques de texto breves.

Espacio: priorizar grandes márgenes, composiciones respiradas, bloques amplios,
elementos aislados y transiciones suaves.

Producto de referencia: botella blanca, tapa metálica dorada y etiqueta verde bosque.

### Asset

Usar los assets disponibles en `docs/asset-inventory.md`. No generar ni modificar assets.

### Interacción

El sistema visual debe apoyar la jerarquía de contenido y no introducir decisiones no especificadas en este documento.

### Desktop

Aplicar el lenguaje visual con suficiente espacio, contraste y presencia editorial.

### Mobile

Mantener la misma identidad cromática y premium con composiciones simplificadas y legibles.

### Estado

Dirección visual, personalidad, producto de referencia, tipografía y principios
de espacio definidos. Tokens, tipografías concretas y reglas de composición:
`PENDING` para implementación.

---

## 12 — RESPONSIVE

### Objetivo

Definir una degradación consistente entre desktop, tablet y mobile.

### Contenido

La implementación deberá contemplar explícitamente:

- Hero
- Navegación
- Master de ingredientes
- Experiencia Centella
- Tarjetas
- NATU
- CTA

En mobile se conservará la narrativa, no se tratará como una versión reducida
de desktop. Prioridades: Hero, Fórmula, Centella, NATU, Bienestar y CTA.

### Asset

No se requieren assets adicionales. Las proporciones y recortes deberán validarse con los assets disponibles.

### Interacción

- Desktop: puede utilizar sticky storytelling y composiciones amplias.
- Tablet: reducir densidad y adaptar tamaños; conservar la jerarquía y navegación.
- Mobile: priorizar flujo vertical, controles accesibles y fallback de video cuando sea necesario.
- La experiencia Centella en mobile no debe depender de sticky complejo.

### Desktop

Experiencia completa con paneles visuales, navegación y progresión por scroll donde está especificado.

### Mobile

Experiencia lineal, táctil y accesible. Reducir o sustituir interacciones complejas sin perder los cinco estados de Centella ni los contenidos principales. El master de ingredientes debe convertirse en una experiencia vertical o carousel.

### Estado

Requisitos responsive definidos. Breakpoints, medidas y reglas exactas: `PENDING` para implementación.

---

## 13 — ACCESIBILIDAD

### Objetivo

Garantizar que la V0 sea operable, legible y comprensible para distintos modos de interacción.

### Contenido

Requisitos:

- Navegación por teclado.
- Textos legibles.
- Contraste suficiente.
- Estados de foco visibles.
- `alt text` descriptivo para imágenes.
- Respeto de `prefers-reduced-motion`.

### Asset

Cada imagen deberá recibir un `alt text` validado durante la implementación. El video deberá tener una alternativa cuando no pueda reproducirse.

### Interacción

Si el usuario solicita reduced motion, desactivar o simplificar las animaciones complejas, incluido el storytelling dependiente del scroll y las transiciones no esenciales.

### Desktop

Todas las interacciones de scroll, navegación y estados deben tener una alternativa operable por teclado.

### Mobile

Carruseles, menús y controles deben incluir foco visible, nombres accesibles y controles táctiles adecuados.

### Estado

Requisitos definidos. Textos alternativos y validación de contraste: `PENDING` durante implementación.

---

## 14 — ASSETS DISPONIBLES Y FALTANTES

### Objetivo

Mantener una única referencia de disponibilidad de assets para la implementación de V0.

### Contenido

Assets actualmente disponibles y registrados:

- Hero: `assets/hero/hero-naturaleza-producto.mp4`
- Ingredientes master: `assets/ingredients/master/ingredients-master.png`
- Centella: `assets/ingredients/centella/centella-overview.png`
- Centella estados: `01-la-planta.png`, `02-el-detalle.png`, `03-el-extracto.png`, `04-la-ciencia.png`, `05-en-tu-formula.png`

Assets faltantes para V0:

- Assets individuales de Algas, Marrubio, Cajeto, Pomelo, Endrino y Espirulina.
- Poses o assets de NATU.
- Assets específicos de Benefits, Trust, Routine y CTA no registrados.

### Asset

La referencia oficial es `docs/asset-inventory.md`. Las rutas faltantes deben tratarse como `STATUS: PLACEHOLDER / PENDING` y no como archivos existentes.

### Interacción

La ausencia de assets individuales no debe bloquear la estructura de V0. Utilizar placeholders estructurales donde esté especificado.

### Desktop

Mostrar únicamente assets existentes; reservar espacios preparados para los faltantes.

### Mobile

Evitar espacios vacíos que perjudiquen el flujo; usar placeholders estructurales accesibles y claramente identificados durante desarrollo.

### Estado

Inventario identificado. Assets faltantes: `PLACEHOLDER / PENDING`.

---

## 15 — FUERA DEL ALCANCE DE V0

Quedan explícitamente fuera de esta fase:

- Generación de nuevos assets.
- Ecommerce.
- Checkout.
- CMS.
- Backend.
- Login.
- Base de datos.
- Analytics avanzado.
- Claims médicos no validados.
- Generación automática de contenido.
- Cualquier funcionalidad no definida en esta especificación.

---

## V0 READY CHECKLIST

- [ ] estructura definida
- [ ] assets existentes identificados
- [ ] assets faltantes identificados
- [ ] interacción definida
- [ ] responsive definido
- [ ] accesibilidad definida
- [ ] claims pendientes identificados
- [ ] elementos fuera de alcance identificados
