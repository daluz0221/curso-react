import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";



describe('Pruebas en el componente CounterApp', () => { 

    const value = 100;

    test('Debe hacer match con el snapshot', () => { 

        const {container} = render( <CounterApp value={ value } /> );
        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar el valor inicial de 100', () => { 

        render( <CounterApp value={ value } /> );
        expect( screen.getByText( value ).innerHTML ).toContain( value.toString() );

    });

    test('Debe de incrementar con el botón más 1', () => { 


        render( <CounterApp value={ value } /> );
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('101') ).toBeTruthy();

    });

    test('Debe de decrementar con el botón menos 1', () => { 


        render( <CounterApp value={ value } /> );
        fireEvent.click( screen.getByText('-1') )
        expect( screen.getByText('99') ).toBeTruthy();

    });

    test('Debe de funcionar el botón de reset', () => { 


        render( <CounterApp value={ value } /> );
        fireEvent.click( screen.getByRole('button', { name: 'btn-suma' }) )
        fireEvent.click( screen.getByRole('button', { name: 'btn-suma' }) )
        fireEvent.click( screen.getByRole('button', { name: 'btn-suma' }) )
        // fireEvent.click( screen.getByText('Reset') )
        
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) )


        expect( screen.getByText('100') ).toBeTruthy();

    });


});