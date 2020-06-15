import React from "react"
import {Link} from "react-router-dom"
import Search from "../Search/Search"
import "./header.css"


function Header() {
    return(
        <header>
            <h1 className="header__title"><Link to="/">Rob's Pokédex</Link></h1>
            <Search />
        </header>
    )
}

export default Header