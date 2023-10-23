import { filtros } from "../../ui/data/filtros";
import { productos } from "../data/productos";


export const getProductByFilter = ( filtro, type ) => {

    const filterNames = filtros.map( filtro => filtro.name)
  
    if(!filterNames.includes(filtro)){
        throw new Error(`${filtro} no es un filtro válidooo`)
    }

    switch (filtro) {
        case "marca":
            return productos.filter( product => product.marca === type )
            
        case "has_discount":
            if (type === 'Sí') {
                type = true
            }else {
                type = false
            }
            return productos.filter( product => product.has_discount === type )
        
        case "price":
            console.log(type);
            
            return productos.filter( product => {
              
                    return  (product.price - (product.price * product.discount)) >= type[0] && (product.price - (product.price * product.discount)) <= type[1]
              
                
            } )

        case "rating":
            return productos.filter( product => product.rating === type )
        
        case "category":
            return productos.filter( product => product.category === type )

        default:
            break;
    }
    

}
