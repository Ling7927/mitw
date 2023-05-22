import React, { useRef } from "react";
import Slider from "react-slick";
import MemberCard from "./MemberCard";
import { Mem } from "../../Pages/Member/Inform";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

function MemberSlider(props) {
  // const arrowRef = useRef(null);
const Member="";
Member=Mem.map((item,i)=>(
    <MemberCard item={item} key={i}/>
))
  return (
    <div>
      {/* <Slider ref={arrowRef} {...settings}>
    <MemberCard/>
    </Slider>
    <div>
      <button 
      onClick={() => arrowRef.current.slickPrev()}
      className='back'><IoIosArrowBack/></button>
      <button 
      onClick={() => arrowRef.current.slickNext()}
      className='next'><IoIosArrowForward/></button>
    </div> */}
      <Slider {...settings}>
        {Member}
       
       
      </Slider>
    </div>
  );
}

export default MemberSlider;
