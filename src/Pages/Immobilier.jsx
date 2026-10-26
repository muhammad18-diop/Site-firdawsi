

import Navbar from "../Components/Navbar";
import ImmobilierServices from "../Components/ImmobilierSection";
import Footer from "../Components/Footer";
import HeroImmobilier from "../Components/HeroImmobilier";

function ImmobilierPage(){


    return(
        <div>
            <Navbar/>
            <HeroImmobilier/>
            <ImmobilierServices/>
            <Footer/>
        </div>
    )
}

export default ImmobilierPage