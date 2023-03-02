import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About Us</Link>
        <Link to="services">Our Service</Link>
        <Link to="processes">Our Processes</Link>
        <Link to="contact">Contact Us</Link>
      </nav>
    </header>
  )
}

export default Navbar