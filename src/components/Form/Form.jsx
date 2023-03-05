import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '@formcarry/react'

import './Form.css'
const Form = () => {
  const navigate = useNavigate()
  // Call the "useForm" hook in your function component
  const {state, submit} = useForm({
    id: 'W7vwrIjH2t'
  });
 
  // Success message
  if (state.submitted) {
    navigate('/');
  }
  
  return (
    <>
    <form onSubmit={submit} className="form">
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email"/>

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message"/>

      <button type="submit">Send</button>
    </form>
    </>
  )
}

export default Form