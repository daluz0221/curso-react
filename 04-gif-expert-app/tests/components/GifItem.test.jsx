import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";


describe('Pruebas en el componente GifItem', () => { 

    const title = "Soy un titulo de img"
    const url = "https://www.google.com/"

    test('El componente debe hacer match con el snapshot', () => { 


        const { container } = render( <GifItem title={title} url={url} /> )
        expect( container ).toMatchSnapshot()
    });


    test('Debe de mostrar la imagen con la url y el alt indicado', () => { 

        render( <GifItem title={title} url={url} /> )
        // screen.debug()
        // expect( screen.getByRole('img').src ).toBe(url);
        // expect( screen.getByRole('img').alt ).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    });

    test('debe de mostrar el titulo en el componente', () => { 

        render( <GifItem title={title} url={url} /> );
        expect( screen.getByText( title ) ).toBeTruthy();

    });

});