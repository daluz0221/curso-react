import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"



const heavyStuff = (iterations = 100) => {
    for (let i = 0; i < iterations; i++) {
        console.log('ahi vamos...');
        
    }


    return `${ iterations } num de vuelticas hechas`
}



export const MemorizeHook = () => {

    const { counter, incrementar } =  useCounter(1000);
    const [show, setShow] = useState(true)

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
        <h1>Counter: <small>{ counter }</small> </h1>
        <hr />

        <h4>
            {
                memorizedValue
            }
        </h4>

        <button
            className="btn btn-primary"
            onClick={()=> incrementar()}
        >
            +1
        </button>

        <button
            className="btn btn-outline-primary"
            onClick={()=> setShow(!show)}
        >
            show/hide { JSON.stringify( show ) }
        </button>


    </>
  )
}
