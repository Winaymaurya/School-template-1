import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true, // Display navigation dots
    infinite: true, // Loop the carousel
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // Auto sliding interval
    arrows: true, // Show navigation arrows
  };

  const images = [
    "https://img.freepik.com/free-photo/students-knowing-right-answer_329181-14271.jpg?t=st=1734246548~exp=1734250148~hmac=509cc1ca4f15e331c4c1d428bee1cb529ee77c44c4a9e2a46455fedf72b6f531&w=996",
    "https://img.freepik.com/free-photo/curious-kids-doing-chemical-experiment-school_23-2148990230.jpg?t=st=1734246613~exp=1734250213~hmac=b8850a776ef34cfb767a814736ad4cacc611fde56517b126f40cec81b04838e3&w=996",
    "https://img.freepik.com/free-photo/kids-having-fun-playground_23-2149490409.jpg?t=st=1734246664~exp=1734250264~hmac=4ef80522ec057b13782441e618e1966a0e75c3a8867318d8afe5bfc006052c56&w=996",
    "https://img.freepik.com/free-photo/teenagers-reading-books-around-table_23-2147864018.jpg?t=st=1734246711~exp=1734250311~hmac=2eb26ce759db9a7a32b5fc669e90084d2e1d15002f9127228e7179162434e93c&w=996",
  ];

  return (
    <div className="  w-[90%]  mx-4 md:mx-16 " >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center rounded-lg   ">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="rounded-lg w-[100%]  md:h-[80vh] object-scale-down"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
