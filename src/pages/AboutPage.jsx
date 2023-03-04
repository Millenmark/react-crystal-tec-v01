import React from 'react'
import { TabTitle } from '../TabTitle'

import AboutHero from '../components/AboutHero/AboutHero'
import AboutUs from '../components/AboutUs/AboutUs'
import Appointment from '../components/Appointment/Appointment'

const AboutPage = () => {
  TabTitle("About Us")
  return (
    <div>
      <AboutHero/>
      <AboutUs/>
      <Appointment/>
    </div>
  )
}

export default AboutPage