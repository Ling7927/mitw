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
          // <div>
          //   <Grid container spacing={1} key={i}>
          //     {/* 上 */}
          //     <Grid item>
          //       <Grid container spacing={1} gap={8} direction="row">
          //         <Grid item sm={3} md={3} lg={3} width="100%">
          //           <img
          //             src={item.img}
          //             style={{ width: "100%", objectFit: "cover" }}
          //           />
          //           <a
          //             href={item.link}
          //             target="_blank"
          //             style={{ textDecoration: "none ", color: "#0081a7" }}
          //           >
          //             {item.linkName}
          //           </a>
          //         </Grid>
          //         <Grid item sm={8} md={8} lg={8}>
          //           <h3>{item.name}</h3>
          //         </Grid>
          //       </Grid>
          //     </Grid>
          //     {/* 下 */}
          //     <Grid item>
          //       <Grid container spacing={1} direction="row">
          //         <Grid item sm={4} md={4} lg={4}>
          //           <div
          //             style={{
          //               whiteSpace: "pre-line",
          //               border: "2px solid yellow",
          //             }}
          //           >
          //             {item.tracks}
          //           </div>
          //         </Grid>
          //         <Grid item sm={8} md={8} lg={8}>
          //           <SeeMore introduce={item.introduce} />
          //         </Grid>
          //       </Grid>
          //     </Grid>
          //   </Grid>{" "}
          //   <hr />
          // </div>
          // {/*------------------------------左右----------------------------*/}

          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              marginBottom: "2vw",
              paddingBottom: "2vw",
              borderBottom: "1px solid #dfdfdf",
            }}
            // initial={{
            //   y: "150%",
            // }}
            // animate={{
            //   y: "0%",
            // }}
            // transition={{ delay: 0.5, duration: 1 }}
          >
            <Grid container spacing={1} key={i} sx={{ marginTop: "1rem" }}>
              {/* 左 */}
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Grid container direction="column">
                  <Grid item width="65%">
                    <img
                      src={item.img}
                      style={{
                        width: "100%",

                        objectFit: "cover",
                        marginBottom: "1rem",
                      }}
                    />
                  </Grid>

                  <Grid item>
                    {item.linkName.map((link) => {
                      return (
                        <a
                          key={link}
                          href={link.l}
                          target="_blank"
                          style={{
                            textDecoration: "none ",
                            color: "#0081a7",
                            width: "100%",
                            marginRight: "3rem",
                          }}
                        >
                          {link.lname}
                        </a>
                      );
                    })}
                  </Grid>
                  <Grid item>
                    <p
                      style={{
                        whiteSpace: "pre-line",
                        marginTop: "1rem",
                      }}
                    >
                      {item.tracks}
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              {/* 右 */}

              <Grid item xs={12} sm={12} md={8} lg={8}>
                <Grid container spacing={1} direction="column">
                  <Grid item>
                    <h3>{item.name}</h3>
                  </Grid>
                  <Grid item>
                    <p style={{ whiteSpace: "pre-line" }}>
                      <SeeMore introduce={item.introduce} />
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        );
      })}
    </>
  );
}

export default Industry;
