import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    const onAddCategory = (event) => {
        if (categories.includes(event)) {
            return;
        }

      setCategories( [event, ...categories] )
    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            // onAddCategory={setCategories} 
            onNewCategory={ onAddCategory }    
        />

        {/* Listado de gifs */}
        
        {
            categories.map( category => (
                    <GifGrid category={category} key={category}/>
                )
                )
        }
          
    </>
  )
}
