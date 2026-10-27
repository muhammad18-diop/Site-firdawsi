import Navbar from "../Components/Navbar";
import HeroHome from "../Components/HeroSection";
import Expertises from "../Components/Expertise";
import PourquoiNousChoisir from "../Components/PourquoiFirdawsi";
import Destinations from "../Components/Destinations";
import Immobilier from "../Components/Immobilier";
import AssuranceBiens from "../Components/AssuranceBiens";
import Actualites from "../Components/ActuHome";
import Temoignages from "../Components/Temoignages";
import CTAContact from "../Components/CTAContact";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroHome />
      <Expertises />
      <PourquoiNousChoisir />
      <Destinations />
      <Immobilier />
      <AssuranceBiens />
      <Actualites />
      <Temoignages />
      <CTAContact />
      <Footer />
    </div>
  );
}

export default Home;