
import PrestationsVoyage from "../Components/VoyageCorps";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroVoyages from "../Components/HeroVoyage";


function Voyage(){


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