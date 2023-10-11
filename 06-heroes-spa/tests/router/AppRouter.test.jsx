import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";


describe('Pruebas en AppRouter', () => { 



    test('Debe de mostrar el login si no está auth', () => { 

        const contextValue = {
            state:{
                logged: false
            }
        }

        render(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={['/marvel']} >
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // screen.debug()
        expect( screen.getAllByText('Login').length ).toBe(2);

    });

    test('Debe de mostrar el componente de marvel si está auth', () => { 

        const contextValue = {
            state: {
                logged: true,
                user: {
                    id: 123,
                    name: 'verónica'
                }
            }
        }

        render(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={['/marvel']} >
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // screen.debug()
        expect( screen.getByText('Thor Odinson') ).toBeTruthy();

    });

});