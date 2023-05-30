# Data Lovers

## Índice

* [1. Resumen del Proyecto](#1-resumen-del-proyecto)
* [2. Definición del Producto](#2-definición-del-producto)
* [3. Historias de Usuario](#3-historias-de-usuario)
* [4. Diseño de la Interfaz de Usuario](#4-diseño-de-la-interfaz-de-usuario)
* [5. Pruebas Unitarias](#5-pruebas-unitarias)
* [6. Checklist](#6-checklist)

***

## 1. Resumen del Proyecto 

En este proyecto se construyó una página web que permite visualizar un conjunto (set) de datos que se adecúen a las necesidades del usuario, luego de una exhaustiva investigación en base al tema a tratar. 

Como entregable final, esta página web permite visualizar la data, filtrarla, ordenarla y hacer un pequeño cálculo agregado.

Una vez que definida el área de interés, se logró comprender al usuario objetivo y qué es lo que necesita saber o ver exactactamente en la interfaz. 

El tema elegido fue Juegos Olímpicos de Río de Janeiro 2016, en donde se visualiza un set que proporciona una lista de los atletas que
ganaron medallas en las olímpiadas.


## 2. Definición del Producto 

* <b>¿Quiénes son los principales usuarios de producto?</b>

Los principales usuarios son personas que quieran obtener información sobre los atletas ganadores de medallas en los Juegos Olímpicos de Rio 2016, mediante una página web.

* <b>¿Cuáles son los objetivos de estos usuarios en relación con el producto?</b>

El objetivo de los usuarios es encontrar en un sitio web donde se pueda obtener de manera intuitiva la información relevante al tema.

* <b>¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?</b>

Los usuarios quieren visualizar información sobre los atletas ganadores de medallas olímpicas, ver los países participantes, las disciplinas en competencias y también poder obtener información sobre la cantidad de participantes por género que hubo ese año.

* <b>¿Cuándo utilizan o utilizarían el producto?</b>

Cuando los usuarios requieran encontrar información respecto a los atletas participantes de las olimpiadas de ese año. 


## 3. Historias de Usuario

<img src="/img/HU1y2.png" style= width:90%>

<br>

<img src="/img/HU3y4.png" style= width:90%>


## 4. Diseño de la Interfaz de Usuario

### Prototipo de baja fidelidad
<br>

<img src="/img/a.jpg" style= width:60%>
<br>
<img src="/img/b.jpg" style= width:60%>
<br>
<img src="/img/c.jpg" style= width:60%>

### Prototipo de alta fidelidad
<br>

<img src="/img/prototipoalta1.png" style= width:90%>

#### Testeos de Usabilidad

Se muestran los resultados, según los testeos de usabilidad realizados a diferentes usuarios, a continuación todos los comentarios realizados por parte de ellos.

a) Me gustaria que todos los botones esten en una misma linea.<br>
b) Me gustaria que las imágenes que se muestran en los atletas, podrian indicar que medalla fue la que ganaron.<br>
c) Creo que el color amarillo de las tarjetas no se ve bien según la paleta de colores.<br>
d) Me gustaria cambiar la barra de navegación por botones y que al presionarlos éstos se agranden.


### Prototipo de alta fidelidad final

Luego de realizar los cambios, segun la opinion de los usuarios se realizo el prototipo final que se esta acorde con nuestra página web desplegada. Se puede visualizar el prototipo directamente en figma mediante este el enlace <a href="https://www.figma.com/file/WXUHIQVV7Nv2gpizmXmsr2/Untitled?type=design&node-id=0%3A1&t=W2qpgPBZgmRIZtud-1" target="_blank">Prototipo de Alta Fidelidad</a>
<br>


<img src="/img/prototipoalta2.png" style= width:90%>
<br>

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Se puede observar la página web final desde un navegador. Puedes ver el proyecto final desde este enlace <a href="https://gabrielamolinacartes.github.io/DEV007-data-lovers/" target="_blank">PROYECTO FINAL</a>.

<br>

<img src="/img/paginafinal.png" style= width:90%>

 
## 5. Pruebas Unitarias

Se logró obtener un porcentaje de 93,1% de los test realizando, cumpliendo con la cobertura del 70% o más.
<br>

<img src="/img/pruebasunitarias.png" style= width:75%>

## 6. Checklist

* [x] Usa VanillaJS.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.
