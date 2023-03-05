import React from 'react'
import {services} from '../../ServiceList'
import WithArrowButton from '../WithArrowButton/WithArrowButton'

import './ForServices.css'

const ForServices = () => {
  return (
    <div className="for-service-wrapper">
      <div className="container">
        {
          services.map(service => (
            <div className="for-service-item" key={service.serviceId}>
              <div className="for-service-img">
                <img src={service.serviceImage} alt="" />
              </div>
              <div className="for-service-text">
                <h3>{service.serviceName}</h3>
                <p>{service.serviceDescription}</p>
                <WithArrowButton
                pathTo={`/services/${service.serviceId}`}
                titleBtn="View Benefits"
                />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ForServices