import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import the quote icon
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Company Inc.",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi in nunc bibendum sodales. Great service!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Marketing Manager",
    message:
      "This company exceeded my expectations, providing superb service and outstanding customer care!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    position: "Product Designer",
    message:
      "Absolutely wonderful experience. I highly recommend this service to everyone!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    position: "Software Engineer",
    message:
      "Their attention to detail and innovative solutions have truly impressed me.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-12 font-montserrat">What parents have to say</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="testimonialSwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="p-8 rounded-xl shadow-lg flex flex-col items-center text-center max-w-2xl mx-auto min-h-[50vh] bg-purple-50">
                {/* Quote icon */}
                <div className="  w-full relative top-5">
                <FaQuoteLeft className="text-5xl text-orange-600 mb-4 " /></div>

                {/* Message */}
                <p className="text-gray-600 italic mb-6">
                  {testimonial.message}
                </p>

                {/* Avatar */}
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-blue-500"
                />

                {/* Name & Position */}
                <h3 className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <span className="text-sm text-gray-500">
                  {testimonial.position}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
