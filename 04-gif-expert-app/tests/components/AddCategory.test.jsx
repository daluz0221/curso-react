import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";



describe('Pruebas en AddCategory', () => { 


    test('debe de cambiar el valor de la caja de texto', () => { 

        render( <AddCategory onNewCategory={()=>{}} /> );
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, {target: { value: 'Naruto' }} ) // el segundo argumento es el evento que se le pasa a la función
        expect( input.value ).toBe('Naruto');

        // screen.debug()
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'Naruto';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={onNewCategory} /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: { value: inputValue }} );
        fireEvent.submit( form );
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);

    });

    test('No debe de llamar onNewCategory si el input está vacío', () => { 

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={onNewCategory} /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: { value: "" }} );
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);

    });

});