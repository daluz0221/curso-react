import { useForm } from "../hooks/useForm"



export const TodoAdd = ({addTodo}) => {
    
    const { onInputChange, onResetForm, desc } = useForm({
        id: 0,
        desc: '',
        done: false
    })


    const newTodo = {
        id: new Date().getTime(),
        desc,
        done: false
    }

    const onChangeForm = (e) => {
      e.preventDefault()
      if( desc.length <= 1 ) return;
      addTodo(newTodo)
      onResetForm()
    }

    



  return (
    <form
        onSubmit={onChangeForm}
    >
        <input 
            type="text" 
            placeholder="¿Qué hay que hacer?"    
            className="form-control"
            name="desc"
            onChange={onInputChange}
            value={desc}
        />

        <button
            type="submit"
            className="btn btn-outline-primary mt-1"
        >
            Agregar
        </button>
    </form>
  )
}
