import Navbar from "../Components/Navbar";
import HeroServices from "../Components/HeroService";
import ServicesVoyage from "../Components/ServicesVoyage";
import ImmobilierSection from "../Components/SectionImmo";

function Services() {
  return (
    <div>
        <Navbar />
        <HeroServices />
        <ServicesVoyage />
        <ImmobilierSection />
       
    </div>
  );
}

export default Services;