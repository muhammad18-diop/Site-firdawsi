
import { useEffect } from "react"
import Navbar from "../Components/Navbar";
import HeroFAQ from "../Components/HeroFAQ";
import SectionFaq from "../Components/SectionFaq"
import Footer from "../Components/Footer";


function FAQ() {
    useEffect(() => {
      document.title = " FAQ - Firdawsi Consulting Group"  ;
    }, []);
  return (
    <div>
     <Navbar />
     <HeroFAQ />
     <SectionFaq />
     <Footer />
    </div>
  );
}

export default FAQ;