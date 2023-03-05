import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ServiceCard.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

const ServiceCard = ({serviceName, imageUrl, serviceBody, serviceId}) => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <>
      <div className="service-card-item" data-aos="fade-up">
          <div className="service-card-heading">
            <img src={imageUrl} alt={`${serviceName} Icon`} />
            <h3>{serviceName}</h3>
          </div>
          <div className="service-card-body">
            {serviceBody}
          </div>
          <Link to={`/services/${serviceId}`} className="read-more-btn">Read More</Link>
        </div>
    </>
  )
}

export default ServiceCard