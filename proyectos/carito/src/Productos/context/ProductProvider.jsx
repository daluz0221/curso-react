import { useReducer } from "react"
import { ProductContext } from "./ProductContext"
import { productReducer } from "./productReducer"
import { productos } from "../data/productos";
import { types } from "../types/types";
import { getProductByFilter } from "../helpers/getProductByFilter";
import { getProductsByName } from "../helpers/getProductsByName";



export const ProductProvider = ({children}) => {

    
    const [ state, dispatch ] = useReducer(productReducer, productos);
    
    const onFilter = (filtro, tipo) => {
      const action ={
        type: types.marca,
        payload: getProductByFilter(filtro, tipo)
      }
      dispatch(action)
    }

    const onProductSearch = (name) => {
      const action = {
        type: types.busqueda,
        payload: getProductsByName(name)
      }
      dispatch( action )
    }




  return (
    <ProductContext.Provider value={{state, onFilter, onProductSearch}}>
        {children}
    </ProductContext.Provider>
  )
}
