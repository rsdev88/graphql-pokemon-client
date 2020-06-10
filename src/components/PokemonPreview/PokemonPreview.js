import React from "react"
import {Link, useHistory} from "react-router-dom"
import "./pokemon-preview.css"

function Pokemon({pokemon}){

    const history = useHistory()

    function getIconName(type){
        switch (type.toLowerCase()){
            case "grass":
                return "leaf"
            case "poison": 
                return "skull-crossbones"
            case "fire":
                return "fire"
            case "flying":
                return "feather-alt"
            case "water":
                return "tint"
            case "bug":
                return "bug"
            case "normal":
                return "circle"
            case "electric":
                return "bolt"
            case "ground":
                return "paw"
            case "fairy":
                return "magic"
            case "fighting":
                return "fist-raised"
            case "psychic":
                return "hat-wizard"
            case "rock":
                return "dice-d20"
            case "steel":
                return "cogs"
            case "ice":
                return "snowflake"
            case "ghost":
                return "ghost";
            case "dragon":
                return "dragon"
            default:
                return "question"
    
        }
    }
    
    return(
        <div 
            className={`pokemon-preview pokemon-preview--${pokemon.types[0].toLowerCase()}`}
            onClick={() => history.push(`/pokemon/${pokemon.name.toLowerCase()}`)}
        >
            <div className="pokemon-preview__name-container">
                <h3>{pokemon.name}</h3>
            </div>
            <div className="pokemon-preview__number-container">
                <span>#{pokemon.number}</span>
            </div>
            <div className="pokemon-preview__image-container">
                <img src={pokemon.image} alt={pokemon.name}/>
            </div>
            <div className={"pokemon-preview__types-container"}>
                <ul >
                    {pokemon.types.length && pokemon.types.map((type, index) => <li key={index}  className={`li--${type.toLowerCase()}`}><i className={`fas fa-${getIconName(type)}`}></i> {type}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Pokemon