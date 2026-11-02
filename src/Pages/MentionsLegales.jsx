
import { useEffect } from "react"
import Navbar from "../Components/Navbar";
import HeroMentionsLegales from "../Components/HeroMention";
import MentionsLeg from "../Components/SommairesMentions";
import Footer from "../Components/Footer";





function MentionsLegales() {
      useEffect(() => {
        document.title = " Mentions légales - Firdawsi Consulting Group"  ;
      }, []);
    return (
        <div>
            <Navbar />
            <HeroMentionsLegales />
            <MentionsLeg/>
            <Footer/>
            

         

            
        </div>
    )
}

export default MentionsLegales;