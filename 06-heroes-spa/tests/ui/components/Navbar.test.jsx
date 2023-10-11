import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../src/ui/components/Navbar";


const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}))


describe('Pruebas en el Navbar', () => { 

    const contextValue = {
        state:{
            logged: true,
            user: {
                name: 'Luis Felipe'
            }
        },
        logout: jest.fn()
    }

    beforeEach(()=> jest.clearAllMocks())



    test('Debe de mostrar el nombre del usuario', () => { 

        render(
            <AuthContext.Provider  value={contextValue}>
                <MemoryRouter>
                <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        // screen.debug()
        expect( screen.getByText('Luis Felipe') ).toBeTruthy();
    });


    test('Debe de llamr el logout y navigate cuando se hace click en el botón', () => { 

        render(
            <AuthContext.Provider  value={contextValue}>
                <MemoryRouter>
                <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true})
        

    });

});