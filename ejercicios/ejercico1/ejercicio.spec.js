require("should");
const {
   promhojas,
   obligatorios,
   bibliotecafantasiosa
} = require("./ejercicio");

describe("Ejercicio", () => {
   describe("promhojas()", () => {
      it("El promedio de las hojas deberías ser 475.75", () => {
         promhojas().should.be.eql(475.75);
      });
   });
   describe("obligatorios()", () => {
      it("Los libros obligatorios son cuando, pertenecen a la saga de 'Eragon', su autor es 'Stephen King' o es el ejemplar de 'Fundación'", () => {
         obligatorios().should.be.eql([{
               nombre: 'El visitante',
               autor: 'Stephen King',
               nacautor: 'Estadounidense',
               paginas: 592
            },
            {
               nombre: 'Fundación',
               autor: 'Isaac Asimov',
               nacautor: '	Estadounidense',
               paginas: 230
            },
            {
               nombre: 'Eragon',
               autor: 'Chistopher Paolini',
               nacautor: 'Estadounidense',
               paginas: 544,
               saga: 'Eragon'
            },
            {
               nombre: 'Eldest',
               autor: 'Chistopher Paolini',
               nacautor: 'Estadounidense',
               paginas: 704,
               saga: 'Eragon'
            },
            {
               nombre: 'Brisignr',
               autor: 'Chistopher Paolini',
               nacautor: 'Estadounidense',
               paginas: 700,
               saga: 'Eragon'
            },
            {
               nombre: 'Legado',
               autor: 'Chistopher Paolini',
               nacautor: 'Estadounidense',
               paginas: 811,
               saga: 'Eragon'
            }
         ]);
      });
   });
   describe("bibliotecafantasiosa()", () => {
      it("La biblioteca es fantasiosa si contiene libros de 'Chistopher Paolini' o de 'Neil Gaiman'", () => {
         bibliotecafantasiosa().should.be.true();
      });
   });
})