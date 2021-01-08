import React from "react"
import { Link } from "gatsby"

import Navbar from "../components/Navbar/navbar"
import Sidebar from "../components/Sidebar/sidebar"
import Footer from "../components/Footer/footer"
import SEO from "../components/seo"


import "../pages/CSS/index.css"

const IndexPage = () => {

  return (
    <>
    <SEO title="Home" />

      <Navbar />

        <div className="main-container">
        <Sidebar />
          <h1>
            Explore
          </h1>
          <h2>
            Are you Prepared
          </h2>
          <h3>
            To Discover the Sky ?
          </h3>

          <p>
            Welcome to a brand new way to discover the night Sky !
            <br/>
            You can access DeepSky Objects, Planetaries, Galaxies & enven more directly from your Home.
            <br/>
            Try It Yourself.
          </p>
        </div>

        <Link to="/Products/"><button type="button" className="btn btn-outline-dark">EXPLORE the Night Sky <i className="fas fa-angle-right"></i> </button></Link>

        <section>
          <div className="first_img"></div>
          <div className="second-img"></div>
          <div className="third-img"></div>

        </section>

    <Footer />
    </>
  )
}


export default IndexPage