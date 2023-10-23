import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";
import {ExpandMore} from '@mui/icons-material'
import { Box, Slider } from '@material-ui/core'
import { SubFiltroNav } from "./SubFiltroNav";
import { getAllPrices } from "../helpers/getAllPrices";
import { useContext, useEffect, useState } from "react";
import { getMinMaxPrices } from "../helpers/getMinMaxPrices";
import { ProductContext } from "../../Productos/context/ProductContext";

export const FiltroNav = ({filtro}) => {

  const { state, onFilter } = useContext(ProductContext);

  
  const { name, values = false } = filtro;
  
  const {min, max} = getMinMaxPrices();
  const valoresPrice = [min, max]
  const [value, setValue] = useState(valoresPrice)
  
    const handleChange = (event, newValue) => {
      console.log(newValue);
      setValue(newValue)
      setTimeout(() => {
        
        onFilter(name, value)
      }, 1000);
    }

   
    
  return (
    <>
        
        
        <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{name}</Typography>
        </AccordionSummary>
        
        {
          values ?
          values.map((value, index)=>(
            <AccordionDetails key={index}>
              
                <SubFiltroNav value={value} filtro={name} onFilter={onFilter} /> 
              
            </AccordionDetails>
          ))
          : <Box sx={{ width: 300 }}>
              <Slider
                  min={min}
                  max={max}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                />
            </Box>
        }
        </Accordion>
    </div>
      
    
    </>
  )
}
