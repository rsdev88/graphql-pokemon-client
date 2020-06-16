import React from "react"
import Helmet from "react-helmet"

function Metadata({
                title = "Rob's Pokédex",
                description = "A Pokédex built using React and GraphQL.",
                image = process.env.PUBLIC_URL + "/apple-touch-icon.png"}){
    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title}></meta>
            <meta property="twitter:title" content={title}></meta>
            <meta name="description" content={description}/>
            <meta property="og:description" content={description}></meta>
            <meta property="twitter:description" content={description}></meta>
            <meta property="og:image" content={image}></meta>
            <meta property="twitter:image" content={image}></meta>
        </Helmet>
    )
}

export default Metadata