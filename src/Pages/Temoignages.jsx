import { useEffect } from "react"

import Navbar from '../Components/Navbar'
import HeroTemoignages from '../Components/HeroTemoignages'
import SectionTemoignages from '../Components/SectionTemoignages'
import Footer from '../Components/Footer'


function Temoignages() {
    useEffect(() => {
      document.title = " Témoignages - Firdawsi Consulting Group"  ;
    }, []);
  return (
    <div>
        <Navbar />
        <HeroTemoignages />
        <SectionTemoignages />
        <Footer />
      
    </div>
  )
}

export default Temoignages