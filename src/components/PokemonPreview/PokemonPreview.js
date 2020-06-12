import React from "react"
import {useHistory} from "react-router-dom"
import PokemonHero from "../PokemonHero/PokemonHero"
import "./pokemon-preview.css"


function PokemonPreview({pokemon}){

    const history = useHistory()
    
    return(
        <PokemonHero 
            pokemon={pokemon}
            classSuffix = "preview"
            onClick={() => history.push(`/pokemon/${pokemon.name.toLowerCase()}`)}
        />
    )
}

export default PokemonPreview