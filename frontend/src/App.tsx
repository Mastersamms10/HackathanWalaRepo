// src/App.tsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import Registration from './components/Registration'
import HospitalLogin from './components/HospitalLogin'
import HospitalRegistrationForm from './components/HospitalRegistrationForm'
import Dashboard from './components/Dashboard'
import RequestsLogs from './components/RequestsLogs'
import PatientLoginForm from './components/PatientLoginForm'
import DonorRegistrationForm from './components/DonorRegistrationForm'
import PatientRegistrationForm from './components/PatientRegistrationForm'
import DonorLogin from './components/DonorLogin'
import Donors from './components/Donors'
import Patient from './components/Patient'
import Hospitals from './components/Hospitals'
import HospitalsDash from './components/HospitalsDash'
import Patients from './components/Patients'
import Hdash from './components/hdash'
import AboutUs from './components/AboutUs'
import DashboardDon from './components/DashboardDon'
// Future pages can be imported here
// import DonorDashboard from './pages/DonorDashboard'
// import RequestBloodPage from './pages/RequestBloodPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/loginH" element={<HospitalLogin />} />
        <Route path="/loginp" element={<PatientLoginForm />} />
        <Route path="/loginD" element={<DonorLogin />} />
        <Route path="/registerH" element={<HospitalRegistrationForm/>} />
        <Route path="/registerP" element={<PatientRegistrationForm/>} />
        <Route path="/registerD" element={<DonorRegistrationForm/>} />
        <Route path="/dashD" element={<DashboardDon/>} />
        <Route path="/dashP" element={<Patient/>} />
        <Route path="/dashH" element={<Hdash/>} />
        {/* Future routes */}
        {/* <Route path="/donor" element={<DonorDashboard />} /> */}
        {/* <Route path="/request" element={<RequestBloodPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App
