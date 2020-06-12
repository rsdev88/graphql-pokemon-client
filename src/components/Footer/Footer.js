import React from "react"
import "./footer.css"

function Footer() {
    return(
        <footer>
            <div className="footer__content">
                <a className="footer__link" 
                    href="https://github.com/rsdev88">
                    <i className="devicon-github-plain github-button-icon"></i> <span className="footer-link-text">rsdev88</span>
                </a>
            </div>
        </footer>
    )
}

export default Footer