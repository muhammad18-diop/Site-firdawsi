
import { useEffect } from "react"

import Navbar from "../Components/Navbar";
import HeroServices from "../Components/HeroService";

import Footer from "../Components/Footer";
import ServicesCard from "../Components/ServicesCard";

function Services() {
    useEffect(() => {
      document.title = " Services - Firdawsi Consulting Group"  ;
    }, []);
  return (
    <div>
        <Navbar />
        <HeroServices />
        <ServicesCard />
        <Footer />
       
    </div>
  );
}

export default Services;