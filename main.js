//importamos la data desde el archivo athletes.js
import data from "./data/athletes/athletes.js";

//importamos las funciones desde data.js
import { filtrarAthlete, sortData } from "./data.js";

//Variables a utilizar
const team = document.querySelector("#team");
const medal = document.querySelector("#medal");
const sport = document.querySelector("#sport");
const gender = document.querySelector("#gender");

const resultado = document.querySelector("#resultado");

//Generar un objeto con la busqueda, que guarde la seleccion del usuario
const datosBusqueda = {
  gender: "",
  team: "",
  sport: "",
  medal: "",
};

//Creamos la función que nos muetra la data de los atletas
function mostrarAthletes(athletes) {
  limpiarHTML(); // elimina el html previo
  athletes.slice(0, 80).forEach((athlete) => {// el slice nos indica cuanta data queremos mostrar en pantalla
    const imgMedal =//Agregamos una contante que nos muetre la imagen de la medalla, dependiendo de cual ha obtenido el atleta con un oprador condicional ternario
      athlete.medal === "Gold"
        ? "./images/gold.png"
        : athlete.medal === "Silver"
          ? "./images/silver.png"
          : "./images/bronze.png";
    //const { name, gender, team, sport, medal } = athlete;
    //Generar las cards de los atletas con un template
    resultado.innerHTML += `
    <div class="flip-container">
        <div class="card-completa">
            <div class="front">
                <div class="card-atleta" id="imagen">
                    <img class="imagen-medalla" src= ${imgMedal}>
                    <h4>${athlete.name}</h4>
                </div>
            </div>
            <div class="back">
                <div class="card-atleta" id="imagen">
                    <h3 class="nombre-atleta" >${athlete.name}</h3>
                    <h4>Team: ${athlete.team}</h4>
                    <h4>Medal: ${athlete.medal}</h4>
                    <h4>Sport: ${athlete.sport}</h4>
                    <h4>Gender: ${athlete.gender}</h4>
                </div>
            </div>
        </div>
    </div>
    `;
  });

  //Función que limpia el html
  function limpiarHTML() {
    while (resultado.firstChild) {
      resultado.removeChild(resultado.firstChild);
    }
  }
}

//Para mostrar en html la funcion mostrarAthletes.
document.addEventListener("DOMContentLoaded", () => {
  mostrarAthletes(data.athletes);
});

//EventListener para los select
team.addEventListener("change", (e) => {
  datosBusqueda.team = e.target.value;
  const resultado = filtrarAthlete(
    data.athletes,
    datosBusqueda.team,
    datosBusqueda.medal,
    datosBusqueda.sport,
    datosBusqueda.gender
  );
  document.getElementById("inicio").style.display = "none"; //oculto toda la seccion de inicio
  document.getElementById("primera").style.display = "block";//muestra la sección de las cards
  mostrarAthletes(resultado);
});

medal.addEventListener("change", (e) => {
  datosBusqueda.medal = e.target.value;
  const resultado = filtrarAthlete(
    data.athletes,
    datosBusqueda.team,
    datosBusqueda.medal,
    datosBusqueda.sport,
    datosBusqueda.gender
  );
  document.getElementById("inicio").style.display = "none"; //oculto toda la seccion de inicio
  document.getElementById("primera").style.display = "block";
  mostrarAthletes(resultado);
});

sport.addEventListener("change", (e) => {
  datosBusqueda.sport = e.target.value;
  const resultado = filtrarAthlete(
    data.athletes,
    datosBusqueda.team,
    datosBusqueda.medal,
    datosBusqueda.sport,
    datosBusqueda.gender
  );
  document.getElementById("inicio").style.display = "none"; //oculto toda la seccion de inicio
  document.getElementById("primera").style.display = "block";
  mostrarAthletes(resultado);
});

gender.addEventListener("change", (e) => {
  datosBusqueda.gender = e.target.value;
  const resultado = filtrarAthlete(
    data.athletes,
    datosBusqueda.team,
    datosBusqueda.medal,
    datosBusqueda.sport,
    datosBusqueda.gender
  );
  document.getElementById("inicio").style.display = "none"; //oculto toda la seccion de inicio
  document.getElementById("primera").style.display = "block";
  mostrarAthletes(resultado);
});

//Actualizar con el titulo
const refreshTitle = document.getElementById("title-refresh");
refreshTitle.addEventListener("click", () => {
  document.getElementById("inicio").style.display = "none"; //oculto toda la seccion de inicio
  document.getElementById("primera").style.display = "block";
  location.reload(); //método que actualiza la página actual.
});

//Ordenamos la data de forma ascendente y descendente
const ordenSelect = document.getElementById("filtro-orden");
ordenSelect.addEventListener("change", () => {
  const ordenNombre = ordenSelect.value;
  let dataOrden;

  if (ordenNombre === "ascendente") {
    dataOrden = sortData("ascendente", data.athletes);
  } else if (ordenNombre === "descendente") {
    dataOrden = sortData("descendente", data.athletes);
  }
  document.getElementById("inicio").style.display = "none"; //oculto toda la seccion de inicio
  document.getElementById("primera").style.display = "block";
  /*console.log(dataOrden);*/
  mostrarAthletes(dataOrden);
});

//Calculoamos la cantidad de atletas por género
const compute = document.getElementById("boton-calcular");
compute.addEventListener("click", () => {
  let contadorFemenino = 0;
  let contadorMasculino = 0;

  for (let i = 0; i < data.athletes.length; i++) {
    if (data.athletes[i].gender === "F") {
      contadorFemenino++;
    }
    if (data.athletes[i].gender === "M") {
      contadorMasculino++;
    }
  }
  const contenedorResultados = document.getElementById("resultados-calculo");
  contenedorResultados.innerHTML = `
<p class="cantidadGenero">
    "Cantidad de atletas según género:
    ${contadorFemenino} mujeres y
    ${contadorMasculino} hombres"
</p>

`;
});
