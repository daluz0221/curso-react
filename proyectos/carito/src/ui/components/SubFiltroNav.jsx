
import { Rating } from '@mui/material';

export const SubFiltroNav = ({value, filtro, onFilter}) => {

    
      const handleSearch = () => {
        onFilter(filtro, value)
      }

    if (filtro === "rating"){
      
      return (
        <span onClick={handleSearch}>

          <Rating name="read-only"  value={value} precision={1} readOnly />
        </span>
      )
    }

      return (
        <span onClick={handleSearch} className='subCategory-filter'>
          {
            value
          }
        </span>
      )
  }

