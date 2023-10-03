import { useRef } from "react"

export const FocusScreen = () => {

  const ref = useRef()

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            type="text"
            placeholder="Ingrese nombre"    
            className="form-control"
        />

        <button className="btn btn-primary mt-2">
          Set Focus
        </button>
    </>
  )
}
