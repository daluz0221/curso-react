import { types } from "../types/types";



export const productReducer = ( state=[], action ) => {
  
    

    switch (action.type) {
        case types.marca:
            return action.payload
    
        case types.busqueda:
            return action.payload

        default:
            return state
    }


}