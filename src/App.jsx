
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home'
import About from './Pages/About'
import Welcome from './Components/Welcom'
import Services from './Pages/Services'
import Actualite from './Pages/Actualite'
import Temoignages from './Pages/Temoignages'
import FAQ from './Pages/FAQ'
import Contact from './Pages/Contact'
import MentionsLegales from './Pages/MentionsLegales'
import ConfidentialitePage from './Pages/Confidentialite'
import Voyage from './Pages/Voyage'
import ImmobilierPage from './Pages/Immobilier'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/accueil" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/actualite" element={<Actualite />} />
      <Route path="/temoignages" element={<Temoignages />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route path="/confidentialite" element={<ConfidentialitePage/>} />
      <Route path="/services/voyages" element={<Voyage/>} />
      <Route path="/services/immobilier" element={<ImmobilierPage/>} />
    </Routes>
  )
}

export default App
