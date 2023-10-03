import React, { memo } from 'react'

export const ShowIncrement = memo(({increment}) => {


    console.log('me volvi a generar oh no');
  return (
    <button
        className='btn btn-primary'
        onClick={() => {
            increment(8);
        }}
    >
        Incrementar
    </button>
  )
})
