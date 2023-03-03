import React from 'react'
import { TabTitle } from '../TabTitle'

import Hero from '../components/Hero/Hero'
import OurServices from '../components/OurServices/OurServices'
import SecretComponent from '../components/SecretComponent/SecretComponent'
import WhyUs from '../components/WhyUs/WhyUs'
import ClientCarousel from '../components/ClientCarousel/ClientCarousel'

const HomePage = () => {
  TabTitle('Crystal Tec: IT Solutions')
  return (
    <div>
      <Hero/>
      <SecretComponent/>
      <OurServices/>
      <WhyUs/>
      <ClientCarousel/>
    </div>
  )
}

export default HomePage