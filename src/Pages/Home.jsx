import HeroHome from "../Components/HeroSection";
import Expertises from "../Components/Expertise";
import  PourquoiNousChoisir from "../Components/PourquoiFirdawsi";
import Destinations from "../Components/Destinations";
import AssuranceBiens from "../Components/AssuranceBiens";
import Immobilier from "../Components/Immobilier";
import Temoignages from "../Components/Temoignages";
import CTAContact from "../Components/CTAContact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";




function Home(){



    return(
        <div>
            <Navbar />
            <HeroHome />
            <Expertises />
            <PourquoiNousChoisir />
            <Destinations />
            <Immobilier />
            <AssuranceBiens />
            <Temoignages />
            <CTAContact />
            <Footer />
            
           
        </div>
    )
}

export default Home;