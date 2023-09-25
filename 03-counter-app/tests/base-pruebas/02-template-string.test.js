import { getSaludo } from "../../src/base-pruebas/base-pruebas/02-template-string";



describe('Pruebas en 02-templates-string', () => { 

    test("getSaludo debe retornar el saludo mas el nombre",  ()=>{

        const name = "Luis";
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${name}`)


    })

 })