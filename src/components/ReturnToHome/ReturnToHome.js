import React from "react"
import {Link} from "react-router-dom"
import "./return-to-home.css"

function ReturnToHome({colour = "red"}){
    return(
        <Link className={`link__return-to-home return-to-home--${colour}`} to="/"><i className="fas fa-arrow-left"></i> Return to homepage</Link>
    )
}

export default ReturnToHome