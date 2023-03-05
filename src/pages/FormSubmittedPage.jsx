import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'

import './styles/FormSubmittedPage.css'
const FormSubmittedPage = () => {
  return (
    <div>
      <div className="form-submitted-section">
        <div className="form-submitted-wrapper container">
          <div className="form-submitted-message">
            <h1>Thank you! We Received Your Submission</h1>
            <div className="form-submitted-icon">
              <FaTelegramPlane className="form-submitted-plane-icon"/>
              <BsCheckCircleFill className="form-submitted-check-icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormSubmittedPage