import React from "react"
import PokemonDetailsPhysical from "./PokemonDetails_Physical"
import PokemonDetailsCombat from "./PokemonDetails_Combat"

import "./pokemon-details.css"

function PokemonDetails({pokemon}){
 return(
    <div className="pokemon__details">
        <PokemonDetailsPhysical pokemon={pokemon}/>
        <PokemonDetailsCombat pokemon={pokemon} />
    </div>
    )
}

export default PokemonDetails