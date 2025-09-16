// src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
// Future pages can be imported here
// import DonorDashboard from './pages/DonorDashboard'
// import RequestBloodPage from './pages/RequestBloodPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Future routes */}
        {/* <Route path="/donor" element={<DonorDashboard />} /> */}
        {/* <Route path="/request" element={<RequestBloodPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App
