import { useReducer } from "react"
import { MenuContext } from "./MenuContext"
import { menuReducer } from "./menuReducer"
import { Platos } from "../data/platos"
import { getDishByCategory } from "../helpers/getDishByCategory"
import { getAllDishes } from "../helpers/getAllDishes"



export const MenuProvider = ({children}) => {


    const [state, dispatch] = useReducer(menuReducer, Platos);

    const onFilter = (categoria) => {
        console.log(categoria == "Todos");

        if (categoria == "Todos") {
            const action ={
                type: "All",
                payload: getAllDishes()
              }
              dispatch(action)
        }
        else {
            const action ={
                type: "filtrar",
                payload: getDishByCategory(categoria)
              }
              dispatch(action)
        }

        
      }


  return (
    <MenuContext.Provider value={{state, onFilter}}>
        {children}
    </MenuContext.Provider>
  )
}
