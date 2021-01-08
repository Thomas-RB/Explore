import React from "react"

import './navbar.css'

const NavbarProducts = () => {

    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <i className="fas fa-user-astronaut"></i>
                <a to="/" className="navbar-brand" href="/">Explore</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/">TELESCOPES</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/">DSLR</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/">ACCESSORIES</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/">CONTACT</a>
                        </li> */}
                    </ul>
                </div>
                <i className="fas fa-shopping-cart"></i>
                <i className="far fa-user"></i>
            </div>
        </nav>

        </>

    )}
export default NavbarProducts
