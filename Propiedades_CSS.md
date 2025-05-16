# Guía CSS — Propiedades y Explicaciones Detalladas

## 1. Color y Fondo

- **color**: Define el color del texto dentro de un elemento. Se puede usar con nombres de colores, códigos hexadecimales, RGB, HSL, etc.  
  _Ejemplo:_ `color: red;` cambia el texto a rojo.

- **background**: Propiedad abreviada que permite definir varios aspectos del fondo en una sola línea, como color, imagen, posición, repetición, tamaño, etc.  
  _Ejemplo:_ `background: url('img.jpg') no-repeat center / cover;`

- **background-color**: Especifica el color de fondo del elemento.  
  _Ejemplo:_ `background-color: lightblue;`

- **background-image**: Define una imagen que se usará como fondo del elemento.  
  _Ejemplo:_ `background-image: url('fondo.jpg');`

- **background-repeat**: Controla si la imagen de fondo se repite o no, puede ser `repeat`, `no-repeat`, `repeat-x`, `repeat-y`.  
  _Ejemplo:_ `background-repeat: no-repeat;`

- **background-position**: Determina dónde se coloca la imagen de fondo dentro del elemento (ej. `center center`, `top left`).  
  _Ejemplo:_ `background-position: center center;`

- **background-size**: Ajusta el tamaño de la imagen de fondo (valores como `cover`, `contain` o dimensiones específicas).  
  _Ejemplo:_ `background-size: cover;`

- **background-clip**: Controla hasta qué límite se pinta el fondo, por ejemplo, solo hasta el padding o hasta el borde.  
  _Ejemplo:_ `background-clip: padding-box;`

- **background-origin**: Define el área desde la cual se posiciona la imagen de fondo, como el borde, el padding o el contenido.  
  _Ejemplo:_ `background-origin: border-box;`

- **background-attachment**: Define si la imagen de fondo se mueve con el scroll (`scroll`) o permanece fija (`fixed`).  
  _Ejemplo:_ `background-attachment: fixed;`

---

## 2. Texto y Tipografía

- **font**: Propiedad abreviada que puede definir simultáneamente estilo, peso, tamaño, altura de línea y familia tipográfica.  
  _Ejemplo:_ `font: italic bold 16px/1.5 Arial, sans-serif;`

- **font-family**: Define la familia o familias de fuentes para el texto, especificando alternativas si la primera no está disponible.  
  _Ejemplo:_ `font-family: 'Helvetica', Arial, sans-serif;`

- **font-size**: Especifica el tamaño de la fuente, puede ser en px, em, rem, %, etc.  
  _Ejemplo:_ `font-size: 14px;`

- **font-style**: Define el estilo del texto, comúnmente `normal`, `italic` o `oblique`.  
  _Ejemplo:_ `font-style: italic;`

- **font-weight**: Define el grosor del texto, valores comunes son `normal`, `bold`, o números del 100 al 900.  
  _Ejemplo:_ `font-weight: 700;`

- **text-align**: Alinea horizontalmente el texto dentro de un contenedor, valores como `left`, `center`, `right`, `justify`.  
  _Ejemplo:_ `text-align: justify;`

---

## 3. Márgenes, Bordes y Rellenos

- **margin**: Establece el espacio externo (margen) alrededor del elemento para los cuatro lados a la vez o individualmente.  
  _Ejemplo:_ `margin: 10px 15px 10px 15px;` (arriba, derecha, abajo, izquierda)

- **padding**: Espacio interno (relleno) entre el contenido del elemento y su borde, para los cuatro lados o por separado.  
  _Ejemplo:_ `padding: 15px;`

- **border**: Define borde en una sola línea, con estilo, grosor y color.  
  _Ejemplo:_ `border: 2px solid #000;`

---

## 4. Dimensiones

- **width**: Ancho del elemento, puede ser fijo o relativo.  
  _Ejemplo:_ `width: 300px;`

- **height**: Alto del elemento.  
  _Ejemplo:_ `height: 150px;`

- **min-width**: Ancho mínimo permitido.  
  _Ejemplo:_ `min-width: 200px;`

- **max-width**: Ancho máximo permitido.  
  _Ejemplo:_ `max-width: 600px;`

## 5. Visualización y Posicionamiento

- **display**: Controla cómo se muestra un elemento, puede ser `block` (bloque), `inline` (en línea), `flex`, `grid`, `none` (oculto), etc.  
  _Ejemplo:_ `display: flex;`

- **position**: Tipo de posicionamiento del elemento: `static` (por defecto), `relative`, `absolute`, `fixed` o `sticky`.  
  _Ejemplo:_ `position: absolute;`

- **top, right, bottom, left**: Define la posición exacta del elemento cuando se usa `position`.  
  _Ejemplo:_ `top: 10px; left: 20px;`

- **float**: Permite que el elemento flote a la izquierda o derecha, afectando la disposición de otros elementos.  
  _Ejemplo:_ `float: right;`

- **clear**: Evita que otros elementos floten junto a uno que usa `float`.  
  _Ejemplo:_ `clear: both;`

- **z-index**: Define el orden de apilamiento de los elementos (`higher` está adelante, `lower` está detrás).  
  _Ejemplo:_ `z-index: 100;`

---

## 6. Flexbox

- **flex**: Define cómo un elemento dentro de un contenedor flexible crece y se reduce.  
  _Ejemplo:_ `flex: 1 0 200px;`

- **flex-direction**: Define la orientación de los elementos (`row`, `column`, `row-reverse`, `column-reverse`).  
  _Ejemplo:_ `flex-direction: row;`

- **flex-wrap**: Controla si los elementos se envuelven (`wrap`) o se mantienen en una sola línea (`nowrap`).  
  _Ejemplo:_ `flex-wrap: wrap;`

- **justify-content**: Alinea los elementos en el eje principal (`flex-start`, `center`, `space-between`, etc.).  
  _Ejemplo:_ `justify-content: space-around;`

---

## 7. Grid

- **grid-template-columns**: Define el ancho de las columnas.  
  _Ejemplo:_ `grid-template-columns: 100px 1fr 2fr;`

- **grid-template-areas**: Define nombres de áreas para facilitar su uso.  
   _Ejemplo:_

  `
grid-template-areas:
  "header header header"
  "sidebar content content";;`

  ## 8. Tabla

- **border-collapse**: Controla si los bordes de tabla colapsan en uno solo o permanecen separados.  
  _Ejemplo:_ `border-collapse: collapse;`

- **border-spacing**: Establece el espacio entre bordes de celdas cuando no colapsan.  
  _Ejemplo:_ `border-spacing: 5px;`

- **caption-side**: Define la posición del título de la tabla (`top`, `bottom`).  
  _Ejemplo:_ `caption-side: bottom;`

- **empty-cells**: Controla si se muestran bordes en celdas vacías.  
  _Ejemplo:_ `empty-cells: show;`

- **table-layout**: Define el algoritmo de distribución de la tabla (`auto`, `fixed`).  
  _Ejemplo:_ `table-layout: fixed;`

---

## 9. Animaciones y Transiciones

- **animation**: Propiedad abreviada para definir animaciones CSS.  
  _Ejemplo:_ `animation: slidein 3s ease-in-out forwards;`

- **animation-name**: Nombre de la animación definida con `@keyframes`.  
  _Ejemplo:_ `animation-name: slidein;`

- **animation-duration**: Duración de la animación.  
  _Ejemplo:_ `animation-duration: 3s;`

- **animation-timing-function**: Define la curva de aceleración (`ease`, `linear`, `ease-in-out`).  
  _Ejemplo:_ `animation-timing-function: ease-in-out;`

- **animation-delay**: Retraso antes de que inicie la animación.  
  _Ejemplo:_ `animation-delay: 1s;`

- **animation-iteration-count**: Número de veces que se repite la animación (`infinite` para repetir indefinidamente).  
  _Ejemplo:_ `animation-iteration-count: infinite;`

- **transition**: Propiedad abreviada para definir transiciones CSS.  
  _Ejemplo:_ `transition: background-color 0.3s ease;`

- **transition-property**: Define qué propiedad cambiará con la transición.  
  _Ejemplo:_ `transition-property: background-color;`

- **transition-duration**: Duración de la transición.  
  _Ejemplo:_ `transition-duration: 0.3s;`

---

## 10. Otras Propiedades Importantes

- **overflow**: Controla el comportamiento del contenido que excede el área visible (`scroll`, `hidden`, `visible`, `auto`).  
  _Ejemplo:_ `overflow: scroll;`

- **visibility**: Define si un elemento es visible (`visible`) o invisible (`hidden`).  
  _Ejemplo:_ `visibility: hidden;`

- **opacity**: Ajusta la transparencia del elemento (de `0` completamente transparente a `1` completamente visible).  
  _Ejemplo:_ `opacity: 0.5;`

- **cursor**: Define el tipo de cursor al pasar sobre un elemento.  
  _Ejemplo:_ `cursor: pointer;`

- **box-shadow**: Aplica sombra alrededor del elemento con desplazamiento, difuminado y color.  
  _Ejemplo:_ `box-shadow: 2px 2px 5px rgba(0,0,0,0.3);`

- **box-sizing**: Define cómo se calcula el tamaño del elemento (`content-box` o `border-box`).  
  _Ejemplo:_ `box-sizing: border-box;`

- **content**: Usado en pseudo-elementos para insertar contenido generado.  
  _Ejemplo:_ `content: "→";`

---

## Pseudo-clases

- **:hover**: Se activa cuando el usuario pasa el cursor sobre el elemento.
- **:focus**: Se activa cuando el elemento recibe foco (como un `input` activado).
- **:active**: Se activa mientras el usuario presiona un elemento (ej. un botón).
- **:visited**: Aplica estilos a los enlaces ya visitados.
- **:nth-child(n)**: Aplica estilos al enésimo hijo dentro de su contenedor.
- **:first-child**: Aplica estilos solo al primer hijo de un contenedor.
- **:not(selector)**: Aplica estilos a elementos que NO coinciden con el selector dado.

---

## Pseudo-elementos

- **::before**: Inserta contenido antes del contenido de un elemento.
- **::after**: Inserta contenido después del contenido de un elemento.
- **::first-letter**: Aplica estilos solo al primer carácter de un bloque de texto.
- **::first-line**: Aplica estilos solo a la primera línea de un bloque de texto.
- **::selection**: Define los estilos del texto que el usuario selecciona con el cursor.

## 11. Contenido y Generación

- **counter-reset**: Define o reinicia un contador de lista.  
  _Ejemplo:_ `counter-reset: section;`

- **counter-increment**: Incrementa un contador por cada elemento que lo utiliza.  
  _Ejemplo:_ `counter-increment: section;`

- **quotes**: Define el estilo de las comillas para citas (`open-quote` y `close-quote`).  
  _Ejemplo:_ `quotes: "«" "»";`

---

## 12. Desbordamiento y Recorte

- **clip**: Recorta el área visible de un elemento (solo funciona con `position: absolute`).  
  _Ejemplo:_ `clip: rect(0px, 100px, 100px, 0px);`

- **overflow-x / overflow-y**: Controla el desbordamiento horizontal y vertical individualmente.  
  _Ejemplo:_ `overflow-x: hidden; overflow-y: scroll;`

---

## 13. Filtros y Efectos Visuales

- **filter**: Aplica efectos visuales como desenfoque, brillo, contraste, etc.  
  _Ejemplo:_ `filter: blur(5px);`

- **backdrop-filter**: Aplica efectos visuales sobre el fondo detrás del elemento.  
  _Ejemplo:_ `backdrop-filter: brightness(0.5);`

---

## 14. Columnas y Multicolumna

- **column-count**: Define el número de columnas en un diseño multicolumna.  
  _Ejemplo:_ `column-count: 3;`

- **column-gap**: Ajusta el espacio entre columnas.  
  _Ejemplo:_ `column-gap: 20px;`

- **column-rule**: Define la línea separadora entre columnas.  
  _Ejemplo:_ `column-rule: 2px solid black;`

---

## 15. Transformaciones

- **transform**: Aplica transformaciones como rotación, escala, traslación y sesgado.  
  _Ejemplo:_ `transform: rotate(45deg);`

- **transform-origin**: Define el punto de origen de la transformación.  
  _Ejemplo:_ `transform-origin: center center;`

---

## 16. Estilos de desplazamiento

- **scroll-behavior**: Controla la forma en la que se mueve el desplazamiento (`auto`, `smooth`).  
  _Ejemplo:_ `scroll-behavior: smooth;`

- **overscroll-behavior**: Define el comportamiento del desbordamiento del scroll.  
  _Ejemplo:_ `overscroll-behavior: contain;`

---

## 17. Propiedades Avanzadas

- **will-change**: Indica al navegador qué propiedades cambiarán para optimizar rendimiento.  
  _Ejemplo:_ `will-change: transform;`

- **mix-blend-mode**: Define cómo se mezclan los elementos visualmente.  
  _Ejemplo:_ `mix-blend-mode: multiply;`

- **pointer-events**: Controla la interacción del usuario con el elemento.  
  _Ejemplo:_ `pointer-events: none;`
