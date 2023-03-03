import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const index = () => {
  return (
    <div className="swiper-mobile">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="client-swiper"
            pagination={{clickable: true}}
          >
            <SwiperSlide><img className="client-swiper-image" src="../../../assets/images/pullman_logo.jpeg" alt="" /></SwiperSlide>

            <SwiperSlide><img className="client-swiper-image" src="../../../assets/images/novotel_logo.jpeg" alt="" /></SwiperSlide>

            <SwiperSlide><img className="client-swiper-image" src="../../../assets/images/novotel_logo.jpeg" alt="" /></SwiperSlide>

            <SwiperSlide><img className="client-swiper-image" src="../../../assets/images/pullman_logo.jpeg" alt="" /></SwiperSlide>

            <SwiperSlide><img className="client-swiper-image" src="../../../assets/images/novotel_logo.jpeg" alt="" /></SwiperSlide>

            <SwiperSlide><img className="client-swiper-image" src="../../../assets/images/novotel_logo.jpeg" alt="" /></SwiperSlide>

            <SwiperSlide><img className="client-swiper-image" src="../../../assets/images/pullman_logo.jpeg" alt="" /></SwiperSlide>

            <SwiperSlide><img className="client-swiper-image" src="../../../assets/images/novotel_logo.jpeg" alt="" /></SwiperSlide>

            <SwiperSlide><img className="client-swiper-image" src="../../../assets/images/novotel_logo.jpeg" alt="" /></SwiperSlide>
            
          </Swiper>
        </div>
  )
}

export default index