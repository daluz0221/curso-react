import { useContext, useEffect } from "react"
import { getDishByCategory } from "../helpers/getDishByCategory"
import { Platos } from "../data/platos"
import { getAllDishes } from "../helpers/getAllDishes"
import { MenuItem } from "./MenuItem"
import { MenuContext } from "../context/MenuContext"

export const Menu = () => {

    const platosMenu = getAllDishes();
    const {state} = useContext(MenuContext)

    
    
  return (
    <div className="row mt-4">

        <h4 className="text-center">Nuestra selecta oferta</h4>
        
        {
            state.map( plato =>(
                <MenuItem key={plato.id} {...plato} />
            ))
        }
    </div>
  )
}
