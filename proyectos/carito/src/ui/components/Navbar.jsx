import React from 'react'
import { filtros } from '../data/filtros'
import { FiltroNav } from './FiltroNav'

export const Navbar = () => {


  
  return (
    <>
      <div className="container">
      <h2>Filtros</h2>
        {
          filtros.map( (filtro) => (
              <FiltroNav filtro={filtro} key={filtro.id} />
              ))
        }     
      </div>
    </>
  )
}
