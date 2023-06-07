import React from 'react'
import { GovernmentInform } from '../../../Pages/Successcase/Inform'
import { motion } from "framer-motion";
function Goverment() {
  return (
    <>
    {GovernmentInform.map((item,i) => {
        return (
          <motion.div
          key={i}
          style={{ marginTop: "1rem",
          // border:"2px solid #orange" 
        }}
          initial={{
            x: "-150%",
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={{
            x: "0%",
          }}
          transition={{ delay: 0.7, duration: 0.7 }}>
            
            {/* 上半 */}
            <a
              href={item.link}
              target="_blank"
              style={{ textDecoration: "none ", color: "#000" }}
            >
              <h3>{item.name}</h3>
            </a>
            <div style={{ display: "flex", position: "relative" ,
            // border:"2px dotted yellow",
            gap:"2rem" }}>
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
          </motion.div>
        )})}

    </>
  )
}
export default Goverment
