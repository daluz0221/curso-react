import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en FirstApp', () => {  

    test('Debe de hacer match con el snapshot', () => { 

        const title = 'Hola soy pipe'
        const {container} = render(  <FirstApp title={title} /> );

        // expect( container ).toMatchSnapshot();


    });


    test('Debe mostrar el title en un h1', () => { 

        const title = 'Hola soy pipe'
        const { container, getByText, getByTestId } = render(  <FirstApp title={title} /> );

        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toBe( title )
        expect( getByTestId('test-title').innerHTML ).toBe(title);


    });


    test('Debe de mostrar el subtitle enviado por props', () => { 
        const title = 'Hola soy pipe'
        const subtitle = 'Hola soy un subtitle'
        const { getByText } = render(  <FirstApp title={title} subtitle={subtitle} /> );

        expect( getByText(subtitle) ).toBeTruthy()


    });

});