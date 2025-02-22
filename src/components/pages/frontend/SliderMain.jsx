import React, { useRef } from "react";
import Slider from "react-slick";
import SliderItem from "./SliderItem";
import { images } from "../backend/slider/slider-Item-data";

const SliderMain = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true, // Enable dots to confirm images are sliding
    infinite: true,
    speed: 900, // Reduce speed for easier debugging
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1,
    arrows: false, // Show navigation arrows
    autoplay: true,
    autoplaySpeed: 5000, // Slides every 3 seconds
    fade: true, // Keep slide effect
    waitForAnimate: true,
  };

  return (
    <div className=" w-full max-w-[600px] h-[400px] mx-auto overflow-hidden">
      {/* Slider Component */}
      <Slider ref={sliderRef} {...settings} className="w-full h-full">
        {images.map((item, index) => (
          <SliderItem key={index} img={item.image} />
        ))}
      </Slider>

      {/* Custom Prev Button */}
      <button
        className="absolute -bottom-4 left-16 transform -translate-y-1/2 bg-gray-500 text-white px-3 py-1 rounded"
        onClick={() => sliderRef.current.slickPrev()}
      >
        {"< Prev"}
      </button>

      {/* Custom Next Button */}
      <button
        className="absolute -bottom-4 right-16 transform -translate-y-1/2 bg-gray-500 text-white px-3 py-1 rounded"
        onClick={() => sliderRef.current.slickNext()}
      >
        {"Next >"}
      </button>
    </div>
  );
};

export default SliderMain;
