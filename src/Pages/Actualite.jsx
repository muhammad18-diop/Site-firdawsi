
import Navbar from "../Components/Navbar"
import HeroActualites from "../Components/HeroActualite"
import BlogVoyages from "../Components/BlogVoyage"
import BlogImmobilier from "../Components/BlogImmobilier"
import BlogAssurance from "../Components/BlogAssurance"
import Footer from "../Components/Footer"
function Actualite(){


    return(
        <div>
            <Navbar />
            <HeroActualites />
            <BlogVoyages />
            <BlogImmobilier />
            <BlogAssurance />
            <Footer />
        </div>
    )
}

export default Actualite