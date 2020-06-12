import React from "react"
import {useQuery} from "@apollo/react-hooks"
import {useParams} from "react-router-dom"

import PokemonPreview from "../PokemonPreview/PokemonPreview"
import {GET_POKEMONS} from "../../graphql/get-pokemons"
import Pagination from "../Pagination/Pagination"
import Spinner from "../Spinner/Spinner"
import "./pokemon-container.css"

function PokemonContainer(){

    const MAX_POKEMON_COUNT = 151
    const MAX_POKEMON_PER_PAGE = 24
    const MAX_NUMBER_OF_PAGES = Math.ceil(MAX_POKEMON_COUNT/MAX_POKEMON_PER_PAGE)
    const {page = 1} = useParams()
    const pageNumber = parseInt(page)

    let {loading, error, data: { pokemons = []} = {}} = useQuery(GET_POKEMONS, {variables: {first: MAX_POKEMON_PER_PAGE * pageNumber}})

    let remainderOnPage = pokemons.length % MAX_POKEMON_PER_PAGE
    let numberOfPokemonToDisplay = remainderOnPage === 0 ? MAX_POKEMON_PER_PAGE : remainderOnPage

    if (loading) return <Spinner/>

    if (error) return "There was an error retrieving the list of Pokémon. Please try again later."

    return(
        <>
            <div className="pokemon-container">
                {pokemons && pokemons.slice(numberOfPokemonToDisplay * -1).map((pokemon, index) => <PokemonPreview key={pokemon.id} pokemon={pokemon}/>)}
            </div>
            <Pagination pageNumber={pageNumber} maxPages = {MAX_NUMBER_OF_PAGES}/>
        </>
    )
}

export default PokemonContainer