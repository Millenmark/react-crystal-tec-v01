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
          testimonialBody={"We Engaged Crystal Tec to upgrade our IT Systems. They supported us with expert advice and staged project plan and assisted with the transition with minimal impact on our clients and staff. We could access our files & mission-critical data from day 1"}
          nameInfo={"Phil Barron"}
          otherInfo={"Balina Community Transport"}
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonials