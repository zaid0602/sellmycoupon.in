import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import '../pages/AddCoupon.css'

function AddCoupon() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    brandName: '',
    discount: '',
    couponCode: '',
    expiryDate: '',
    sellingPrice: '',
    description: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Coupon submitted successfully!')
    setFormData({
      brandName: '',
      discount: '',
      couponCode: '',
      expiryDate: '',
      sellingPrice: '',
      description: '',
    })
  }

  return (
    <div className="add-coupon-page">
      <div className="add-coupon-container">
        {/* Header */}
        <div className="add-coupon-header">
          <button
            onClick={() => navigate(-1)}
            className="back-button"
          >
            <ArrowLeft className="back-icon" size={24} />
          </button>
          <h1 className="add-coupon-title">Add Coupon</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="add-coupon-form">
          {/* Brand Name */}
          <div className="form-group">
            <label className="form-label">
              Brand Name
            </label>
            <input
              type="text"
              name="brandName"
              value={formData.brandName}
              onChange={handleInputChange}
              placeholder="e.g., Amazon, Flipkart"
              className="form-input"
              required
            />
          </div>

          {/* Discount % */}
          <div className="form-group">
            <label className="form-label">
              Discount Percentage
            </label>
            <input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleInputChange}
              placeholder="e.g., 50"
              min="0"
              max="100"
              className="form-input"
              required
            />
          </div>

          {/* Coupon Code */}
          <div className="form-group">
            <label className="form-label">
              Coupon Code
            </label>
            <input
              type="text"
              name="couponCode"
              value={formData.couponCode}
              onChange={handleInputChange}
              placeholder="e.g., SAVE2024"
              className="form-input"
              required
            />
          </div>

          {/* Expiry Date */}
          <div className="form-group">
            <label className="form-label">
              Expiry Date
            </label>
            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          {/* Selling Price */}
          <div className="form-group">
            <label className="form-label">
              Selling Price (₹)
            </label>
            <input
              type="number"
              name="sellingPrice"
              value={formData.sellingPrice}
              onChange={handleInputChange}
              placeholder="e.g., 299"
              min="0"
              step="0.01"
              className="form-input"
              required
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label className="form-label">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="e.g., 50% off on electronics with free shipping"
              rows={4}
              className="form-textarea"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-button"
          >
            Submit Coupon
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddCoupon
