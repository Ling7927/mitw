import React, { useState,useRef } from "react";
import Slider from "react-slick";
import SliderCard from "./SliderCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Mem } from "../../Pages/Member/Inform";

function MemberSlider(props) {
  const {TabId}=props
const [Id,setId]=useState(TabId);
  const settings = {
    infinite: true,
    slidesToShow: 2,
    // slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0.0000001,
    cssEase: "linear",
    customPaging:(i)=>{
      return(
        <div>
          <div style={{width:"10rem"}}>
        {i==TabId?{TabId}:Id}
          </div>
        </div>
      )
    }
  };
  // const arrowRef = useRef(null);
  // const Member="";
  // Member=Mem.map((item,i)=>(
  //     <MemberCard item={item} key={i}/>
  // ))
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
        {Mem.map((item) => {
          return <SliderCard item={item} key={item} />;
        })}
      </Slider>
    </div>
  );
}

export default MemberSlider;
