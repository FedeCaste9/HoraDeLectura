const _ = require("lodash");


function promhojas(biblioteca) { //HECHO
 return promediohojas = _.sumBy(biblioteca, sumarPaginas) / biblioteca.length;
  //return promediohojas;
}

function sumarPaginas(libro) {
  return libro.paginas
}
//-------------------------------------------------------------------------------------------------------

function obligatorios(biblioteca) { //HECHO
  return _.filter(biblioteca, esobligatorio);
}

function esobligatorio(libro) {
  return libro.saga === "Eragon" || libro.autor === "Stephen King" || libro.nombre === "Fundación";
}
//-------------------------------------------------------------------------------------------------------

function bibliotecafantasiosa(biblioteca) { //HECHO
  return _.some(biblioteca, esautorfantasioso);
}

function esautorfantasioso(libro) {
  return libro.autor === "Chistopher Paolini" || libro.autor === "Neil Gaiman";
}
//-------------------------------------------------------------------------------------------------------

function titulosinvocales(biblioteca) { //HECHO
  return _.replace(concatenarTitulo(biblioteca), /[aáAÁeéEÉiíIÍoOóÓuúUÚ ]/g, '');
}

function concatenarTitulo(libro) {
  let alltitles = libro.map(function (o) {
    return o.nombre;
  }).join("");
  return alltitles;
}
//-------------------------------------------------------------------------------------------------------

function ligera(biblioteca) { //HECHO
  return _.every(biblioteca, esligera);
}

function esligera(libro) {
  return libro.paginas < 40;
}
//-------------------------------------------------------------------------------------------------------

function checkgenero(biblioteca) { //HECHO
  let generos = biblioteca.map(function (o) {
    if (o.autor === "Stephen King") {
      return "Terror";
    }
    if (o.nacautor === "Japonés") {
      return "Manga";
    }
    if (o.paginas < 40) {
      return "Comic";
    }
    if (o.autor !== "Stephen King" || o.nacautor !== "Japonés" || o.paginas > 40) {
      return "No calificado";
    }
  })
  return generos;
}
//-------------------------------------------------------------------------------------------------------
module.exports = {
  promhojas,
  obligatorios,
  bibliotecafantasiosa,
  titulosinvocales,
  ligera,
  checkgenero
};