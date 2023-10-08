import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";


describe('Pruebas en HomePage', () => { 

    const user = {
        id:1,
        name: 'Luis Felipe'
    }    


    test('Debe de mostrar el componente sin el usuario', () => { 

            render( 
            <UserContext.Provider value={{user: null}}>

                <HomePage /> 
            </UserContext.Provider>    
                
            )
            // screen.debug()

            const preElement = screen.getByLabelText('pre-label');
            expect( preElement.innerHTML ).toBe('null');
    });

    test('Debe de mostrar el componente con el usuario', () => { 

            render( 
            <UserContext.Provider value={{user}}>

                <HomePage /> 
            </UserContext.Provider>    
                
            )
            // screen.debug()

            const preElement = screen.getByLabelText('pre-label');
            expect( preElement.innerHTML ).toContain(user.id.toString());
            expect( preElement.innerHTML ).toContain(user.name);
    });

});