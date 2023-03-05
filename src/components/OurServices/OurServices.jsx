import React from 'react'
import './OurServices.css'
import ServiceCard from '../ServiceCard/ServiceCard'
import { services } from '../../ServiceList'

const OurServices = () => {
  return (
    <div className="service-section container">
      <img className="service-background" src="../../../assets/images/bg_services_section.jpg" alt="Background Image" />
      <h2>Our Services</h2>

      <div className="service-cards">
        {
          services.map(service => (
            <ServiceCard
            imageUrl={service.serviceImage}
            serviceName={service.serviceName}
            serviceBody={service.serviceDescription}
            serviceId={service.serviceId}
            key={service.serviceId}
            />
          ))
        }
      </div>
    </div>
  )
}

export default OurServices