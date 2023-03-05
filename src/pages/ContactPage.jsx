import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'
import { TabTitle } from '../TabTitle'


const ContactPage = () => {
  TabTitle("Contact Us")
  
  return (
    <div>
      <ContactForm/>
    </div>
  )
}

export default ContactPage