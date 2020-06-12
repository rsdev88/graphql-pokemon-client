import React from "react"
import {Link} from "react-router-dom"
import "./pagination.css"

function Pagination({pageNumber, maxPages}) {

    const pageNumberLinks = () => {

        let links = []
        for (let i = 1; i <= maxPages; i++){
            links.push(<li key={i}>
                            <Link to={`/${i}`}>{i}</Link>
                        </li>)
        }
        return links
    } 

    return (
        <div className="pagination-container">
            { pageNumber > 1 &&
                <Link 
                    to={`/${(pageNumber - 1)}`}
                    className="pagination-container__button pagination-container__button--previous"
                    >
                    Previous page
                </Link>
            }

            <ul className="pagination-container__page-numbers">
                {
                    pageNumberLinks()
                }
            </ul>

            { pageNumber < maxPages &&
                <Link 
                    to={`/${(pageNumber + 1)}`}
                    className="pagination-container__button pagination-container__button--next"
                    >
                    Next page
                </Link>
            }

        </div>
    )
}

export default Pagination