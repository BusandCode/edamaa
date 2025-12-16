import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// Import page components
import SignUp from './pages/SignUp.tsx'
import SignIn from './pages/SignIn.tsx'
import SchoolRegistration from './pages/SchoolRegistration.tsx'
import TutorRegistration from './pages/TutorRegistration.tsx'
import PasswordRecovery from './pages/PasswordRecovery.tsx'
import StudentRegistration from './pages/StudentRegistration.tsx'

// Import Dashboard components
import SchoolDashboard from './pages/dashboards/SchoolDashboard.tsx'
import TutorDashboard from './pages/dashboards/TutorDashboard.tsx'
import StudentDashboard from './pages/dashboards/StudentDashboard.tsx'
import StudentProfile from './components/profiles/StudentProfile.tsx'

//Import profiles

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Home/Landing Page */}
        <Route path="/" element={<App />} />
        
        {/* Authentication Routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        
        {/* Registration Routes */}
        <Route path="/school-registration" element={<SchoolRegistration />} />
        <Route path="/tutor-registration" element={<TutorRegistration />} />
        <Route path="/student-registration" element={<StudentRegistration />} />
        
        {/* Dashboard Routes */}
        <Route path="/school-dashboard" element={<SchoolDashboard />} />
        <Route path="/tutor-dashboard" element={<TutorDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />

        {/* Proile routes */}
        <Route path='/my-profile' element={<StudentProfile />} />
      </Routes>
    </Router>
  </StrictMode>,
)