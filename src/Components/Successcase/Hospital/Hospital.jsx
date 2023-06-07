import React from "react";
import { HospitalInform } from "../../../Pages/Successcase/Inform";
import { Grid } from "@mui/material";
function Hospital() {
  return (
    <>
    {/* -------醫院應用--------- */}
      {HospitalInform.map((item, i) => {
        return (
          <Grid container spacing={1} marginBottom="2rem" alignItems= "center" key={i}>
            {/* 上半 */}

            <Grid item sm={12} md={4} lg={4}>
              <div style={{ width: "70%" }}>{item.img}</div>
            </Grid>
            <Grid item sm={12} md={8} lg={8}>
              <a
                href={item.link}
                target="_blank"
                style={{ textDecoration: "none ", color: "#000" }}
              >
                <h3>{item.name}</h3>
              </a>
              <div style={{ whiteSpace: "pre-line",marginTop:"1rem" }}>{item.tracks}</div>
            </Grid>

            <div style={{margin:"2rem 1rem 0 0"}}>{item.introduce}</div>
            {/* 下半 */}
          </Grid>
        );
      })}
    </>
  );
}

export default Hospital;
