import React from "react"
import Navbar from "../Components/Shared/Navbar/Navbar"
import Banner from "../Components/Banner/Banner"
import Services from "../Components/Services/Services"
import Work from "../Components/Work/Work"
import Footer from "../Components/Shared/Footer/Footer"

const Homepage = () => {
    return (
        <section>
            <Navbar />
            <Banner />
            <Services />
            <Work />
            <Footer />
        </section>
    )
}

export default Homepage;