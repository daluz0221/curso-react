import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";


describe('Pruebas en PrivateRoute', () => { 


    test('Si estoy auth debe de mostrar el children', () => { 

        Storage.prototype.setItem = jest.fn();

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
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute >
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // screen.debug();
        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/search?q=batman");
    });


});