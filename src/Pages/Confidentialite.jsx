import Navbar from "../Components/Navbar";
import Confidentialite from "../Components/SectionConfidantialite";
import Footer from "../Components/Footer";
import HeroConfidentialite from "../Components/HeroConfidentialite";


function ConfidentialitePage(){


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