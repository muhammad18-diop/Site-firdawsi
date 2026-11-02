

import { useEffect } from "react"
import PrestationsVoyage from "../Components/VoyageCorps";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroVoyages from "../Components/HeroVoyage";


function Voyage(){
      useEffect(() => {
        document.title = " Voyage - Firdawsi Consulting Group"  ;
      }, []);


    return(
        <div>
            <Navbar/>
            <HeroVoyages/>
            <PrestationsVoyage/>
            <Footer/>
        </div>
    )
}

export default Voyage