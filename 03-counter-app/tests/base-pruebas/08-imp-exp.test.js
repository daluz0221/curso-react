import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/base-pruebas/08-imp-exp";



describe('Pruebas del 08-imp-exp', () => { 


    test('getHeroyById debe retornar un hero por id', () => { 

        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });

    test('getHeroyById debe retornar undefnid si no hay id', () => { 

        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar una arreglo filtrado', () => { 

        const owner = 'DC';
        const heros = getHeroesByOwner( owner );
        
        expect( heros ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        expect(heros.length).toBe( 3 )

        const owner2 = 'Marvel';
        const heros2 = getHeroesByOwner( owner2 );
        
        expect( heros2 ).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);

        expect(heros2.length).toBe( 2 )

    });

});