
import Navbar from "../Components/Navbar";   
import HeroContact from "../Components/HeroContact"; 
import CoordonneesContact from "../Components/CoordonneeContact"; 
import FormulaireContact from "../Components/FormulaireContact";
import LocalisationContact from "../Components/LocalisationContact";
import Footer from "../Components/Footer"; 

function Contact(){

    return(
        <div>
            <Navbar />
            <HeroContact />
            <CoordonneesContact />
            <FormulaireContact />
            <LocalisationContact />
            <Footer />
        </div>
    )
}

export default Contact;