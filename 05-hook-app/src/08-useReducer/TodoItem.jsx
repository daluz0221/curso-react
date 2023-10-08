

export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between" >
        <span 
          onClick={ () => onToggleTodo( todo.id )} aria-label="span-item"
          className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}>
            { todo.desc }
          </span>
        <button aria-label="button-item" className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)} >Borrar</button>
    </li>
  )
}
