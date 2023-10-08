import { act, fireEvent, renderHook, screen } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";


describe('Pruebas en el useCounter', () => { 


    test('Debe de retornar los valores por defecto', () => { 


        const { result } = renderHook( ()=> useCounter() )
        // console.log(result);
        const { counter, decrementar, incrementar, reset } = result.current;

        expect( counter ).toBe( 10 );
        expect( decrementar ).toEqual( expect.any( Function ) )
        expect( incrementar ).toEqual( expect.any( Function ) )
        expect( reset ).toEqual( expect.any( Function ) )
    });

    test('Debe de generar el valor de 100', () => { 

        const { result } = renderHook( ()=> useCounter(100) )
        // console.log(result);
        const { counter } = result.current;
        
        expect( counter ).toBe( 100 );
    });

    test('Debe de incrementar el contador', () => { 

        const { result } = renderHook( ()=> useCounter(100) )
        const { counter, incrementar } = result.current;

        act(() => {
            incrementar();
            incrementar();
            incrementar(4);
          
        });

        expect( result.current.counter ).toBe(106)
    });

    test('Debe de decrementar el contador', () => { 

        const { result } = renderHook( ()=> useCounter(100) )
        const { counter, decrementar } = result.current;

        act(() => {
            decrementar();
            decrementar();
            decrementar(4);
          
        });

        expect( result.current.counter ).toBe(94)
    });

    test('Debe de resetear el contador', () => { 

        const { result } = renderHook( ()=> useCounter(100) )
        const { counter, decrementar, reset } = result.current;

        act(() => {
            decrementar();
            decrementar();
            decrementar(4);
            reset();
          
        });

        expect( result.current.counter ).toBe(100)
    });

});