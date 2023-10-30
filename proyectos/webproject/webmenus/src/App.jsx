import React from 'react'
import { Menu } from './components/Menu'
import { Sidebar } from './components/Sidebar'

export const App = () => {
  return (
    <div className="container">

      <div className="row text-center  mt-5 mb-3">
            <h1>{"Restaurante Típico Paisa".toUpperCase()}</h1>
      </div>

      <div className="row">
        
        <div className="col-4">
          <Sidebar />
          
        </div>

        <div className="col-8">
          <Menu />
        </div>
      </div>

    </div>
  )
}

