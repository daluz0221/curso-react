import { types } from "../../../src/auth/types/types";


describe('Pruebas en los types', () => { 


    test('Debe de regresar estos types', () => { 

        expect( types ).toEqual({
            login: '[auth] Login',
            logout: '[auth] Logout'
        })

    });


});