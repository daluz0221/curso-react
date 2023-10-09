import { useReducer } from "react";
import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";


describe('Pruebas en el authReducer', () => { 

    const initialState = {}
    const user = {
        id: 2102,
        name: 'Luis Felipe'
    }

    test('Debe de retornar el estado por defecto', () => { 

       const newState = authReducer(initialState, {});
       expect( newState ).toBe( initialState )

    });


    test('Debe de llamar el login autenticar y establer user', () => { 

        const action = {
            type: types.login,
            payload: user
        }


        const newState = authReducer({logged:false}, action);
        expect( newState ).toEqual( {
            logged: true,
            user: action.payload
        } )

    });


    test('Debe de llamar el logout y poner el logged en false', () => { 

        const state = {
            logged: true,
            user: {id: 123, name: 'juan'}
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action);
       expect( newState ).toEqual({logged:false})
    });


});