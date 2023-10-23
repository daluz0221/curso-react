import React, { useContext } from 'react'
import { productos } from '../../Productos/data/productos'
import { Product } from '../../Productos/components/Product'
import { ProductContext } from '../../Productos/context/ProductContext'

export const Catalogo = () => {


    const { state } = useContext(ProductContext);
    console.log(state.length === 0);

  return (
   <>
   
   

        <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                state.length > 0 &&
                state.map((producto)=>(
                    <Product producto={producto} key={producto.id} />
                ))
                
            }
        </div>
        {
            state.length === 0 &&<div className="mt-5 alert alert-danger">No hay productos que mostrar que coincidan con la busqueda</div>
        }
            
   
   </>


  )
}
