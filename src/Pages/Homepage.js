import React from "react"
import Navbar from "../Components/Shared/Navbar/Navbar"
import Banner from "../Components/Banner/Banner"
import Services from "../Components/Services/Services"

const Homepage = () => {
    return (
        <section>
            <Navbar />
            <Banner />
            <Services />
        </section>
    )
}

export default Homepage;