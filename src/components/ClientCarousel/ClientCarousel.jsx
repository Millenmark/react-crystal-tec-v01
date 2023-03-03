import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import SwiperTablet from '../SwiperTablet'
import SwiperMobile from '../SwiperMobile'
import SwiperDesktop from '../SwiperDesktop'

import './ClientCarousel.css'

const ClientCarousel = () => {
  return (
    <div className="client-carousel-section container">
      <div className="client-carousel-wrapper">
        <h2>Our Clients</h2>
        <SwiperMobile/>
        <SwiperTablet/>
        <SwiperDesktop/>
      </div>
    </div>
  )
}

export default ClientCarousel