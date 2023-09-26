import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState(value)

    const handlAdd = () => {
        // console.log(event);
        // setCounter( counter + 1 );
        setCounter( (e)=> e + 1)
    }
    const handlSubstrac = () => {    
        if (counter == 0) return;
        setCounter( (e)=> e - 1)
    }

    const handlReset = () => {
        setCounter( value)
    }

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button
            onClick={  handlSubstrac }
            aria-label='btn-resta'
        >
            -1
        </button>

        <button
            onClick={  handlReset }
            aria-label='btn-reset'
        >
            Reset
        </button>

        <button
            onClick={  handlAdd }
            aria-label='btn-suma'
        >
            +1
        </button>
    </>
  )
}


CounterApp.propTypes= {
    value: PropTypes.number.isRequired
}