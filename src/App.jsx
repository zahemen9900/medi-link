import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import LogoSection from './components/LogoSection/LogoSection'
import AboutUs from './components/AboutUs/aboutUs'
import Milestone from './components/Milestone/Milestone'  
import HowItWorks from './components/HowItWorks/HowItWorks' 

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoSection />
      <AboutUs />
      <Milestone />
      <HowItWorks />
    </>
  )
}

export default App
