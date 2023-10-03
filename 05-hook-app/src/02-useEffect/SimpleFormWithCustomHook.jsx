import { useEffect } from "react"
import { useForm } from "../hooks/useForm"



export const SimpleFormWithCustomHook = () => {

 

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: 'daluz',
        email: 'luis@gmail.com',
        password: ''
    })

    // const { username, email, password } = formState;



    useEffect( () => {
      // console.log('useEffect se llamó');
    }, [] )
    
    useEffect( () => {
      // console.log('formState se llamó');
    }, [formState] )

    useEffect( () => {
      // console.log('email se llamó');
    }, [email] )




  return (
   <>
        <h1>Formulario con custom hook</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"    
            value={username}
            onChange={onInputChange}
        />
        <input 
            type="email"
            className="form-control mt-3"
            placeholder="luis@gmail.com"
            name="email"   
            value={email} 
            onChange={onInputChange}
        />
        <input 
            type="password"
            className="form-control mt-3"
            placeholder="contraseña"
            name="password"   
            value={password} 
            onChange={onInputChange}
        />

    <button onClick={onResetForm} className="btn btn-primary mt-3">
      Borrar
    </button>
        

   </>
  )
}
