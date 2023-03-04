import React from 'react'
import './CoreValues.css'


const CoreValues = () => {
  return (
    <div className="core-values-wrapper">
      <h2>Our Core Values</h2>
      <div className="core-value-item">
        <div className="core-value-image">
          <img src="../../../assets/images/value_1.jpg" alt="" />
        </div>
        <div className="core-value-text">
          <div className="core-value-text-item">
            <h3>Experience</h3>
            <p>Our team is composed of experts with years of solid experience and background in the IT industry, having worked with different organizations across various industries.​​</p>
          </div>

          <div className="core-value-text-item">
            <h3>Professionalism</h3>
            <p>Our team is composed of experts with years of solid experience and background in the IT industry, having worked with different organizations across various industries.​​</p>
          </div>
          
        </div>
      </div>

      <div className="core-value-item">
        <div className="core-value-image">
          <img src="../../../assets/images/value_2.jpg" alt="" />
        </div>
        <div className="core-value-text">
          <div className="core-value-text-item">
            <h3>Proven Solutions</h3>
            <p>At Crystal Tec, we do not just help you identify your IT problems; we offer real and sustainable solutions to solve the challenges facing your business.​​​​</p>
          </div>

          <div className="core-value-text-item">
            <h3>Affordability</h3>
            <p>We provide world-class IT services that suit your organization’s needs and budget. We offer the right IT solutions and technologies at the right cost.​​​</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CoreValues