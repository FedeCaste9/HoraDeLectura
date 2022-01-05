const _ = require("lodash");

//promhojas(); 
function promhojas(biblioteca) { //HECHO
  let promediohojas = _.sumBy(biblioteca, sumarPaginas) / biblioteca.length;
  return promediohojas;

}

function sumarPaginas(libro) {
  return libro.paginas
}

obligatorios();

function obligatorios(biblioteca) { //HECHO
  return _.filter(biblioteca, esobligatorio);
}

function esobligatorio(libro) {
  return libro.saga === "Eragon" || libro.autor === "Stephen King" || libro.nombre === "Fundación";
}

bibliotecafantasiosa();

function bibliotecafantasiosa(biblioteca) { //HECHO
  return _.some(biblioteca, esautorfantasioso);
}

function esautorfantasioso(libro) {
  return libro.autor === "Chistopher Paolini" || libro.autor === "Neil Gaiman";
}

/*titulosinvocales() //HECHO
function titulosinvocales() {
  return _.replace(concatenarTitulo(biblioteca), /[aáAÁeéEÉiíIÍoOóÓuúUÚ ]/g, '');
}

function concatenarTitulo(libros) {
  let alltitles = libros.map(function (o) {
    return o.nombre;
  }).join("");
  return alltitles;
}*/

ligera(); //HECHO
function ligera(biblioteca) {
  return _.every(biblioteca, esligera);
}

function esligera(libro) {
  return libro.paginas < 40;
}

/*checkgenero(libro); //HECHO

function checkgenero(libro) {
  if (libro.autor === "Stephen King") {
    return "Terror";
  }
  if (libro.nacautor === "Japonés") {
    return genero = "Manga";
  }
  if (libro.paginas < 40) {
    return "Comic";
  }
  if (libro.autor !== "Stephen King" || libro.nacautor !== "Japonés" || libro.paginas > 40) {
    return "No calificado";

  }
}*/

module.exports = {
  promhojas,
  obligatorios,
  bibliotecafantasiosa,
  //titulosinvocales,
  ligera,
  //checkgenero
};