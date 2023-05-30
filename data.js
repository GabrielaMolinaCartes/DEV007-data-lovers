// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

//Creamos la función que nos permite filtrar la data, con los parámetros que vamos a utilizar 
export function filtrarAthlete(data, team, medal, sport, gender) {
  //La variable se inicia con el valor del parámetro data. Esto asegura que resultado comience con todos los datos de atletas sin filtrar.
  let resultado = data;
  if (team) {
    resultado = resultado.filter((item) => item.team === team);
  }
  if (medal) {
    resultado = resultado.filter((item) => item.medal === medal);
  }
  if (sport) {
    resultado = resultado.filter((item) => item.sport === sport);
  }
  if (gender) {
    resultado = resultado.filter((item) => item.gender === gender);
  }
  return resultado;
}

//Creamos la función que nos permite ordenar la data de manera ascendente y descendente
export function sortData(order, data) {
  let dataOrden;
  //Si el parametro order es igual a "ascendente", se realiza el ordenamiento ascendente.
  if (order === "ascendente") {
    //Toma como argumento una función de comparación que define cómo se realizará el ordenamiento.
    dataOrden = data.sort((a, b) => {
      if (a.name < b.name) {
        return -1; //Indica que a debe ser colocado antes de b en el arreglo ordenado.
      }
      if (a.name > b.name) {
        return 1; //Indica que a debe ser colocado después de b en el arreglo ordenado.
      }
      return 0; //Indica que el orden entre a y b no cambia, son considerados iguales en el ordenamiento.
    });
  } else if (order === "descendente") {
    dataOrden = data.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
  }

  return dataOrden;
}
