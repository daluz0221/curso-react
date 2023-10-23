import { ProductProvider } from "./Productos/context/ProductProvider"
import { General } from "./ui/General"


export const App = () => {
  return (
    <ProductProvider>
      <General />
    </ProductProvider>
  )
}

