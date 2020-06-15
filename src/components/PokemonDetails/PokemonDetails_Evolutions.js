import React from "react"
import PokemonPreview from "../PokemonPreview/PokemonPreview"

import "./pokemon-details-evolutions.css"

function PokemonDetailsEvolutions({evolutions, evolutionRequirements = {}}){
    return (
        <div className="pokemon__details__evolutions">
            <h3 className="pokemon__details__evolutions__title">Evolution</h3>
            {
                evolutionRequirements &&
                <div className="pokemon__details__evolutions__requirements">
                    <h4>Evolution requirements</h4>
                    <span>{evolutionRequirements.name} x {evolutionRequirements.amount}</span>
                </div>
            }
            <h4>Evolutions</h4>
            <div className="pokemon__details__evolutions__grid">
                {evolutions.map((evolution, index) => <PokemonPreview key={index} pokemon={evolution} />)}
            </div>
        </div>
    )
}

export default PokemonDetailsEvolutions