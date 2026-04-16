import React, { useState } from 'react'
import { Search } from 'lucide-react'
import CouponCard from '../components/CouponCard'
import FilterChip from '../components/FilterChip'
import '../pages/Home.css'

function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const categories = ['Electronics', 'Fashion', 'Food', 'Travel']

  const coupons = [
    {
      id: '1',
      brandName: 'Amazon',
      discount: 40,
      description: '40% off on Electronics',
      expiryDate: '30 Apr',
      price: 199,
      logoUrl: '📱',
    },
    {
      id: '2',
      brandName: 'Flipkart',
      discount: 50,
      description: '50% off on Fashion',
      expiryDate: '25 Apr',
      price: 299,
      logoUrl: '👕',
    },
    {
      id: '3',
      brandName: 'Myntra',
      discount: 35,
      description: '35% off on Clothing',
      expiryDate: '22 Apr',
      price: 249,
      logoUrl: '👗',
    },
    {
      id: '4',
      brandName: 'Swiggy',
      discount: 60,
      description: '60% off on Food Orders',
      expiryDate: '20 Apr',
      price: 499,
      logoUrl: '🍕',
    },
    {
      id: '5',
      brandName: 'MakeMyTrip',
      discount: 30,
      description: '30% off on Hotels',
      expiryDate: '15 May',
      price: 799,
      logoUrl: '✈️',
    },
    {
      id: '6',
      brandName: 'Netflix',
      discount: 25,
      description: '25% off on Subscription',
      expiryDate: '10 Jun',
      price: 399,
      logoUrl: '🎬',
    },
  ]

  return (
    <div className="home-page">
      <div className="home-container">
        {/* Search Bar */}
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search coupons (Amazon, Flipkart...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Filter Chips */}
        <div className="filters-container">
          {categories.map((category) => (
            <FilterChip
              key={category}
              label={category}
              isActive={selectedCategory === category}
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
            />
          ))}
        </div>

        {/* Coupons Grid */}
        <div className="coupons-grid">
          {coupons.map((coupon) => (
            <CouponCard
              key={coupon.id}
              id={coupon.id}
              brandName={coupon.brandName}
              discount={coupon.discount}
              description={coupon.description}
              expiryDate={coupon.expiryDate}
              price={coupon.price}
              logoUrl={coupon.logoUrl}
            />
          ))}
        </div>

        {/* Empty State */}
        {coupons.length === 0 && (
          <div className="empty-state">
            <p className="empty-state-text">No coupons found. Try a different search or category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
