import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'

import './WithArrowButton.css'

const WithArrowButton = ({pathTo, titleBtn, onClick}) => {
  return (
    <>
      <Link to={pathTo}><button className="secret-btn" onClick={onClick}>{titleBtn}<AiOutlineArrowRight className="secret-btn-icon"/></button></Link>
    </>
  )
}

export default WithArrowButton