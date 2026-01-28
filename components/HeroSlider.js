"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HeroSlider() {
  const images = Array.from({ length: 17 }, (_, i) => `/${i + 1}.jpg`);

  const sections = [
    {
      title: "About",
      text: "प्रोफेसर उत्तमा दीक्षित की शैक्षणिक यात्रा और उपलब्धियाँ",
      link: "/about"
    },
    {
      title: "Experience",
      text: "शिक्षण और शोध में विशाल अनुभव का विवरण",
      link: "/experience"
    },
    {
      title: "Research",
      text: "शोध कार्य, प्रकाशन और योगदान की जानकारी",
      link: "/research"
    },
    {
      title: "Administrative Roles",
      text: "विभिन्न प्रशासनिक पदों पर किए गए कार्य",
      link: "/administrative-roles"
    },
    {
      title: "Research Scholars",
      text: "शोधार्थियों का मार्गदर्शन और उनकी उपलब्धियाँ",
      link: "/research-scholars"
    }
  ];

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

      <div className="absolute bottom-20 left-0 right-0 z-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
          {sections.map((section, index) => (
            <a
              key={index}
              href={section.link}
              className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg hover:bg-white hover:scale-105 transition-all duration-300"
            >
              <h3 className="font-bold text-[#0f4c5c] text-lg mb-2">
                {section.title}
              </h3>
              <p className="text-sm text-gray-700">
                {section.text}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}