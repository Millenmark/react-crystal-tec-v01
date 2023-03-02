import React from 'react'
import { TabTitle } from '../TabTitle'

import Hero from '../components/Hero/Hero'
import OurServices from '../components/OurServices/OurServices'
import SecretComponent from '../components/SecretComponent/SecretComponent'

const HomePage = () => {
  TabTitle('Crystal Tec: IT Solutions')
  return (
    <div>
      <Hero/>
      <div className="container">
        <SecretComponent/>
        <OurServices/>
      </div>
    </div>
  )
}

export default HomePage