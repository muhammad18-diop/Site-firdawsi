
import Navbar from "../Components/Navbar"
import HeroActualites from "../Components/HeroActualite"
import BlogVoyages from "../Components/BlogVoyage"
import BlogImmobilier from "../Components/BlogImmobilier"
import BlogAssurance from "../Components/BlogAssurance"
function Actualite(){


    return(
        <div>
            <Navbar />
            <HeroActualites />
            <BlogVoyages />
            <BlogImmobilier />
            <BlogAssurance />
        </div>
    )
}

export default Actualite