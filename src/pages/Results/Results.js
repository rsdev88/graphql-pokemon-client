import React, {useEffect} from "react"
import {useParams} from "react-router-dom"
import Metadata from "../../components/Metadata/Metadata"
import PokemonContainer from "../../components/PokemonContainer/PokemonContainer"
import useSearch from "../../hooks/useSearch"
import Spinner from "../../components/Spinner/Spinner"
import ReturnToHome from "../../components/ReturnToHome/ReturnToHome"

function Results(){

    const {loading, error, pokemons, searchMatches, findMatches} = useSearch()
    const {searchTerm} = useParams();

    let title = ""
    let description = ""

    if(searchTerm){
        title = `${searchTerm} - search results`
        description = `See results for '${searchTerm}' on Rob's Pokédex`
    }
    
    useEffect(()=>{
        findMatches(searchTerm)
    }, [pokemons, searchTerm])

    if (loading) return <Spinner/>
  
    if (error) return (
        <>
            <Metadata title={title} description={description} />
            <ReturnToHome/>
            <p className="error">There was an error retrieving your search result. Please try again later.</p>
        </>
        )

    return(
        <>
            <Metadata title={title} description={description} />
            <ReturnToHome/>
            <p className="centered">{searchMatches && searchMatches.length ? `Search results for "${searchTerm}"` : `No results found for "${searchTerm}"`}</p>
            {searchMatches && <PokemonContainer pokemons={searchMatches}/>}
        </>
    )
}

export default Results