import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import {FaTiktok} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper container">
        <div className="footer-column">
          <div className="footer-logo">
            <Link to="/"><img src="/assets/images/min_ct_nav_logo.png" alt="logo"/></Link>
          </div>
          <div className="footer-socials">
            <BsFacebook className="social-icon"/>
            <RiInstagramFill className="social-icon instagram-icon"/>
            <FaTiktok className="social-icon"/>
          </div>
        </div>

        <div className="footer-column footer-about">
          <h3>About Us</h3>
          <p>Our Team</p>
          <p>Out Clients</p>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
            <p>IT Outsourcing Support</p>
            <p>Cyber Security Solutions & Services</p>
            <p>Cloud Solutions & Services</p>
            <p>IT Infrastructure Solutions & Services</p>
            <p>Software & Web Development</p>
            <p>Project Management</p>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>1300 85 99 82</p>
          <p>+617 5688 1149</p>
          <p>support@crystaltec.com.au</p>
        </div>
      </div>

      <div className="footer-copyright">
        <p>Copyright &copy; 2023 Crystal Tec IT Solutions <br/> All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer