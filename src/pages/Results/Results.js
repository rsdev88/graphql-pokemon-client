import React, {useContext} from "react"
import {useParams} from "react-router-dom"
import { AppContext } from "../../components/Context/AppContext"
import PokemonPreview from "../../components/PokemonPreview/PokemonPreview"
import "./results.css"

function Results(){

    const {searchMatches} = useContext(AppContext)
    const {searchTerm} = useParams();

    return(
        <>
            <h4>Search results for "{searchTerm}"</h4>
            <div className="search__results__container">
                {searchMatches && searchMatches.map(match => <PokemonPreview key={match.id} pokemon={match}/>)}
            </div>
        </>
    )
}

export default Results