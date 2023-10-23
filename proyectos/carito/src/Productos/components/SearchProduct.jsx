import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { getProductsByName } from '../helpers/getProductsByName';
import { useForm } from '../../hooks/useForm';
import { ProductContext } from '../context/ProductContext';

export const SearchProduct = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { state, onProductSearch } = useContext(ProductContext);


    const { q = '' } = queryString.parse( location.search )

    
 
    const { searchText, onInputChange, onResetForm } = useForm({
      searchText: q
    });
  
    const onSearchSubmit = (e) => {
   
      e.preventDefault();
      // if (searchText.trim() < 2) {
      //   return;
      // }
      navigate(`?q=${ searchText.toLowerCase().trim() }`)
      onProductSearch(searchText)
    }

  return (
    <>
      <div className="col-3">

        
      </div>
      <div className="col-9">
      <form onSubmit={onSearchSubmit}>
        <div className="row">
            <div className="col-8">

            <input 
              type="text"
              placeholder="Buscar producto"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
              />
              </div>
            <div className="col-4">
            <button className="btn btn-outline-primary mt-1">
              Buscar
              
            </button>
            </div>
        </div>
          </form>
      </div>
    </>
  )
}
