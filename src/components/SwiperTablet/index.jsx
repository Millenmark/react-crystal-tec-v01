import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay  } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const index = () => {
  return (
    <div className="swiper-tablet">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="client-swiper"
        pagination={{clickable: true}}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
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