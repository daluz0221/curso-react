import { productos } from "../../Productos/data/productos"




export const getMinMaxPrices = () => {

    const newList = productos.map(prod => prod.price - (prod.price * prod.discount))
    const min = Math.min(...newList)
    const max = Math.max(...newList)


    return {
        min,
        max
    }

}
