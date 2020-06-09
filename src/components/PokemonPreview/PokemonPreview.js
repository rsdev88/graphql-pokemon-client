import React from "react"
import {Link} from "react-router-dom"

function Pokemon({pokemon, index}){
    return(
        <div className="pokemon-preview">
            <div className="pokemon-preview__name">
                <Link to={`/pokemon/${pokemon.id}`}><h3>{pokemon.name}</h3></Link>
            </div>
            <div className="pokemon-preview__meta">
                <p>{pokemon.maxHP}</p>
            </div>
            <div className="pokemon-preview__image">
                <img src={pokemon.image} alt={pokemon.name}/>
            </div>
            <div className="pokemon-preview__attacks">
                <ul>
                    {pokemon.attacks.special.map((attack, index) => <li key={index}>{attack.name}: {attack.damage}DMG</li>)}
                </ul>
            </div>
            <p><Link to={`/pokemon/${pokemon.id}`}>More details...</Link></p>
            <hr/>
        </div>
    )
}

export default Pokemon