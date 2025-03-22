import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
  const images = [
    {
      url: "https://swiperjs.com/demos/images/nature-1.jpg",
      alt: "Slide 1",
    },
    {
      url: "https://swiperjs.com/demos/images/nature-2.jpg",
      alt: "Slide 2",
    },
    {
      url: "https://swiperjs.com/demos/images/nature-3.jpg",
      alt: "Slide 3",
    },
    {
      url: "https://swiperjs.com/demos/images/nature-4.jpg",
      alt: "Slide 4",
    },
    {
      url: "https://swiperjs.com/demos/images/nature-5.jpg",
      alt: "Slide 5",
    },
    {
      url: "https://swiperjs.com/demos/images/nature-6.jpg",
      alt: "Slide 6",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center py-2 md:py-4">
      <div className="relative h-[40vh] md:h-[50vh] text-black text-sm font-sans m-0 p-0 flex flex-col items-center justify-center">
        <div className="swiper w-full pt-[50px] pb-[50px]">
          <Swiper
            loop={true}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="swiper-slide bg-center bg-cover w-[40%] md:w-[30%] md:h-[300px]"
              >
                <img src={image.url} alt={image.alt} className="block w-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
