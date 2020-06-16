import React from "react"
import {useParams} from "react-router-dom"
import {useQuery} from "@apollo/react-hooks"
import { GET_POKEMON } from "../../graphql/get-pokemon"

import Spinner from "../../components/Spinner/Spinner"
import ReturnToHome from "../../components/ReturnToHome/ReturnToHome"
import PokemonHero from "../../components/PokemonHero/PokemonHero"
import PokemonDetailsPhysical from "../../components/PokemonDetails/PokemonDetails_Physical"
import PokemonDetailsCombat from "../../components/PokemonDetails/PokemonDetails_Combat"
import PokemonDetailsEvolutions from "../../components/PokemonDetails/PokemonDetails_Evolutions"

import "./pokemon.css"

function Pokemon(){

    const {name} = useParams()
    const {loading, error, data: { pokemon } = {}} = useQuery(GET_POKEMON, {variables: {name: name}})

    if (loading) return <Spinner />

    if (error) return (
        <>
            <ReturnToHome/>
            <p className="error">There was an error retreiving data for this Pokémon. Please try again later.</p>
        </>
        )

    return(
        pokemon && 
        <div className="pokemon">
            <PokemonHero pokemon={pokemon} onClick={()=>{}} includeReturnToHomeLink={true} />
            <PokemonDetailsPhysical pokemon={pokemon}/>
            <PokemonDetailsCombat pokemon={pokemon} />
            {
                pokemon.evolutions &&
                <PokemonDetailsEvolutions 
                    evolutions={pokemon.evolutions} 
                    evolutionRequirements={pokemon.evolutionRequirements} 
                />
            }
        </div>
    )
}

export default Pokemon