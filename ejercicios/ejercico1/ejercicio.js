const _ = require("lodash");

//promhojas(); //HECHO
function promhojas(biblioteca) {
  let promediohojas = _.sumBy(biblioteca, sumarPaginas) / biblioteca.length;
  return promediohojas;

}

function sumarPaginas(libro) {
  return libro.paginas
}

obligatorios(); //HECHO 
function obligatorios(biblioteca) {
  return _.filter(biblioteca, esobligatorio);
}

function esobligatorio(libro) {
  return libro.saga === "Eragon" || libro.autor === "Stephen King" || libro.nombre === "Fundación";
}

/*bibliotecafantasiosa(); //HECHO
function bibliotecafantasiosa() {
  return _.some(biblioteca, esautorfantasioso);
}

function esautorfantasioso(libro) {
  return libro.autor === "Chistopher Paolini" || libro.autor === "Neil Gaiman";
}

titulosinvocales() //HECHO
function titulosinvocales() {
  return _.replace(concatenarTitulo(biblioteca), /[aáAÁeéEÉiíIÍoOóÓuúUÚ ]/g, '');
}

function concatenarTitulo(libro) {
  let alltitles = libro.map(function (o) {
    return o.nombre
  }).join("");
  return alltitles
}

ligera(); //HECHO
function ligera() {
  return _.every(biblioteca, esligera);
}

function esligera(libro) {
  return libro.paginas < 40;
}

//checkgenero(libro); //HECHO

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
  //bibliotecafantasiosa,
  //titulosinvocales,
  //ligera,
  //checkgenero
};
