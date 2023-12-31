import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const HomePage = () => {


    const { user } = useContext( UserContext );
  return (
    <>
        <h1>HomePage <small>{user?.name}</small> </h1>
        <hr />

        <pre aria-label='pre-label' >
            {JSON.stringify(user, null, 3)}
        </pre>

        <button className='btn btn-primary'>
            Set user
        </button>
    </>
  )
}
