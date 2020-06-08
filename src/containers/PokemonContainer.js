import React from "react"
import {useQuery} from "@apollo/react-hooks"

import PokemonPreview from "../components/PokemonPreview"
import {GET_POKEMONS} from "../graphql/get-pokemons"

function PokemonContainer(){

    const {data: { pokemons = []} = {}} = useQuery(GET_POKEMONS, {variables: {first: 10}})

    return(
        <div className="pokemon-container">
            {pokemons && pokemons.map(pokemon => <PokemonPreview key={pokemon.id} pokemon={pokemon} />)}
        </div>
    )
}

export default PokemonContainer