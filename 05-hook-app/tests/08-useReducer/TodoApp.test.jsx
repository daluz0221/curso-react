import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock('../../src/hooks/useTodo');

describe('Pruebas en TodoApp', () => { 

    useTodo.mockReturnValue({
        todos: [
            {id: 1, desc: 'todo 1', done: false},
            {id: 2, desc: 'todo 2', done: true},
        ],
        handleDeleteTodo: jest.fn(),
        handleNewTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        todosCount: 2,
        pendingTodos: 1
    })



    test('Debe de mostrar el componente correctamente', () => { 

        render( <TodoApp /> )
        // screen.debug()
        expect( screen.getByText('todo 1') ).toBeTruthy(); 
        expect( screen.getByText('todo 2') ).toBeTruthy();

    });

});