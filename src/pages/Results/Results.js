import React, {useContext} from "react"
import {useParams} from "react-router-dom"
import { AppContext } from "../../components/Context/AppContext"
import PokemonContainer from "../../components/PokemonContainer/PokemonContainer"

function Results(){

    const {searchMatches} = useContext(AppContext)
    const {searchTerm} = useParams();

    return(
        <>
            <h4>{searchMatches && searchMatches.length ? `Search results for "${searchTerm}"` : `No results found for "${searchTerm}"`}</h4>
            {searchMatches && <PokemonContainer pokemons={searchMatches}/>}
        </>
    )
}

export default Results