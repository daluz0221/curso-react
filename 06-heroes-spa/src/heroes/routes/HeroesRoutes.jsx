import {  Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import MarvelPage from "../pages/MarvelPage"
import { DcPage } from "../pages/DcPage"
import { Hero } from "../pages/Hero"
import { SearchHero } from "../pages/SearchHero"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="marvel"element={ <MarvelPage /> } />
                <Route path="dc"element={ <DcPage /> } />
                
                <Route path="search"element={ <SearchHero /> } />
                <Route path="hero/:heroId"element={ <Hero /> } />


                <Route path="/"element={ <Navigate to="/marvel" /> } />

            </Routes>
        </div>
    </>
  )
}
