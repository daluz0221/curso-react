import { productos } from "../../Productos/data/productos"





export const getAllPrices = () => {
  
    const newList = productos.map(prod => prod.price)
    newList.sort((a,b)=> a - b)
    const finalList = [...new Set(newList)]
    return finalList

}
