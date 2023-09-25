import { getUser, getUsuarioActivo } from "../../src/base-pruebas/base-pruebas/05-funciones"


describe('Pruebas en 05-funciones', () => { 

    test('getUser debe retornar un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        expect( user ).toEqual( testUser );

     });

     test('getUsuarioActivo debe retornoar un name', () => { 

        const name = 'Luis Felipe';
        const userObject = {
            uid: 'ABC567',
            username: name
        }

        const user = getUsuarioActivo(name);

        expect( userObject ).toEqual( user );
    });

 })