import React from 'react'
import { TabTitle } from '../TabTitle'

import OurProcess from '../components/OurProcess/OurProcess'

const ProcessesPage = () => {
  TabTitle("Our Processes")
  
  return (
    <div>
      <OurProcess/>
    </div>
  )
}

export default ProcessesPage