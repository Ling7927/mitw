import React from 'react'
import { IndustryInform } from '../../../Pages/Successcase/Inform'
import { motion  } from "framer-motion";

function Industry() {
  return (
    <>
   <div>
      {IndustryInform.map((item,i) => {
        return (
          <div
        //   key={i}
        //   style={{marginTop:"1rem" ,
        //   // border:"2px solid orange"
        // }} initial={ {
        //     y: "150%",
        // }}
        // animate={ {
        //     y: "0%",
        // }}
        // transition={{delay:0.5,
        //   duration: 1,
        // }}
        >
            {/* 上半 */}
            <a
              href={item.link}
              target="_blank"
              style={{ textDecoration: "none ", color: "#000" }}
            >
              <h3>{item.name}</h3>
            </a>
            <div style={{ display: "flex", position: "relative" ,gap:"2rem" }}>
              <div style={{width:"30%", zIndex: 1}}>
                {item.img}
              </div>
              {/* <div
                style={{
                  position: "absolute",
                  background: "#dcdcdc",
                  borderRadius: "50%",
                  width: "10%",
                  height: "10vw",
                  top: 0,
                  zIndex: 0,
                }}
              >
              </div> */}
              <div style={{ width: "70%" }}>{item.introduce}</div>
            </div>
            {/* 下半 */}
            <div style={{ whiteSpace: "pre-line" }}>{item.traks}</div>
          <br/>
          </div>
          
        );
      })}
    </div>
      
    </>
  )
}

export default Industry
