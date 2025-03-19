import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
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
import Dashboard from './ActualApp/Dashboard'
import Referrals from './ActualApp/Referrals'
import { AuthProvider, useAuth } from './Auth/AuthContext'
import LoadingSpinner from './components/LoadingSpinner'

// Protected route component for patients
const ProtectedPatientRoute = ({ children }) => {
  const { isAuthenticated, isPatient, loading } = useAuth();
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  if (!isAuthenticated || !isPatient) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

// Protected route component for doctors
const ProtectedDoctorRoute = ({ children }) => {
  const { isAuthenticated, isDoctor, loading } = useAuth();
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  if (!isAuthenticated || !isDoctor) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

// Redirect already authenticated users
const AuthRedirect = ({ children }) => {
  const { isAuthenticated, isPatient, isDoctor } = useAuth();
  
  if (isAuthenticated) {
    if (isPatient || isDoctor) {
      return <Navigate to="/dashboard" />;
    }
  }
  
  return children;
};

function App() {
  return (
    <AuthProvider>
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
          <Route path="/signup/patient" element={
            <AuthRedirect>
              <PatientSignup />
            </AuthRedirect>
          } />
          <Route path="/signup/doctors" element={
            <AuthRedirect>
              <DoctorSignup />
            </AuthRedirect>
          } />
          <Route path="/login" element={
            <AuthRedirect>
              <Login />
            </AuthRedirect>
          } />
          <Route path="/account-selection" element={
            <AuthRedirect>
              <AccountSelection />
            </AuthRedirect>
          } />
          <Route path="/dashboard" element={
            <ProtectedPatientRoute>
              <Dashboard />
            </ProtectedPatientRoute>
          } />
          <Route path="/referrals" element={
            <ProtectedPatientRoute>
              <Referrals />
            </ProtectedPatientRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
