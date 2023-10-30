import { Categorias } from "../data/filtros";
import { Platos } from "../data/platos"


export const getDishByCategory = ( categoria ) => {

    
    if (!Categorias.includes(categoria)) {
        throw new Error(`${ categoria } no es una categoría válida`)
    }

  return Platos.filter( plato => (
    plato.category == categoria
  ))

}

