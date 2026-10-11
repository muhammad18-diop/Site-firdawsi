import HeroHome from "../Components/HeroSection";
import Expertises from "../Components/Expertise";
import  PourquoiNousChoisir from "../Components/PourquoiFirdawsi";
import Destinations from "../Components/Destinations";
import AssuranceBiens from "../Components/AssuranceBiens";
import Immobilier from "../Components/Immobilier";
import Temoignages from "../Components/Temoignages";
import CTAContact from "../Components/CTAContact";
import Footer from "../Components/Footer";




function Home(){



    return(
        <div>
            <HeroHome />
            <Expertises />
            <PourquoiNousChoisir />
            <Destinations />
            <AssuranceBiens />
            <Immobilier />
            <Temoignages />
            <CTAContact />
            <Footer />
            
           
        </div>
    )
}

export default Home;