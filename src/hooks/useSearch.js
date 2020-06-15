import {useState} from "react"
import {useQuery} from "@apollo/react-hooks"
import {GET_ALL_POKEMON} from "../graphql/get-all-pokemon"

function useSearch(){

    const MINIMUM_SEARCH_LENGTH = 1

    let {loading, error, data: { pokemons = []} = {}} = useQuery(GET_ALL_POKEMON)

    const [searchMatches, setSearchMatches] = useState([])

    function findMatches(value) {
        if (value.length < MINIMUM_SEARCH_LENGTH){
            setSearchMatches([])
        } else if (pokemons && pokemons.length){

            let matchedPokemon
            if (value.length === MINIMUM_SEARCH_LENGTH)
            {
                matchedPokemon = pokemons.filter(pokemon => pokemon.name.toLowerCase().startsWith(value.toLowerCase()) ||
                                                            pokemon.number.includes(value.toLowerCase()))
            } else {
                matchedPokemon = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(value.toLowerCase()) ||
                                                            pokemon.types.some(type => type.toLowerCase().indexOf(value.toLowerCase()) !== -1 ) ||                                            
                                                            pokemon.number.includes(value.toLowerCase()))
            }
            
            setSearchMatches(matchedPokemon ?? [])
        }
    }

    return {loading, error, pokemons, MINIMUM_SEARCH_LENGTH, searchMatches, setSearchMatches, findMatches}
}

export default useSearch