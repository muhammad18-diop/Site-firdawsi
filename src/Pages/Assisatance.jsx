
import { useEffect } from "react"
import AssistanceServices from "../Components/AssuranceSection";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroAssistance from "../Components/HeroAssurance";

function Assistance(){
      useEffect(() => {
        document.title = " Assistance - Firdawsi Consulting Group"  ;
      }, []);

    return(

        <div>
            <Navbar/>
            <HeroAssistance/>
            <AssistanceServices/>
            <Footer/>
        </div>
    )
}

export default Assistance