import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchHero } from "../../../src/heroes/pages/SearchHero";



describe('Pruebas en SearchHero', () => { 


    test('Debe de mostrarse correctamente con los valores por defecto', () => { 

        const { container } = render(
            <MemoryRouter>
                <SearchHero />
            </MemoryRouter>
        )
        // screen.debug()
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar a Batman y el input con el valor del qqueryString', () => { 

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchHero />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman')

        const img = screen.getByRole('img');
        expect( img.src ).toContain('assets/heroes/dc-batman.jpg');

        // screen.debug()

    });

    test('Debe de mostrar un error si no se encuentra el hero', () => { 
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchHero />
            </MemoryRouter>
        )

        // screen.debug()
        expect('No hero with that').toBeTruthy()

    });

    test('debe de llamar el navigate a la pantalla nueva', () => { 

         

    });


});