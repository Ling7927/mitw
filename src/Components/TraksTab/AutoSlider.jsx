import React from 'react'
import {TraksTabInform} from './TraksTabInform'
import Slider from "react-slick";
function AutoSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
        <div>
            {TraksTabInform.map((item)=>{
                    item.Img.map((item)=>{
                        return(
                            <>
                            <Slider  {...settings}>

                              <div key={item.id} style={{width:"10px"}}><h1>111111</h1><img src={item.img}/></div>

                            </Slider>
                     
                            </>
                               )
                    })
            })}
        </div>
    </>
    
  )
}

export default AutoSlider
