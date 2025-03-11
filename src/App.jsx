import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import LogoSection from './components/LogoSection/LogoSection' 
import AboutUs from './components/AboutUs/aboutUs'
import Milestone from './components/Milestone/Milestone'  
import HowItWorks from './components/HowItWorks/HowItWorks' 
import Exclusive from './components/ExclusivePackages/ExclusivePackages'
import Growth from './components/Growth/Growth'
import FAQ from './components/FAQ/FAQ'
import Referral from './components/ReferralPartner/ReferralPartner'
import Footer from './components/Footer/Footer'
import PatientSignup from './AccountCreation/PatientSignup'
import DoctorSignup from './AccountCreation/DoctorSignup'
import Login from './AccountCreation/Login'
import AccountSelection from './AccountCreation/AccountSelection'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <LogoSection />
            <AboutUs />
            <Milestone />
            <HowItWorks />
            <Exclusive />
            <Growth />
            <FAQ />
            <Referral />
            <Footer />
          </>
        } />
        <Route path="/signup/patient" element={<PatientSignup />} />
        <Route path="/signup/doctors" element={<DoctorSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account-selection" element={<AccountSelection />} />
      </Routes>
    </Router>
  )
}

export default App
