import React from 'react'
import { useForm } from '@formcarry/react'

import FormSubmittedPage from '../../pages/FormSubmittedPage'

import './Form.css'
const Form = () => {
  const navigate = useNavigate()
  // Call the "useForm" hook in your function component
  const {state, submit} = useForm({
    id: '4w_Z_U0k2_'
  });
 
  // Success message
  if (state.submitted) {
    return <FormSubmittedPage/>
  }
  
  return (
    <>
    <form onSubmit={submit} className="form">

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="fname">First Name</label><br/>
          <input id="fname" type="text" name="fname" placeholder="Enter your first name" required/>
        </div>
        
        <div className="form-field">
          <label htmlFor="lname">Last Name</label><br/>
          <input type="text" name="lname" id="lname" placeholder="Enter your last name" />
        </div>
      </div>
      

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="email">Email</label><br/>
          <input type="email" name="email" id="email" placeholder='Enter your email'/>
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone</label><br/>
          <input type="number" name="phone" id="phone" placeholder='Enter your phone number'/>
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="business">Your Business Name</label><br/>
          <input type="text" name="business" id="business" placeholder='Enter your business name'/>
        </div>

        <div className="form-field">
          <label htmlFor="business_side">Business Side</label><br/>
          <input type="text" name="business_side" id="business_side" placeholder='Enter your business side'/>
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="heard_from">How'd you hear about us?</label><br/>
          <select name="heard_from" id="heard_from">
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="Twitter">Twitter</option>
            <option value="Referrals">Referrals</option>
            <option value="Google Ads">Google Ads</option>
            <option value="Email Marketing">Email Marketing</option>
            <option value="Other">Others</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="service_needed">What service do you need?</label><br/>
          <select name="service_needed" id="service_needed">
            <option value="IT Outsourcing Support">IT Outsourcing Support</option>
            <option value="Cyber Security Solutions & Services">Cyber Security Solutions & Services</option>
            <option value="Cloud Solutions & Services">Cloud Solutions & Services</option>
            <option value="IT Infrastructure Solutions & Services">IT Infrastructure Solutions & Services</option>
            <option value="Software & Web Development">Software & Web Development</option>
            <option value="Project Management">Project Management</option>
            <option value="Others">Others (Please specify in the additional field)</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="additional">Additional Comments/Questions</label><br/>
        <textarea name="additional" id="additional" rows="10"></textarea>
      </div>

      <button className="form-btn" type="submit">Send</button>

    </form>
    </>
  )
}

export default Form