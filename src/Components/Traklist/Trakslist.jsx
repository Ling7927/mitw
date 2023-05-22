import React, { useState } from "react";
import { TraksInform } from "./TraksInform.js";
import { Grid } from "@mui/material";

function Trakslist() {
  const [isHover, setIsHover] = useState("");

  return (
    <>
      <div
        className="containter"
        style={{
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          padding: 0,
        }}
      >
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          預計賽道(Track)
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            margin: "1rem 2rem",
            width: "100%",
            // textShadow:
            //   "0 0 0.7em #53F3D3, 0 0 0.7em #53F3D3,0 0 0.7em #53F3D3",
          }}
        >
          <Grid container spacing={1}>
            {TraksInform.map((item,i) => {
              return (
                <Grid item xs={6} md={4} lg={2.25}>
                  <div
                  key={i}
                    onMouseEnter={() => setIsHover(item.id)}
                    onMouseLeave={() => setIsHover("")}
                    style={{
                      margin: "1rem 1rem",
                      width: "8rem",
                      textShadow:
                        isHover === item.id
                          ? item.onhover
                          : "0 0 0.7em #53F3D3, 0 0 0.7em #53F3D3,0 0 0.7em #53F3D3",
                    }}
                  >
                    <h3
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      {item.title}
                    </h3>
                    <h5 style={{}}>{item.context}</h5>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Trakslist;
