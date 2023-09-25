import { getHeroeByIdAsync } from "../../src/base-pruebas/base-pruebas/09-promesas";



describe('Pruebas en 09-promesas', () => { 

    test('getHeroByIdAsync debe retornar un héroe', (done) => {  

        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {

                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                }) 
                done()
            })
    });

    test('getHeroByIdAsync debe un error si un héroe no existe', (done) => {  

        const id = 100;
        getHeroeByIdAsync( id )
            .catch( err => {
                expect( err ).toBe(`No se pudo encontrar el héroe ${id}`)
                done()
            })
    });

});