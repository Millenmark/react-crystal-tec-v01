import React from 'react'
import { TabTitle } from '../TabTitle'
import ForServices from '../components/ForServices/ForServices'
import './styles/ServicesPage.css'
const ServicesPage = () => {
  TabTitle("Our Services")
  return (
    <div>
      <div className="our-service-heading">
        <div className="heading-title">
          <h1>IT Support & Solutions</h1>
          <h2>Eliminate headaches with Crystal Tec’s IT Services that tailor fits to your business needs. </h2>
        </div>
      </div>

      <ForServices/>
    </div>
  )
}

export default ServicesPage