import React, {useEffect} from "react"
import {useParams} from "react-router-dom"
import PokemonContainer from "../../components/PokemonContainer/PokemonContainer"
import useSearch from "../../hooks/useSearch"
import Spinner from "../../components/Spinner/Spinner"
import ReturnToHome from "../../components/ReturnToHome/ReturnToHome"

function Results(){

    const {loading, error, pokemons, searchMatches, findMatches} = useSearch()
    const {searchTerm} = useParams();
    
    useEffect(()=>{
        findMatches(searchTerm)
    }, [pokemons, searchTerm])

    if (loading) return <Spinner/>
  
    if (error) return (
        <>
            <ReturnToHome/>
            <p className="error">There was an error retrieving your search result. Please try again later.</p>
        </>
        )

    return(
        <>
            <ReturnToHome/>
            <p className="centered">{searchMatches && searchMatches.length ? `Search results for "${searchTerm}"` : `No results found for "${searchTerm}"`}</p>
            {searchMatches && <PokemonContainer pokemons={searchMatches}/>}
        </>
    )
}

export default Results