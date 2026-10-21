import Navbar from "../Components/Navbar";
import HeroServices from "../Components/HeroService";
import ServicesVoyage from "../Components/ServicesVoyage";
import ImmobilierSection from "../Components/SectionImmo";
import Assurance from "../Components/Assurance"
import Footer from "../Components/Footer";

function Services() {
  return (
    <div>
        <Navbar />
        <HeroServices />
        <ServicesVoyage />
        <ImmobilierSection />
        <Assurance />
        <Footer />
       
    </div>
  );
}

export default Services;