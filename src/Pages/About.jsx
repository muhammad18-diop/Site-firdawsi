
import HeroApropos from "../Components/HeroApropos";
import Navbar from "../Components/Navbar";
import NotreHistoire from "../Components/Histoire";
import Statistiques from "../Components/Statistiques";
import NosValeurs from "../Components/NosValeurs";
import NousTrouver from "../Components/NousTrouver";
import Footer from "../Components/Footer";
import AboutCorps from "../Components/CorpsAbout";

function About() {  

    return (
        <div>
            <Navbar />
            <HeroApropos />
            <AboutCorps />
            <Footer />
        </div>
    )
}

export default About;
