import React from 'react'
import { Navbar } from './components/Navbar'
import { Catalogo } from './components/Catalogo'
import { SearchProduct } from '../Productos/components/SearchProduct'

export const General = () => {
  return (
    <>


        <div className="container">
            <div className="row text-center mb-4 mt-4">

                <h1>Catalogo productos de vestir</h1>
            </div>

           <div className="row">
            <SearchProduct />
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
