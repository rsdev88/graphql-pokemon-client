import React from "react"
import {useParams} from "react-router-dom"
import {useQuery} from "@apollo/react-hooks"
import { GET_POKEMON } from "../graphql/get-pokemon"
import Spinner from "../components/Spinner/Spinner"


function Pokemon(){

    const {name} = useParams()
    const {loading, error, data: { pokemon } = {}} = useQuery(GET_POKEMON, {variables: {name: name}})

    if (loading) return <Spinner />

    if (error) return "There was an error retreiving data for this Pokémon. Please try again later."

    return(
        <div className="pokemon">
            {
                pokemon && 
                <>
                    <div className="pokemon__name">
                        <h3>{pokemon.name}</h3>
                    </div>
                    <div className="pokemon__meta">
                        <p>{pokemon.maxHP}</p>
                    </div>
                    <div className="pokemon__image">
                        <img src={pokemon.image} alt={pokemon.name}/>
                    </div>
                    <div className="pokemon__attacks">
                        <ul>
                            {pokemon.attacks.special.map((attack, index) => <li key={index}>{attack.name}: {attack.damage}DMG</li>)}
                        </ul>
                    </div>
                </>
            }
        </div>
    )
}

export default Pokemon