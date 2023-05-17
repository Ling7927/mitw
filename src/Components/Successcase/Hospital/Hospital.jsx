import React from 'react'
import { HospitalInform } from '../../../Pages/Successcase/Inform'
function Hospital() {
  return (
    <>
    {HospitalInform.map((item) => {
        return (
      <div style={{marginTop:"1rem" ,border:"2px solid #fff"}}>
            {/* 上半 */}
            <a
              href={item.link}
              target="_blank"
              style={{ textDecoration: "none ", color: "#fff" }}
            >
              <h3>{item.name}</h3>
            </a>
            <div style={{ display: "flex", position: "relative" ,border:"2px dotted yellow",gap:"2rem" }}>
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
          </div>
        )})}

    </>
  )
}

export default Hospital
