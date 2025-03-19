import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './Auth/AuthContext';
import { ProtectedPatientRoute, ProtectedDoctorRoute, AuthRedirect } from './Auth/ProtectedRoute';
import LoginPage from './Auth/LoginPage';
import RegisterPage from './Auth/RegisterPage';
import Dashboard from './ActualApp/Dashboard';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes - redirect to dashboard if already logged in */}
          <Route element={<AuthRedirect />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          {/* Protected routes for patients */}
          <Route element={<ProtectedPatientRoute />}>
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Route>

          {/* Protected routes for doctors (placeholder for now) */}
          <Route element={<ProtectedDoctorRoute />}>
            <Route path="/doctor-dashboard" element={<div>Doctor Dashboard</div>} />
          </Route>

          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" />} />
          
          {/* Catch all other routes */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App; 