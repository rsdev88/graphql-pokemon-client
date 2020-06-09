import React from "react"
import {useQuery} from "@apollo/react-hooks"
import {useParams, Link} from "react-router-dom"

import PokemonPreview from "../components/PokemonPreview/PokemonPreview"
import {GET_POKEMONS} from "../graphql/get-pokemons"

function PokemonContainer(){

    const MAX_POKEMON_COUNT = 151
    const MAX_POKEMON_PER_PAGE = 10
    const MAX_NUMBER_OF_PAGES = Math.ceil(MAX_POKEMON_COUNT/MAX_POKEMON_PER_PAGE)
    const {page = 1} = useParams()
    const pageNumber = parseInt(page)

    let {loading, error, data: { pokemons = []} = {}} = useQuery(GET_POKEMONS, {variables: {first: MAX_POKEMON_PER_PAGE * pageNumber}})

    const pageNumberLinks = () => {

        let links = []
        for (let i = 1; i <= MAX_NUMBER_OF_PAGES; i++){
            links.push(<li key={i}>
                            <Link to={`/${i}`}>{i}</Link>
                        </li>)
        }
        return links
    } 

    let remainderOnPage = pokemons.length % MAX_POKEMON_PER_PAGE
    let numberOfPokemonToDisplay = remainderOnPage === 0 ? MAX_POKEMON_PER_PAGE : remainderOnPage

    if (loading) return "Loading..."

    if (error) return "There was an error retrieving the list of Pokémon. Please try again later."

    return(
        <>
        <div className="pokemon-container">
            {pokemons && pokemons.slice(numberOfPokemonToDisplay * -1).map((pokemon, index) => <PokemonPreview key={pokemon.id} pokemon={pokemon}/>)}
        </div>
        
        { pageNumber > 1 &&
            <Link to={`/${(pageNumber - 1)}`}>Previous page</Link>
        }

        { pageNumber < MAX_NUMBER_OF_PAGES &&
            <Link to={`/${(pageNumber + 1)}`}>Next page</Link>
        }

        <ul className="pokemon-container__page-numbers">
            {
                pageNumberLinks()
            }
        </ul>
        </>
    )
}

export default PokemonContainer