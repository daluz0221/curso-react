import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en el componente GifGrid', () => { 

    const category = "Naruto"

    test('debe de mostrar el loaading', () => { 

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        })

        render( <GifGrid category={category} /> )
        // screen.debug()
        expect( screen.getByText('Cargando...') )
        expect( screen.getByText(category) )
    });

    test('debe de mostrar items cuando se cargan las imgs del custom_hook ', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Naruto',
                url: 'https://www.localhost/naruto.png'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://www.localhost/goku.png'
            }
        ]

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading: false
        })

        render( <GifGrid category={category} /> )
        // screen.debug()
        expect( screen.getAllByRole('img').length ).toBe(2);


    });


});