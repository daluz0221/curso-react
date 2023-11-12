import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";


describe('Pruebas en authSlice', () => { 


    test('debe de regresar el estado inicial y debe llamarse "auth"', () => { 

        const state = authSlice.reducer( initialState, {} );

        expect( authSlice.name ).toBe('auth') ;
        expect( state ).toEqual( initialState );

    });

    test('Debe de realizar la autenticación', () => { 

        

        const state = authSlice.reducer( initialState, login(demoUser) );

        expect( state ).toEqual({
            status:'authenticated', // checking  authenticated no-authenticated 
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        })

    });

    test('Debe realizar el logout', () => { 

        const state = authSlice.reducer( authenticatedState, logout() );
        expect( state ).toEqual({
            status:'no-authenticated', 
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        });

    });

    test('Debe realizar el logout y mostrar un mensaje de error', () => { 

        const errorMessage = 'Mensaje de error';

        const state = authSlice.reducer( authenticatedState, logout({errorMessage}) );
        expect( state ).toEqual({
            status:'no-authenticated', 
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage
        });
    });

    test('debe de cambiar el estado a checking', () => { 

        const state = authSlice.reducer( authenticatedState, checkingCredentials() );
        expect( state.status ).toBe('checking');

    });

});