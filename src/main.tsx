import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// Import your page components
import SignUp from './pages/SignUp.tsx'
import SignIn from './pages/SignIn.tsx'
import SchoolRegistration from './pages/SchoolRegistration.tsx'
import TutorRegistration from './pages/TutorRegistration.tsx'
// import Dashboard from './pages/Dashboard.tsx'
import PasswordRecovery from './pages/PasswordRecovery.tsx'
import StudentRegistration from './pages/StudentRegistration.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Home/Landing Page */}
        <Route path="/" element={<App />} />
        
        {/* Authentication Routes */}
        {/* <Route path="/welcome-page" element={<WelcomePage />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        
        {/* Registration Routes */}
        <Route path="/school-registration" element={<SchoolRegistration />} />
        <Route path="/tutor-registration" element={<TutorRegistration />} />
        <Route path="/student-registration" element={<StudentRegistration />} />
        
        {/* Dashboard Route */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  </StrictMode>,
)