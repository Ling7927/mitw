import React from "react";
import { IndustryInform } from "../../../Pages/Successcase/Inform";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import SeeMore from "../../Function/SeeMore";
// const StringLength = ({ introduce }) => {
//   const [stringLength, setStringLength] = useState(50);

//   return (
//     <>
//       {introduce.length > stringLength ? (
//         <>
//           {introduce.substr(1, 50)}...
//           <a onClick={() => setStringLength(introduce.length)}>顯示更多</a>
//         </>
//       ) : (
//         introduce
//       )}
//     </>
//   );
// };

function Industry() {
  return (
    <>
      {/* --------產業產品-------- */}
      {IndustryInform.map((item, i) => {
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
            <Grid
              container
              spacing={1}
              marginBottom="2rem"
              alignItems="center"
              key={i}
            >
              {/* 上半 */}
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <img
                  src={item.img}
                  style={{ width: "100%", objectFit: "cover" }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={8}>
                <a
                  href={item.link}
                  target="_blank"
                  style={{
                    textDecoration: "none ",
                    color: "#000",
                    width: "100%",
                  }}
                >
                  <h3>{item.name}</h3>
                </a>

                <div style={{ whiteSpace: "pre-line", marginTop: "1rem" }}>
                  {item.tracks}
                </div>
              </Grid>
              {/* 下半 */}
              <div style={{ margin: "1rem 3rem 0 1rem" }}>
                <SeeMore introduce={item.introduce} />
              </div>
              <br />
            </Grid>
          </div>
        );
      })}
    </>
  );
}

export default Industry;
