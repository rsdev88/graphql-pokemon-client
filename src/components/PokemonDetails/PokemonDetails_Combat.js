import React from "react"
import PokemonDetailsTypeIcon from "./PokemonDetails_TypeIcon"
import "./pokemon-details-combat.css"

function PokemonDetailsCombat({pokemon}){
    return(
        <div className="pokemon__details__combat">
            <h3 className="pokemon__details__title--combat">Combat attributes</h3>
            <div className="pokemon__details__flee-rate">
                <h4>Flee rate: </h4>
                <span>🏃 {pokemon.fleeRate * 100}%</span>
            </div>
            {
                 pokemon.resistant &&
                <div className="pokemon__details__resistances">
                    <h4>Resistant to </h4>
                    <ul>
                        {pokemon.resistant.map((item, index) => <li key={index}><PokemonDetailsTypeIcon type={item}/> {item}</li>)}
                    </ul>
                </div>
            }
            {
                pokemon.weaknesses &&
                <div className="pokemon__details__weaknesses">
                    <h4>Weaknesses </h4>
                    <ul>
                        {pokemon.weaknesses.map((item, index) => <li key={index}><PokemonDetailsTypeIcon type={item}/> {item}</li>)}
                    </ul>
                </div>
            }

            <div className="pokemon__details__attacks">
                <h4 className="pokemon__details__attacks__title">Attacks</h4>
                {
                    pokemon.attacks.fast &&
                    <div className="pokemon__details__attacks__fast">
                        <h4>Fast </h4>
                        <ul>
                            {pokemon.attacks.fast.map((item, index) => <li key={index}><PokemonDetailsTypeIcon type={item.type}/><span>{item.name}: <br/> {item.damage} Dmg</span></li>)}
                        </ul>
                    </div>
                }
                {
                    pokemon.attacks.special &&
                    <div className="pokemon__details__attacks__special">
                        <h4>Special </h4>
                        <ul>
                            {pokemon.attacks.special.map((item, index) => <li key={index}><PokemonDetailsTypeIcon type={item.type}/><span>{item.name}: <br/> {item.damage} Dmg</span></li>)}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default PokemonDetailsCombat