import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";


describe('Pruebas en TodoItem', () => { 

    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() )

    test('Debe de mostrar el todo pendiente de completas', () => { 

        render( <TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} /> );

        const liElement = screen.getByRole('listitem');

        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText("span-item");
        expect( spanElement.className ).toContain("align-self-center")


    });

    test('Debe de mostrar el todo completado', () => { 

        todo.done = true

        render( <TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} /> );

        const spanElement = screen.getByLabelText("span-item");
        expect( spanElement.className ).toContain("text-decoration-line-through")


    });

    test('Debe de mostrar el Toggletodo cuando se hace click', () => { 

        

        render( <TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} /> );

        const spanElement = screen.getByLabelText("span-item");
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );


    });

    test('Button debe de llamar el deleteTodo', () => { 

        

        render( <TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} /> );

        const buttonElement = screen.getByLabelText("button-item");
        fireEvent.click( buttonElement );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );


    });



});