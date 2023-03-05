import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <div className="video-background">
    <video autoPlay muted loop>
      <source src="/assets/videos/hero_video_2.mp4" type="video/mp4" />
    </video>
    <div className="hero-content">
      <h1>You focus business growth,<br/>we take care of your technology</h1>
      <br/>
      <h4>We are an IT Service Provider that delivers tailored and<br/> fully managed solutions that help you with any of your business IT needs. </h4>
      <Link to="contact"><button className="cta" type="button">Get Started</button></Link>
    </div>
  </div>
  )
}

export default Hero