import React from 'react'
import { Link } from 'react-router-dom'

import WithArrowButton from '../WithArrowButton/WithArrowButton'

import './WhyUs.css'

const WhyUs = () => {
  return (
    <div className="why-us-section">
      <div className="">
        <div className='why-us-wrapper'>
          <div className="why-us-image">
            <img src="../../../assets/images/company_image.jpg" alt="" />
          </div>
          <div className="why-us-text">
            <h2>Why Crystal Tec?</h2>
            <p>Crystal Tec is a trusted IT Managed Service Provider specializing in Windows server, network maintenance, cyber security, and cloud computing hosted services. Our expertise in the hospitality and medical industries in the Sydney and Brisbane areas sets us apart from the competition.</p>
            <br/>
            <p>We work closely with our clients to provide customized solutions that meet their unique needs, ensuring their technology infrastructure is reliable and efficient. Choose Crystal Tec as your partner in success through technology.</p>
            <WithArrowButton pathTo={"about"} titleBtn={"Learn More"} hasArrow/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default WhyUs