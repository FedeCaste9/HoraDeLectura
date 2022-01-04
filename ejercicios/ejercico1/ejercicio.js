const _ = require("lodash");

let biblioteca = [{
  nombre: "El visitante",
  autor: "Stephen King",
  nacautor: "Estadounidense",
  paginas: 592
}, {
  nombre: "Fundación",
  autor: "Isaac Asimov",
  nacautor: "	Estadounidense",
  paginas: 230
}, {
  nombre: "Shingeki no Kyojin, Capitulos 1, 3, 127",
  autor: "Hajime Isayama",
  nacautor: "Japonés",
  paginas: 120
}, {
  nombre: "Sandman, Capitulos 5, 10, 12",
  autor: "Neil Gaiman",
  nacautor: "Inglés",
  paginas: 105
}, {
  nombre: "Eragon",
  autor: "Chistopher Paolini",
  nacautor: "Estadounidense",
  paginas: 544,
  saga: "Eragon"
}, {
  nombre: "Eldest",
  autor: "Chistopher Paolini",
  nacautor: "Estadounidense",
  paginas: 704,
  saga: "Eragon"
}, {
  nombre: "Brisignr",
  autor: "Chistopher Paolini",
  nacautor: "Estadounidense",
  paginas: 700,
  saga: "Eragon"
}, {
  nombre: "Legado",
  autor: "Chistopher Paolini",
  nacautor: "Estadounidense",
  paginas: 811,
  saga: "Eragon"
}]

promhojas(); //HECHO
function promhojas() {
  let promhojas = _.sumBy(biblioteca, sumarPaginas) / biblioteca.length
  return promhojas;
}

function sumarPaginas(libro) {
  return libro.paginas
}

obligatorios(); //HECHO 
function obligatorios() {
  return _.filter(biblioteca, esobligatorio);
}

function esobligatorio(libro) {
  return libro.saga === "Eragon" || libro.autor === "Stephen King" || libro.nombre === "Fundación";
}

bibliotecafantasiosa(); //HECHO
function bibliotecafantasiosa() {
  return "La biblioteca es fantasiosa: " + _.some(biblioteca, esautorfantasioso);
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
  return ("La biblioteca es ligera: " + _.every(biblioteca, esligera));
}

function esligera(libro) {
  return libro.paginas < 40;
}

checkgenero({
  //INGRESARO UN LiBRO EN ESTA FUNCIÓN
  nombre: "Legado",
  autor: "Chistopher Paolini",
  nacautor: "Estadounidense",
  paginas: 811,
  saga: "Eragon"
}); //HECHO


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
}