import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const init = () => {
  let lc = null;
  if (typeof window !== 'undefined'){

    lc =  localStorage.getItem('todos')
  }

  return JSON.parse(lc) || []
}

export const useTodo =() => {
  


    const [ todos, dispatch ] = useReducer(todoReducer, [], init)

    useEffect(() => {
      localStorage.setItem( 'todos', JSON.stringify( todos ))
    }, [todos])

    const todosCount = todos.length;
    const pendingTodos = todos.filter( todo => !todo.done ).length

    const handleNewTodo = (todo) => {
      const action = {
        type: '[TODO] Add Todo',
        payload: todo
      }

      dispatch( action )
    }

    const handleDeleteTodo = (id) => {
      dispatch({
        type: '[TODO] Delete Todo',
        payload: id
      })
    }

    const handleToggleTodo = (id) => {
     
      dispatch({
        type: '[TODO] Toggle Todo',
        payload: id
      })
    }


    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodos
    }


}