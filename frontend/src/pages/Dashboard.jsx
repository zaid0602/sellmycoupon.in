import React, { useState } from 'react'
import { TrendingUp, CheckCircle, XCircle } from 'lucide-react'
import '../pages/Dashboard.css'

function Dashboard() {
  const [coupons] = useState([
    {
      id: '1',
      name: '50% off on Amazon Electronics',
      discount: 50,
      status: 'active',
      listedDate: '2024-04-10',
    },
    {
      id: '2',
      name: '40% off on Flipkart Fashion',
      discount: 40,
      status: 'sold',
      listedDate: '2024-04-08',
    },
    {
      id: '3',
      name: '30% off on Myntra',
      discount: 30,
      status: 'expired',
      listedDate: '2024-03-20',
    },
    {
      id: '4',
      name: '60% off on Swiggy Food',
      discount: 60,
      status: 'active',
      listedDate: '2024-04-12',
    },
  ])

  const stats = [
    {
      label: 'Total Coupons Listed',
      value: '24',
      icon: TrendingUp,
      color: 'stat-blue',
    },
    {
      label: 'Coupons Sold',
      value: '18',
      icon: CheckCircle,
      color: 'stat-green',
    },
    {
      label: 'Total Earnings',
      value: '₹4,850',
      icon: TrendingUp,
      color: 'stat-purple',
    },
  ]

  const getStatusBadge = (status) => {
    const badges = {
      active: {
        class: 'status-active',
        label: 'Active',
        icon: CheckCircle,
      },
      sold: {
        class: 'status-sold',
        label: 'Sold',
        icon: CheckCircle,
      },
      expired: {
        class: 'status-expired',
        label: 'Expired',
        icon: XCircle,
      },
    }
    return badges[status]
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        {/* Page Title */}
        <h1 className="dashboard-title">Dashboard</h1>

        {/* Stats Cards */}
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`stat-card ${stat.color}`}
              >
                <div className="stat-card-content">
                  <div className="stat-info">
                    <p className="stat-label">{stat.label}</p>
                    <p className="stat-value">{stat.value}</p>
                  </div>
                  <Icon className="stat-icon" size={28} />
                </div>
              </div>
            )
          })}
        </div>

        {/* My Coupons Section */}
        <div className="my-coupons-section">
          <h2 className="section-title">My Listed Coupons</h2>

          <div className="coupons-list">
            {coupons.map((coupon) => {
              const badge = getStatusBadge(coupon.status)
              const BadgeIcon = badge.icon
              return (
                <div
                  key={coupon.id}
                  className="coupon-item"
                >
                  <div className="coupon-item-header">
                    <div className="coupon-item-info">
                      <h3 className="coupon-item-name">
                        {coupon.name}
                      </h3>
                      <p className="coupon-item-date">
                        Listed on {coupon.listedDate}
                      </p>
                    </div>
                    <span className="coupon-item-discount">
                      {coupon.discount}%
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className={`status-badge ${badge.class}`}>
                      <BadgeIcon size={14} />
                      <span>{badge.label}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="action-button action-button-secondary">
            View Analytics
          </button>
          <button className="action-button action-button-primary">
            Add New Coupon
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
