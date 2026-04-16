import React from 'react'
import { Calendar, ShoppingCart } from 'lucide-react'
import './CouponCard.css'

function CouponCard({
  id,
  brandName,
  discount,
  description,
  expiryDate,
  price,
  logoUrl,
}) {
  return (
    <div className="coupon-card">
      {/* Header with brand logo and discount */}
      <div className="coupon-header">
        <div className="coupon-info">
          <p className="coupon-brand">
            {brandName}
          </p>
          <h3 className="coupon-description">
            {description}
          </h3>
        </div>
        <div className="coupon-logo coupon-logo-gradient">
          {logoUrl || brandName.charAt(0)}
        </div>
      </div>

      {/* Content */}
      <div className="coupon-content">
        {/* Discount percentage - big and bold */}
        <div style={{ marginBottom: '12px' }}>
          <span className="coupon-discount">
            {discount}% OFF
          </span>
        </div>

        {/* Expiry date */}
        <div className="coupon-expiry">
          <Calendar className="coupon-expiry-icon" size={14} />
          <span>Expires {expiryDate}</span>
        </div>

        {/* Price and Button */}
        <div className="coupon-footer">
          <div className="coupon-price-section">
            <p className="coupon-price-label">Price</p>
            <p className="coupon-price">₹{price.toFixed(2)}</p>
          </div>
          <button className="coupon-buy-button">
            <ShoppingCart className="buy-icon" size={16} />
            <span>Buy</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CouponCard
