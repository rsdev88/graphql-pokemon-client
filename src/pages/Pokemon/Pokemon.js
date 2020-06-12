import React from "react"
import {useParams} from "react-router-dom"
import {useQuery} from "@apollo/react-hooks"
import { GET_POKEMON } from "../../graphql/get-pokemon"

import Spinner from "../../components/Spinner/Spinner"
import PokemonHero from "../../components/PokemonHero/PokemonHero"
import PokemonDetails from "../../components/PokemonDetails/PokemonDetails"

function Pokemon(){

    const {name} = useParams()
    const {loading, error, data: { pokemon } = {}} = useQuery(GET_POKEMON, {variables: {name: name}})

    if (loading) return <Spinner />

    if (error) return "There was an error retreiving data for this Pokémon. Please try again later."

    return(
        pokemon && 
        <div className="pokemon">
            <PokemonHero pokemon={pokemon} onClick={()=>{}} />
            <PokemonDetails pokemon={pokemon} />
        </div>
    )
}

export default Pokemon