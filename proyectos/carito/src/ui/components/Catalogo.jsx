import React from 'react'
import { productos } from '../../Productos/data/productos'
import { Product } from '../../Productos/components/Product'

export const Catalogo = () => {


    productos


  return (
   <>
   
   

        <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                productos.map((producto)=>(
                    <Product producto={producto} key={producto.id} />
                ))
            }
            
        </div>
   
   </>


  )
}
