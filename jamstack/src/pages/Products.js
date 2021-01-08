import React from "react"

import NavbarProducts from "../components/Navbar/navbarProducts"
import Sidebar from "../components/Sidebar/sidebar"
import Cards from "../components/Cards/cards"

import '../pages/CSS/products.css'
import SEO from "../components/seo"

const Products = () => {

    return (
  <>
    <SEO title="Page Products" />
    <NavbarProducts />

    <div className="products-container">

        <Sidebar />
        <h1 className="bigTitle-products">
            Explore
        </h1>
        <h2 className="secondTitle-products">
            Our Top Products
        </h2>
        <h3 className="thirdTitle-products">
            By our Customers
        </h3>
        <div className="cards-products">
            <Cards />
        </div>

    </div>
  </>
    )
}

export default Products
