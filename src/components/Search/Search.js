import React, {useState} from "react"
import {useQuery} from "@apollo/react-hooks"
import {Link} from "react-router-dom"
import { GET_ALL_POKEMON } from "../../graphql/get-all-pokemon"

function Search(){

    const MINIMUM_SEARCH_LENGTH = 1
    let {loading, error, data: { pokemons = []} = {}} = useQuery(GET_ALL_POKEMON)
    const [matches, setMatches] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    function handleChange(event){

        const {value} = event.target
        const oldValue = searchTerm

        setSearchTerm(value)

        if (value.length >= MINIMUM_SEARCH_LENGTH || value.length < oldValue.length ){
            findMatches(value)
        }
    }

    function findMatches(value) {
        if (value.length < MINIMUM_SEARCH_LENGTH){
            setMatches([])
        } else if (pokemons && pokemons.length){

            let matchedPokemon
            if (value.length === MINIMUM_SEARCH_LENGTH)
            {
                matchedPokemon = pokemons.filter(pokemon => pokemon.name.toLowerCase().startsWith(value))
            } else {
                matchedPokemon = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(value))
            }
            
            setMatches(matchedPokemon ?? [])
        }
    }

    const matchesElements = () => {        
        if(matches && searchTerm.length > 0){

            if (loading) return "Loading..."

            if (error) return "Oops! There was an error retrieving the list of Pokémon for the search. Sorry about that. You can still look for your Pokémon yourself in the pages below."
            
            if (searchTerm.length >= MINIMUM_SEARCH_LENGTH && !matches.length){
                return "No matches were found."
            }  

            return matches.map(match => (
                <li key={match.id}>
                    <img src={match.image} alt={match.name}/>
                    <Link to={`/pokemon/${match.name.toLowerCase()}`}>{`#${match.number}: ${match.name}`}</Link>
                </li>))
        }
    }

    return(
        <div className="search">
            <input
                className="search--input"
                value={searchTerm}
                onChange={(event) => handleChange(event)}>
            </input>
            <div className="search--matches">
                <ul className="search--matches--list">
                    {matchesElements()}
                </ul>
            </div>
        
        </div>
    )
}

export default Search