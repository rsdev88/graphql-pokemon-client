import React from "react"
import ReturnToHome from "../ReturnToHome/ReturnToHome"
import PokemonType from "../PokemonType/PokemonType"
import "./pokemon-hero.css"

function PokemonHero({pokemon, onClick, classSuffix = "hero", includeReturnToHomeLink = false}) {
    return (
        <div className={`pokemon-${classSuffix} pokemon--${pokemon.types[0].toLowerCase()}`}
            onClick={onClick}
        >
            {includeReturnToHomeLink &&
             <ReturnToHome  colour="white" />
             }
            <div className={`pokemon-${classSuffix}__name-container`}>
                <h3>{pokemon.name}</h3>
            </div>
            <div className={`pokemon-${classSuffix}__number-container`}>
                <span>#{pokemon.number}</span>
            </div>
            <div className={`pokemon-${classSuffix}__image-container`}>
                <img src={pokemon.image} alt={pokemon.name}/>
            </div>
            <div className={`pokemon-${classSuffix}__types-container`}>
                <ul>
                    {pokemon.types.length && pokemon.types.map((type, index) => <PokemonType key={index} type={type}/>)}
                </ul>
            </div>
        </div>
    )
}

export default PokemonHero