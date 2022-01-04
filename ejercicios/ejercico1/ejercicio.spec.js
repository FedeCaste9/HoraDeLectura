require("should");
const {
   promhojas,
   obligatorios,
   bibliotecafantasiosa,
   titulosinvocales,
   ligera
} = require("./ejercicio");

describe("Ejercicio", () => {
   describe("promhojas()", () => {
      it("El promedio de las hojas deberías ser 475.75.", () => {
         promhojas().should.be.eql(475.75);
      });
   });
   describe("obligatorios()", () => {
      it("Los libros obligatorios son cuando, pertenecen a la saga de 'Eragon', su autor es 'Stephen King' o es el ejemplar de 'Fundación'.", () => {
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
      it("La biblioteca es fantasiosa si contiene libros de 'Chistopher Paolini' o de 'Neil Gaiman'.", () => {
         bibliotecafantasiosa().should.be.true();
      });
   });
   describe("titulosinvocales()", () => {
      it("Debería retornar los títulos de los libros sin las vocales ni espacios'.", () => {
         titulosinvocales().should.be.eql('lvstntFndcnShngknKyjn,Cptls1,3,127Sndmn,Cptls5,10,12rgnldstBrsgnrLgd');
      });
   });
   describe("ligera()", () => {
      it("La biblioteca es ligera si todas sus lecturas contienen 40 páginas o menos.", () => {
         ligera().should.be.false();
      });
   });
})