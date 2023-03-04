import React from 'react'

import TestimonialCard from '../TestimonialCard/TestimonialCard'

import './Testimonials.css'


const Testimonials = () => {
  return (
    <div className="testimonial-section">
      <div className="container">
        <h2>Client Testimonials</h2>
        <div className="testimonial-cards">
          <TestimonialCard 
          testimonialBody={"Crystal Tec was our pre-opening IT consultants and was fundamental to the establishment of the resort. They have continued to provide IT support services from then on in a professional, personable, and efficient manner."}
          nameInfo={"Jade McPhee"}
          otherInfo={"Element of ByronBay"}
          />

          <TestimonialCard 
          testimonialBody={"Crystal Tec manages the design and deployment of all our IT projects, providing round-the-clock IT support for our complex Hotel Infrastructure. They provide highly professional and skilled level of support for our hotel needs"}
          nameInfo={"Brendon Darbey"}
          otherInfo={"Brisbane Airport Hotel Group"}
          />

          <TestimonialCard 
          testimonialBody={"Crystal Tec was our pre-opening IT consultants and was fundamental to the establishment of the resort. They have continued to provide IT support services from then on in a professional, personable, and efficient manner."}
          nameInfo={"Mark Aquino"}
          otherInfo={"Diyan sa Bahay"}
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonials