import React from "react"
import PokemonDetailsPhysical from "./PokemonDetails_Physical"
import PokemonDetailsCombat from "./PokemonDetails_Combat"
import PokemonDetailsEvolutions from "./PokemonDetails_Evolutions"

import "./pokemon-details.css"

function PokemonDetails({pokemon}){
 return(
    <div className="pokemon__details">
        <PokemonDetailsPhysical pokemon={pokemon}/>
        <PokemonDetailsCombat pokemon={pokemon} />
        {
            pokemon.evolutions &&
            <PokemonDetailsEvolutions 
                evolutions={pokemon.evolutions} 
                evolutionRequirements={pokemon.evolutionRequirements} 
            />
        }

    </div>
    )
}

export default PokemonDetails