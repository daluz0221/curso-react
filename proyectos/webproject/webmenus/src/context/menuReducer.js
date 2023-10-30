

export const menuReducer = ( (state, action) => {


    switch (action.type) {
        case "filtrar":
            return action.payload
        
        case "All":
            return action.payload
    
        default:
            return state;
    }
  
})