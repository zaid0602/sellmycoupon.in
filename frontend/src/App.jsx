import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import AddCoupon from './pages/AddCoupon'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

function App() {
  const [activeNav, setActiveNav] = useState('home')

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-1 pb-24 bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddCoupon />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <BottomNav activeNav={activeNav} setActiveNav={setActiveNav} />
      </div>
    </Router>
  )
}

export default App
