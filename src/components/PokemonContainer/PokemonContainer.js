import React from "react"
import PokemonPreview from "../PokemonPreview/PokemonPreview"
import "./pokemon-container.css"

function PokemonContainer({pokemons}){

    return(
        <>
            <div className="pokemon-container">
                {pokemons && pokemons.map(pokemon => <PokemonPreview key={pokemon.id} pokemon={pokemon}/>)}
            </div>
        </>
    )
}

export default PokemonContainer