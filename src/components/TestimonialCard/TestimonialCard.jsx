import React from 'react'
import {BsFillChatLeftQuoteFill} from 'react-icons/bs'

import './TestimonialCard.css'
const TestimonialCard = ({testimonialBody, nameInfo, otherInfo}) => {
  return (
    <div className="testimonial-card-item">
      <div className="testimonial-icon">
        <BsFillChatLeftQuoteFill/>
      </div>
      <div className="testimonial-body">
        <q>{testimonialBody}</q>
      </div>
      <div className="testimonial-info">
        <div className="testimonial-info-name">
          <h3>{nameInfo}</h3>
        </div>
        <div className="testimonial-info-other">
          {otherInfo}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard