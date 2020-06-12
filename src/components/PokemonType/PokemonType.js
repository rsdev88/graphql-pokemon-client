import React from "react"
import getIconName from "../Helpers/getIconName"
import "./pokemon-type.css"

function PokemonType({type}){


    return (
        <li className={`pokemon__type li--${type.toLowerCase()}`}>
            <i className={`fas fa-${getIconName(type)}`}></i> {type}
        </li>
    )
}

export default PokemonType