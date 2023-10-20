import React from 'react'
import { Ordenamiento } from './components/Ordenamiento'
import { Navbar } from './components/Navbar'
import { Catalogo } from './components/Catalogo'

export const General = () => {
  return (
    <>
        <h1>Catalogo productos de vestir</h1>


        <div className="container">

            <div className="row">
                {/* Componente para ordenar los productos que ya están en pantalla */}
                <Ordenamiento />
            </div>

            <div className="row">

                <div className="col-3">
                    {/* Navbar */}
                   <Navbar />
                </div>

                <div className="col-9">
                    {/* Donde se van a ver los productos */}
                   <Catalogo />
                </div>



            </div>







        </div>

    </>
  )
}
