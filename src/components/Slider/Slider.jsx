import React from 'react'
import './Slider.css'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

import { sliderImages } from '../../data/data'

const Slider = () => {
    return (
        <Swiper
            className="mySwiper"
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
        >
            {sliderImages.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <img src={slide.image} alt={slide.title} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider