import React from 'react'
import { Link } from 'react-router-dom'
import './OurServices.css'

const OurServices = () => {
  return (
    <div className="service-section">
      <h2>We Offer</h2>
      <div className="service-cards">
        <div className="service-card-item">
          <div className="service-card-heading">
            <img src="/public/assets/icons/it_outsourcing.svg" alt="IT Outsourcing Support Image" />
            <h3>IT Outsourcing Support</h3>
          </div>
          <div className="service-card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sunt accusantium officia explicabo enim alias autem tempore aliquid? Laborum consectetur, autem provident ducimus excepturi ut fugiat alias maxime odit incidunt.
          </div>
          <Link to="#" className="read-more-btn">Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default OurServices