import { useState } from 'react'
import {  Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Welcome from './Components/Welcom'
import Services from './Pages/Services'
import Actualite from './Pages/Actualite'
import Temoignages from './Pages/Temoignages'
import FAQ from './Pages/FAQ'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/actualite" element={<Actualite />} />
        <Route path="/temoignages" element={<Temoignages />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </>
  )
}

export default App
