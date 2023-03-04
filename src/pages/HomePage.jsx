import React from 'react'
import { TabTitle } from '../TabTitle'

import Hero from '../components/Hero/Hero'
import OurServices from '../components/OurServices/OurServices'
import SecretComponent from '../components/SecretComponent/SecretComponent'
import WhyUs from '../components/WhyUs/WhyUs'
import ClientCarousel from '../components/ClientCarousel/ClientCarousel'
import MarketPartners from '../components/MarketPartners/MarketPartners'
import Appointment from '../components/Appointment/Appointment'

const HomePage = () => {
  TabTitle('Crystal Tec: IT Solutions')
  return (
    <div>
      <Hero/>
      <OurServices/>
      <WhyUs/>
      <ClientCarousel/>
      <MarketPartners/>
      <Appointment/>
    </div>
  )
}

export default HomePage