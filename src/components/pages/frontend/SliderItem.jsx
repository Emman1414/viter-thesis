import React from "react";

const SliderItem = ({ img }) => {
  return (
    <div className="slider-item max-h-[500px]">
      <img
        src={img}
        alt="Slider Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SliderItem;
