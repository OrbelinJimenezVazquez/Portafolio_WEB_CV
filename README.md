# Guía CSS — Propiedades y Explicaciones Detalladas

## 1. Color y Fondo

- **color**: Define el color del texto dentro de un elemento. Se puede usar con nombres de colores, códigos hexadecimales, RGB, HSL, etc.  
  *Ejemplo:* `color: red;` cambia el texto a rojo.

- **background**: Propiedad abreviada que permite definir varios aspectos del fondo en una sola línea, como color, imagen, posición, repetición, tamaño, etc.  
  *Ejemplo:* `background: url('img.jpg') no-repeat center / cover;`

- **background-color**: Especifica el color de fondo del elemento.  
  *Ejemplo:* `background-color: lightblue;`

- **background-image**: Define una imagen que se usará como fondo del elemento.  
  *Ejemplo:* `background-image: url('fondo.jpg');`

- **background-repeat**: Controla si la imagen de fondo se repite o no, puede ser `repeat`, `no-repeat`, `repeat-x`, `repeat-y`.  
  *Ejemplo:* `background-repeat: no-repeat;`

- **background-position**: Determina dónde se coloca la imagen de fondo dentro del elemento (ej. `center center`, `top left`).  
  *Ejemplo:* `background-position: center center;`

- **background-size**: Ajusta el tamaño de la imagen de fondo (valores como `cover`, `contain` o dimensiones específicas).  
  *Ejemplo:* `background-size: cover;`

- **background-clip**: Controla hasta qué límite se pinta el fondo, por ejemplo, solo hasta el padding o hasta el borde.  
  *Ejemplo:* `background-clip: padding-box;`

- **background-origin**: Define el área desde la cual se posiciona la imagen de fondo, como el borde, el padding o el contenido.  
  *Ejemplo:* `background-origin: border-box;`

- **background-attachment**: Define si la imagen de fondo se mueve con el scroll (`scroll`) o permanece fija (`fixed`).  
  *Ejemplo:* `background-attachment: fixed;`

---

## 2. Texto y Tipografía

- **font**: Propiedad abreviada que puede definir simultáneamente estilo, peso, tamaño, altura de línea y familia tipográfica.  
  *Ejemplo:* `font: italic bold 16px/1.5 Arial, sans-serif;`

- **font-family**: Define la familia o familias de fuentes para el texto, especificando alternativas si la primera no está disponible.  
  *Ejemplo:* `font-family: 'Helvetica', Arial, sans-serif;`

- **font-size**: Especifica el tamaño de la fuente, puede ser en px, em, rem, %, etc.  
  *Ejemplo:* `font-size: 14px;`

- **font-style**: Define el estilo del texto, comúnmente `normal`, `italic` o `oblique`.  
  *Ejemplo:* `font-style: italic;`

- **font-weight**: Define el grosor del texto, valores comunes son `normal`, `bold`, o números del 100 al 900.  
  *Ejemplo:* `font-weight: 700;`

- **text-align**: Alinea horizontalmente el texto dentro de un contenedor, valores como `left`, `center`, `right`, `justify`.  
  *Ejemplo:* `text-align: justify;`

---

## 3. Márgenes, Bordes y Rellenos

- **margin**: Establece el espacio externo (margen) alrededor del elemento para los cuatro lados a la vez o individualmente.  
  *Ejemplo:* `margin: 10px 15px 10px 15px;` (arriba, derecha, abajo, izquierda)

- **padding**: Espacio interno (relleno) entre el contenido del elemento y su borde, para los cuatro lados o por separado.  
  *Ejemplo:* `padding: 15px;`

- **border**: Define borde en una sola línea, con estilo, grosor y color.  
  *Ejemplo:* `border: 2px solid #000;`

---

## 4. Dimensiones

- **width**: Ancho del elemento, puede ser fijo o relativo.  
  *Ejemplo:* `width: 300px;`

- **height**: Alto del elemento.  
  *Ejemplo:* `height: 150px;`

- **min-width**: Ancho mínimo permitido.  
  *Ejemplo:* `min-width: 200px;`

- **max-width**: Ancho máximo permitido.  
  *Ejemplo:* `max-width: 600px;`

## 5. Visualización y Posicionamiento

- **display**: Controla cómo se muestra un elemento, puede ser `block` (bloque), `inline` (en línea), `flex`, `grid`, `none` (oculto), etc.  
  *Ejemplo:* `display: flex;`

- **position**: Tipo de posicionamiento del elemento: `static` (por defecto), `relative`, `absolute`, `fixed` o `sticky`.  
  *Ejemplo:* `position: absolute;`

- **top, right, bottom, left**: Define la posición exacta del elemento cuando se usa `position`.  
  *Ejemplo:* `top: 10px; left: 20px;`

- **float**: Permite que el elemento flote a la izquierda o derecha, afectando la disposición de otros elementos.  
  *Ejemplo:* `float: right;`

- **clear**: Evita que otros elementos floten junto a uno que usa `float`.  
  *Ejemplo:* `clear: both;`

- **z-index**: Define el orden de apilamiento de los elementos (`higher` está adelante, `lower` está detrás).  
  *Ejemplo:* `z-index: 100;`

---

## 6. Flexbox

- **flex**: Define cómo un elemento dentro de un contenedor flexible crece y se reduce.  
  *Ejemplo:* `flex: 1 0 200px;`

- **flex-direction**: Define la orientación de los elementos (`row`, `column`, `row-reverse`, `column-reverse`).  
  *Ejemplo:* `flex-direction: row;`

- **flex-wrap**: Controla si los elementos se envuelven (`wrap`) o se mantienen en una sola línea (`nowrap`).  
  *Ejemplo:* `flex-wrap: wrap;`

- **justify-content**: Alinea los elementos en el eje principal (`flex-start`, `center`, `space-between`, etc.).  
  *Ejemplo:* `justify-content: space-around;`

---

## 7. Grid

- **grid-template-columns**: Define el ancho de las columnas.  
  *Ejemplo:* `grid-template-columns: 100px 1fr 2fr;`

- **grid-template-areas**: Define nombres de áreas para facilitar su uso.  
  *Ejemplo:*  

  `
  grid-template-areas:
    "header header header"
    "sidebar content content";;`


  ## 8. Tabla

- **border-collapse**: Controla si los bordes de tabla colapsan en uno solo o permanecen separados.  
  *Ejemplo:* `border-collapse: collapse;`

- **border-spacing**: Establece el espacio entre bordes de celdas cuando no colapsan.  
  *Ejemplo:* `border-spacing: 5px;`

- **caption-side**: Define la posición del título de la tabla (`top`, `bottom`).  
  *Ejemplo:* `caption-side: bottom;`

- **empty-cells**: Controla si se muestran bordes en celdas vacías.  
  *Ejemplo:* `empty-cells: show;`

- **table-layout**: Define el algoritmo de distribución de la tabla (`auto`, `fixed`).  
  *Ejemplo:* `table-layout: fixed;`

---

## 9. Animaciones y Transiciones

- **animation**: Propiedad abreviada para definir animaciones CSS.  
  *Ejemplo:* `animation: slidein 3s ease-in-out forwards;`

- **animation-name**: Nombre de la animación definida con `@keyframes`.  
  *Ejemplo:* `animation-name: slidein;`

- **animation-duration**: Duración de la animación.  
  *Ejemplo:* `animation-duration: 3s;`

- **animation-timing-function**: Define la curva de aceleración (`ease`, `linear`, `ease-in-out`).  
  *Ejemplo:* `animation-timing-function: ease-in-out;`

- **animation-delay**: Retraso antes de que inicie la animación.  
  *Ejemplo:* `animation-delay: 1s;`

- **animation-iteration-count**: Número de veces que se repite la animación (`infinite` para repetir indefinidamente).  
  *Ejemplo:* `animation-iteration-count: infinite;`

- **transition**: Propiedad abreviada para definir transiciones CSS.  
  *Ejemplo:* `transition: background-color 0.3s ease;`

- **transition-property**: Define qué propiedad cambiará con la transición.  
  *Ejemplo:* `transition-property: background-color;`

- **transition-duration**: Duración de la transición.  
  *Ejemplo:* `transition-duration: 0.3s;`

---

## 10. Otras Propiedades Importantes

- **overflow**: Controla el comportamiento del contenido que excede el área visible (`scroll`, `hidden`, `visible`, `auto`).  
  *Ejemplo:* `overflow: scroll;`

- **visibility**: Define si un elemento es visible (`visible`) o invisible (`hidden`).  
  *Ejemplo:* `visibility: hidden;`

- **opacity**: Ajusta la transparencia del elemento (de `0` completamente transparente a `1` completamente visible).  
  *Ejemplo:* `opacity: 0.5;`

- **cursor**: Define el tipo de cursor al pasar sobre un elemento.  
  *Ejemplo:* `cursor: pointer;`

- **box-shadow**: Aplica sombra alrededor del elemento con desplazamiento, difuminado y color.  
  *Ejemplo:* `box-shadow: 2px 2px 5px rgba(0,0,0,0.3);`

- **box-sizing**: Define cómo se calcula el tamaño del elemento (`content-box` o `border-box`).  
  *Ejemplo:* `box-sizing: border-box;`

- **content**: Usado en pseudo-elementos para insertar contenido generado.  
  *Ejemplo:* `content: "→";`

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
