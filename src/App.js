import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import JobListingPage from './pages/JobListing/JobListing';
import JobDetailPage from './pages/JobDetails/JobDetails';
import LoginPage from './pages/Login/Login';
import SignupPage from './pages/SignUp/SignUp';


export default function App() {
  return (
    <Router>
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/jobs" element={<JobListingPage />} />
          <Route path="/jobs/:id" element={<JobDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}