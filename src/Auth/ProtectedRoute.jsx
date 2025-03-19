import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';

export const ProtectedPatientRoute = () => {
  const { isAuthenticated, isPatient, loading } = useAuth();

  // Show loading spinner while checking auth status
  if (loading) {
    return <LoadingSpinner />;
  }

  // If not authenticated or not a patient, redirect to login
  if (!isAuthenticated || !isPatient) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated and is a patient, render the route
  return <Outlet />;
};

export const ProtectedDoctorRoute = () => {
  const { isAuthenticated, isDoctor, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated || !isDoctor) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export const AuthRedirect = () => {
  const { isAuthenticated, isPatient, isDoctor, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (isAuthenticated) {
    if (isPatient) {
      return <Navigate to="/dashboard" replace />;
    } else if (isDoctor) {
      return <Navigate to="/doctor-dashboard" replace />;
    }
  }

  return <Outlet />;
}; 