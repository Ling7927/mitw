import React from "react";
import Slider from "react-slick";
import "./Slider.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#000",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#000",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function PhotoSlider({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings}>
        {images.map((item,i) => {
          return (
            <div style={{ width: "100%" }} key={i}>
              <img src={item.img} style={{ width: "100%" }} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default PhotoSlider;
