import React from "react";
import "./Hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../../assets/banner1.webp";
import Banner2 from "../../assets/banner2.webp";
import Banner3 from "../../assets/banner3.webp";
import Banner4 from "../../assets/banner4.jpg";
import Banner5 from "../../assets/banner5.jpg";
import Banner6 from "../../assets/banner6.jpg";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    
    <div className="hero">
      <Slider {...settings}>
      <div>
          <div className="img">
            <img src={Banner1} alt="Banner" />
          </div>
        </div>
        <div>
          <div className="img">
            <img src={Banner2} alt="Banner" />
          </div>
        </div>
        <div>
          <div className="img">
            <img src={Banner3} alt="Banner" />
          </div>
        </div>
        <div>
          <div className="img">
            <img src={Banner4} alt="Banner" />
          </div>
        </div>
        <div>
          <div className="img">
            <img src={Banner5} alt="Banner" />
          </div>
        </div>
        <div>
          <div className="img">
            <img src={Banner6} alt="Banner" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
