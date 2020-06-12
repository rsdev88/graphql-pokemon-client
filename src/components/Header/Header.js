import React from "react"
import Search from "../Search/Search"
import "./header.css"


function Header() {
    return(
        <header>
            <h1 className="header__title">Rob's Pokédex</h1>
            <Search />
        </header>
    )
}

export default Header