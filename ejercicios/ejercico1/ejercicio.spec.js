require("should");
const promhojas = require("./ejercicio");

describe("Ejercicio", () => {

   it("El promedio de las hojas deberías ser 475.75", () => {
      promhojas().should.be.eql(475.75);
   });

})