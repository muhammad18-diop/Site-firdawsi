import { useState } from 'react'
import {  Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>À propos</h1>} />
        <Route path="/services" element={<h1>Services</h1>} />
        <Route path="/pricing" element={<h1>Tarifs</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </>
  )
}

export default App
