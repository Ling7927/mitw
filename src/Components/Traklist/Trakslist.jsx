import React, { useState } from "react";
import { TraksInform } from "./TraksInform.js";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Trakslist() {
  const [isHover, setIsHover] = useState("");

  return (
    <>
      <div
        style={{
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2vh 10vw 5vh",
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
        {/* <div
          style={{
            display: "flex",
            margin: "1rem 2rem",
            width: "100%",
            // textShadow:
            //   "0 0 0.7em #53F3D3, 0 0 0.7em #53F3D3,0 0 0.7em #53F3D3",
          }}
        > */}
        <Grid container spacing={1} gap={1} justifyContent="space-between">
          {TraksInform.map((item, i) => {
            return (
              <Grid
                item
                xs={4}
                md={4}
                lg={2.25}
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                marginBottom="1.5vh"
              >
                <div
                  key={i}
                  onMouseEnter={() => setIsHover(item.id)}
                  onMouseLeave={() => setIsHover("")}
                  style={{
                    textShadow:
                      isHover === item.id
                        ? item.onhover
                        : "0 0 0.7em #53F3D3, 0 0 0.7em #53F3D3,0 0 0.7em #53F3D3",
                  }}
                >
                  <Link
                    to={`/Traks/${item.id}`}
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    <h3
                      style={{
                        fontWeight: "bold",
                        marginBottom: "1vh",
                        maxWidth: "100%",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.title}
                    </h3>
                    <h5 style={{ maxWidth: "100%", whiteSpace: "nowrap" }}>
                      {item.context}
                    </h5>
                  </Link>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
      {/* </div> */}
    </>
  );
}

export default Trakslist;
