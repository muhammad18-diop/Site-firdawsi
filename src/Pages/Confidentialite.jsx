
import { useEffect } from "react"

import Navbar from "../Components/Navbar";
import Confidentialite from "../Components/SectionConfidantialite";
import Footer from "../Components/Footer";
import HeroConfidentialite from "../Components/HeroConfidentialite";


function ConfidentialitePage(){
      useEffect(() => {
        document.title = " Confidentialité - Firdawsi Consulting Group"  ;
      }, []);


    return(
        <div>
            <Navbar/>
            <HeroConfidentialite/>
            <Confidentialite/>
            <Footer/>
        </div>
    )
}

export default  ConfidentialitePage