import React from 'react'

import WithArrowButton from '../WithArrowButton/WithArrowButton'
import './Hero.css'

const Hero = () => {
  return (
    <div className="video-background">
    <video autoPlay muted loop>
      <source src="/assets/videos/hero_video.webm" type="video/webm" />
    </video>
    <div className="hero-content">
      <h1>You focus business growth,<br/>we take care of your technology</h1>
      <br/>
      <h4>We are an IT Service Provider that delivers tailored and<br/> fully managed solutions that help you with any of your business IT needs. </h4>
      <WithArrowButton pathTo={"contact"} titleBtn={"Get Started"}/>
    </div>
  </div>
  )
}

export default Hero
