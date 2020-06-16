import React from "react"
import "./pokemon-details-physical.css"

function PokemonDetailsPhysical({pokemon}){
    return (
        <div className="pokemon__details pokemon__details__physical">
            <h3 className="pokemon__details__title--physical">Physical attributes</h3>
            <div className="pokemon__details__classification">
                <h4>Classification</h4><span>{pokemon.classification}</span>
            </div>
            <div className="pokemon__details__height">
                <h4>Height range</h4>
                <span>📏 {pokemon.height.minimum} - {pokemon.height.maximum}</span>
            </div>
            <div className="pokemon__details__weight">
                <h4>Weight range</h4>
                <span>⚖️ {pokemon.weight.minimum} - {pokemon.weight.maximum}</span>
            </div>
            <div className="pokemon__details__hp">
                <h4>Max HP</h4>
                <span>❤️ {pokemon.maxHP}</span>
            </div>
            <div className="pokemon__details__cp">
                <h4>Max CP</h4>
                <span>✊🏼 {pokemon.maxCP}</span>
            </div>
        </div>
    )
}

export default PokemonDetailsPhysical