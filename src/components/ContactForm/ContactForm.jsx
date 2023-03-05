import React from 'react'
import { RxMagnifyingGlass } from 'react-icons/rx'
import {FaPhoneAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

import Form from '../Form/Form'

import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-form-section'>
      <div className="contact-form-heading">
        <h1>Contact Us</h1>
        <p>Get strength from the inside out with a business partner focused on seamless collaboration.</p>
      </div>
      
      <div className="contact-form-wrapper">
        <div className="contact-info">
          <div className="contact-info-item">
            <RxMagnifyingGlass className='contact-info-icon'/>
            <div className="contact-info-text">
              <h2>Learn More</h2>
              <p>give us a call, send us an email or fill out the form and our sales team will reach out to you.</p>
            </div>
          </div>

          <div className="contact-info-item">
            <FaPhoneAlt className='contact-info-icon'/>
            <div className="contact-info-text">
              <h2>Phone</h2>
              <p>1300 85 99 80 | +617 5688 1149</p>
            </div>
          </div>

          <div className="contact-info-item">
            <MdEmail className='contact-info-icon'/>
            <div className="contact-info-text">
              <h2>Email</h2>
              <p>support@crystaltec.com.au</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <Form/>
        </div>
      </div>
    </div>
  )
}

export default ContactForm