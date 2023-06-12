import React from "react";
import { HospitalInform } from "../../../Pages/Successcase/Inform";
import { Grid } from "@mui/material";
import SeeMore from "../../Function/SeeMore";
function Hospital() {
  return (
    <>
      {/* -------醫院應用--------- */}
      {HospitalInform.map((item, i) => {
        return (
          // -------左右---------
          <Grid container spacing={1} key={i}>
            {/* 左 */}
            <Grid item sm={12} md={4} lg={4}>
              <Grid container spacing={1} direction="column">
                <Grid item>
                  {" "}
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
                  {" "}
                  <a
                    href={item.link}
                    target="_blank"
                    style={{
                      textDecoration: "none ",
                      color: "#0081a7",
                      width: "100%",
                      marginRight: "3rem",
                    }}
                  >
                    {item.linkname}
                  </a>
                </Grid>
                <Grid item>
                  <div style={{ whiteSpace: "pre-line" }}>{item.tracks}</div>
                </Grid>{" "}
              </Grid>
            </Grid>
            {/* 右 */}
            <Grid item sm={12} md={8} lg={8}>
              <Grid container spacing={1} direction="column">
                <Grid item>
                  <h3>{item.name}</h3>
                </Grid>
                <Grid item>
                  <SeeMore introduce={item.introduce} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          // <Grid
          //   container
          //   spacing={1}
          //   marginBottom="2rem"
          //   alignItems="center"
          //   key={i}
          // >
          //   {/* 上半 */}

          //   <Grid item sm={12} md={4} lg={4}>
          //     <img src={item.img} style={{ width: "100%" }} />
          //   </Grid>
          //   <Grid item sm={12} md={8} lg={8}>
          //     <a
          //       href={item.link}
          //       target="_blank"
          //       style={{ textDecoration: "none ", color: "#000" }}
          //     >
          //       <h3>{item.name}</h3>
          //     </a>
          //     <div style={{ whiteSpace: "pre-line", marginTop: "1rem" }}>
          //       {item.tracks}
          //     </div>
          //   </Grid>

          //   <div style={{ margin: "2rem 1rem 0 0" }}>{item.introduce}</div>
          //   {/* 下半 */}
          // </Grid>
        );
      })}
    </>
  );
}

export default Hospital;
