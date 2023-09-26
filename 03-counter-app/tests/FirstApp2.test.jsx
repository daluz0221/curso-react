import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en FirstApp', () => {  

    const title = 'Hola, soy pipe'
    const subtitle = 'soy un subtitulo'

    test('Debe hacer match con el snapshot', () => { 

        const { container } = render( <FirstApp title={ title } /> )
        expect( container ).toMatchSnapshot();

    });

    test('Debe de mostrar el mensaje "Hola, soy pipe"', () => { 

        render( <FirstApp title={ title } /> );
        expect( screen.getByText(title) ).toBeTruthy();

    });

    test('Debe mostrar el titulo en un h1', () => { 

        render( <FirstApp title={ title } /> );
        expect( screen.getByRole('heading', { leve: 1 }).innerHTML ).toContain( title );

    });

    test('Debe mostrar el subtitulo enviado por props', () => { 


        render( <FirstApp title={ title } subtitle={subtitle} /> )
        expect( screen.getAllByText(subtitle).length ).toBe(1);
    });

});