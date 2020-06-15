import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"
import PokemonType from "../PokemonType/PokemonType"
import useSearch from "../../hooks/useSearch"
import "./search.css"

function Search(){

    const history = useHistory()
    
    const {loading, error, MINIMUM_SEARCH_LENGTH, searchMatches, setSearchMatches, findMatches} = useSearch() 
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

    function handleClick(){
        setDisplayMatches(false)
        setSearchTerm("")
        setSearchMatches([])
    }

    function handleSubmit(event){
        event.preventDefault()

        const term = searchTerm
        setSearchTerm("")
        history.push(`/searchresults/${term.toLowerCase()}`)
    }

    const matchesElements = () => {        
        if(searchMatches && searchTerm.length > 0){
            if (loading) return <li className="search__matches__list-item">Loading...</li>

            if (error) return <li className="search__matches__list-item search__matches__list-error">Oops! There was an error retrieving the list of Pokémon for the search. Please try again later.</li>
            
            if (searchTerm.length >= MINIMUM_SEARCH_LENGTH && !searchMatches.length){
                return <li className="search__matches__list-item">No results were found.</li>
            }  

            return searchMatches.map(match => (
                <li className="search__matches__list-item"
                    key={match.id}>
                    <Link 
                        to={`/pokemon/${match.name.toLowerCase()}`}
                        onClick={() => handleClick()}>
                            <img src={match.image} alt={match.name}/>
                            <span>{`#${match.number}: ${match.name}`}</span>
                            <ul>
                                {match.types.map((type, index) => <PokemonType key={index} type={type}/>)}
                            </ul>
                    </Link>
                </li>))
        }
    }

    return(
        <div className="search">
            <form 
                className="search__form"
                onSubmit={(event) => handleSubmit(event)}
            >
                <input
                    className="search__input"
                    value={searchTerm}
                    onChange={(event) => handleChange(event)}
                    
                    placeholder="Start typing a Pokémon's name, number or type to search..."
                >
                </input>
            </form>
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