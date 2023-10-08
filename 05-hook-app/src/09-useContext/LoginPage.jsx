import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {


    const algo = useContext( UserContext );
    console.log(algo.user);

  return (
    <>
        <h1>LoginPage</h1>
        <hr />

        <pre aria-label='pre'>
            {JSON.stringify(algo.user, null, 3)}
        </pre>

        <button className='btn btn-primary' onClick={()=>algo.setUser({id: 123, name:'Luis Felipe', email: 'daluz0221@gmail.com'})}>
            Set user
        </button>
    </>
  )
}
