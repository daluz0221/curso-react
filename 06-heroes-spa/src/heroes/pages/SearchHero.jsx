import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import queryString from "query-string";
import { getHerosByName } from "../helpers/getHeroesByName";


export const SearchHero = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse( location.search )

  const heroes = getHerosByName( q )

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim() < 2) {
    //   return;
    // }
    navigate(`?q=${ searchText.toLowerCase().trim() }`)
    
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            (q=== '')
            ? <div className="alert alert-primary">search a hero</div>
            : (heroes.length == 0) && <div className="alert alert-danger">No hero with that <b>{ q }</b></div>
          }
          
          
          
          {
            heroes.map( hero =>(

              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}
