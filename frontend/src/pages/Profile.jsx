import React, { useState } from 'react'
import { Edit2, LogOut, History, Shield, HelpCircle, Settings } from 'lucide-react'
import '../pages/Profile.css'

function Profile() {
  const [profile] = useState({
    name: 'Zaid Ahmed',
    email: 'zaid@example.com',
    phone: '+91 98765 43210',
    avatar: '👤',
  })

  const [orderHistory] = useState([
    {
      id: '1',
      couponName: '50% off on Amazon Electronics',
      price: 199,
      purchaseDate: '2024-04-15',
      status: 'Completed',
    },
    {
      id: '2',
      couponName: '40% off on Flipkart Fashion',
      price: 299,
      purchaseDate: '2024-04-10',
      status: 'Completed',
    },
    {
      id: '3',
      couponName: '60% off on Swiggy Food',
      price: 499,
      purchaseDate: '2024-04-05',
      status: 'Completed',
    },
  ])

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-card-content">
            <div className="profile-info">
              {/* Avatar */}
              <div className="profile-avatar">
                {profile.avatar}
              </div>

              {/* Profile Info */}
              <div className="profile-details">
                <h2 className="profile-name">{profile.name}</h2>
                <p className="profile-email">{profile.email}</p>
                <p className="profile-phone">{profile.phone}</p>
              </div>
            </div>

            {/* Edit Button */}
            <button className="edit-button">
              <Edit2 className="edit-icon" size={20} />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="profile-action-buttons">
            <button className="profile-button profile-button-primary">
              Edit Profile
            </button>
            <button className="profile-button profile-button-danger">
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="quick-stats">
          <div className="stat-box">
            <p className="stat-box-label">Purchases</p>
            <p className="stat-box-value">12</p>
          </div>
          <div className="stat-box">
            <p className="stat-box-label">Savings</p>
            <p className="stat-box-value">₹2.4k</p>
          </div>
          <div className="stat-box">
            <p className="stat-box-label">Member Since</p>
            <p className="stat-box-value">6 mo</p>
          </div>
        </div>

        {/* Order History */}
        <div className="order-history-section">
          <h3 className="section-header">
            <History className="section-icon" size={20} />
            Order History
          </h3>

          {orderHistory.length > 0 ? (
            <div className="order-list">
              {orderHistory.map((order) => (
                <div
                  key={order.id}
                  className="order-item"
                >
                  <div className="order-item-header">
                    <div className="coupon-item-info">
                      <p className="order-item-name">
                        {order.couponName}
                      </p>
                      <p className="order-item-date">
                        {order.purchaseDate}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p className="order-item-price">
                        ₹{order.price}
                      </p>
                      <p className="order-item-status">
                        {order.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-history">
              <p className="empty-history-text">No purchase history yet</p>
            </div>
          )}
        </div>

        {/* Settings & Support */}
        <div className="settings-section">
          {[
            { icon: Shield, label: 'Account Security', href: '#' },
            { icon: Settings, label: 'Settings', href: '#' },
            { icon: HelpCircle, label: 'Help & Support', href: '#' },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <button
                key={index}
                className="settings-button"
              >
                <Icon className="settings-icon" size={20} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>

        {/* Delete Account */}
        <button className="delete-account-button">
          Delete Account
        </button>
      </div>
    </div>
  )
}

export default Profile
