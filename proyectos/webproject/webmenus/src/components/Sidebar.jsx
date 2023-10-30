
import { Categorias } from "../data/filtros"
import { FilterOption } from "./FilterOption"

export const Sidebar = () => {

    
  return (
    <div className="btn-group-vertical col-12">
        {
            Categorias.map( (category, index) =>(
               <FilterOption category={category} key={index} />
            ))
        }

    </div>
  )
}
