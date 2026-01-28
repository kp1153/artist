"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HeroSlider() {
  const images = Array.from({ length: 17 }, (_, i) => `/${i + 1}.jpg`);

  return (
    <div className="relative h-[80vh] w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="h-full w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={src}
                alt={`Prof. Uttama Dixit - ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}