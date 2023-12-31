import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {


    const { counter, incrementar, decrementar, reset } = useCounter(15)


  return (
    <>
        <h1>Counter With CustomHook: { counter }</h1>
        <hr />
        <button className="btn btn-primary" onClick={incrementar}>+1</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
        <button className="btn btn-primary" onClick={decrementar}>-1</button>
    </>
  )
}
