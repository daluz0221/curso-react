import { productos } from "../data/productos";



export const getProductsByName = (name = '') => {
  

    name = name.toLocaleLowerCase().trim();

    if (name.length === 0) {
        return []
    }

    return productos.filter( product => product.title.toLocaleLowerCase().includes(name))



}
