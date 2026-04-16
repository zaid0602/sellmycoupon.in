import React from 'react'
import { Bell } from 'lucide-react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-brand">
            {/* Logo */}
            <div className="navbar-logo">💰</div>
            
            {/* Website Name */}
            <h1 className="navbar-title">SellMyCoupon</h1>
            
            {/* Tagline */}
            <p className="navbar-tagline">Buy & Sell Coupons Securely</p>
          </div>
          
          {/* Notification Icon */}
          <button className="navbar-notification">
            <Bell className="notification-icon" size={20} />
            <span className="notification-badge"></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
