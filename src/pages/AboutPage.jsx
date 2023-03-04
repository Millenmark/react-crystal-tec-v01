import React from 'react'
import { TabTitle } from '../TabTitle'

import AboutHero from '../components/AboutHero/AboutHero'
import AboutUs from '../components/AboutUs/AboutUs'

const AboutPage = () => {
  TabTitle("About Us")
  return (
    <div>
      <AboutHero/>
      <AboutUs/>
    </div>
  )
}

export default AboutPage