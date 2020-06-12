import React from "react"
import getIconName from "../Helpers/getIconName"
import "./pokemon-details-type-icon.css"

function PokemonDetailsTypeIcon({type}){

    if (!type) return ""

    const typeName = getIconName(type)

    return (
        <i className={`fas fa-${typeName} pokemon-details-type-icon--${type.toLowerCase()}`}></i>
    )
}

export default PokemonDetailsTypeIcon