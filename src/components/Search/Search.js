import React, {useState} from "react"
import {useQuery} from "@apollo/react-hooks"
import {Link} from "react-router-dom"
import { GET_ALL_POKEMON } from "../../graphql/get-all-pokemon"
import "./search.css"

function Search(){

    const MINIMUM_SEARCH_LENGTH = 1
    let {loading, error, data: { pokemons = []} = {}} = useQuery(GET_ALL_POKEMON)
    const [matches, setMatches] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [displayMatches, setDisplayMatches] = useState(false)

    function handleChange(event){

        const {value} = event.target
        const oldValue = searchTerm

        setSearchTerm(value)

        if (value.length >= MINIMUM_SEARCH_LENGTH || value.length < oldValue.length ){
            findMatches(value)
        }

        setDisplayMatches(value.length > 0)
    }

    function findMatches(value) {
        if (value.length < MINIMUM_SEARCH_LENGTH){
            setMatches([])
        } else if (pokemons && pokemons.length){

            let matchedPokemon
            if (value.length === MINIMUM_SEARCH_LENGTH)
            {
                matchedPokemon = pokemons.filter(pokemon => pokemon.name.toLowerCase().startsWith(value.toLowerCase()))
            } else {
                matchedPokemon = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(value.toLowerCase()))
            }
            
            setMatches(matchedPokemon ?? [])
        }
    }

    const matchesElements = () => {        
        if(matches && searchTerm.length > 0){
            if (loading) return <li className="search__matches__list-item">Loading...</li>

            if (error) return <li className="search__matches__list-item">Oops! There was an error retrieving the list of Pokémon for the search. Sorry about that. You can still look for your Pokémon yourself in the pages below.</li>
            
            if (searchTerm.length >= MINIMUM_SEARCH_LENGTH && !matches.length){
                return <li className="search__matches__list-item">No matches were found.</li>
            }  

            return matches.map(match => (
                <li className="search__matches__list-item"
                    key={match.id}>
                    <Link 
                        to={`/pokemon/${match.name.toLowerCase()}`}
                        onClick={() => setDisplayMatches(false)}>
                            <img src={match.image} alt={match.name}/> {`#${match.number}: ${match.name}`}
                    </Link>
                </li>))
        }
    }

    return(
        <div className="search">
            <input
                className="search__input"
                value={searchTerm}
                onChange={(event) => handleChange(event)}
                placeholder="Start typing a Pokémon's name to search..."
            >
            </input>
            { displayMatches &&
                <div className="search__matches">
                    <ul className="search__matches__list">
                        {matchesElements()}
                    </ul>
                </div>
            }
        
        </div>
    )
}

export default Search