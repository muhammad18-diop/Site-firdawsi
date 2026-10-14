
import HeroApropos from "../Components/HeroApropos";
import Navbar from "../Components/Navbar";
import NotreHistoire from "../Components/Histoire";
import Statistiques from "../Components/Statistiques";
import NosValeurs from "../Components/NosValeurs";
import NousTrouver from "../Components/NousTrouver";
import Footer from "../Components/Footer";

function About() {  

    return (
        <div>
            <Navbar />
            <HeroApropos />
            <NotreHistoire />
            <Statistiques />
            <NosValeurs />
            <NousTrouver />
            <Footer />
        </div>
    )
}

export default About;
