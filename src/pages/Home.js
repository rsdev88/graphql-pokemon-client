import React from "react"
import PokemonContainer from "../containers/PokemonContainer"
import Search from "../components/Search/Search"

function Home(){
    return(
        <main>
          <Search />
          <PokemonContainer/>
        </main>
    )
}

export default Home