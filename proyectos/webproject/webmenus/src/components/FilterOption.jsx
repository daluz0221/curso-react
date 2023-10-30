import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

export const FilterOption = ({category}) => {
    const { onFilter} = useContext(MenuContext)

    const onSearchByCategory = () => {
      onFilter(category)
    }

  return (
    <>
    <button onClick={onSearchByCategory} type="checkbox" className="btn-check" autoComplete="off" />
    <label className="btn btn-outline-primary" onClick={onSearchByCategory} >{category}</label>
    </>
  )
}
