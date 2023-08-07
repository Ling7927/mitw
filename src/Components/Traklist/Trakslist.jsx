import React, { useState } from "react";
import { TraksInform } from "./TraksInform.js";
import { Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Trakslist() {
  const [isHover, setIsHover] = useState("");

  return (
    <>
      <div
        style={{
          color: "#8b8b8b",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2vh 0 15vh",
        }}
      >
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "5rem 0",
          }}
        >
          賽道(Track)
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
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
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
                  justifyContent="space-between"
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
                          : "0 0 1.5rem #00F9FF, 0 0 1.5rem #00F9FF,0 0 1.5rem #53F3D3",
                    }}
                  >
                    <Link
                      to={`/Tracks/${item.id}`}
                      style={{ color: "#191c23", textDecoration: "none" }}
                    >
                      <h3
                        className="Newh3"
                        style={{
                          fontWeight: "bold",
                          marginBottom: "1vh",
                          maxWidth: "100%",
                          whiteSpace: "nowrap", //不換行
                        }}
                      >
                        {item.title}
                      </h3>
                      <h5
                        className="Newh5"
                        style={{
                          maxWidth: "100%",
                          whiteSpace: "pre", //遇到<br>或者換行符號(\n)才換行
                        }}
                      >
                        {item.context}
                      </h5>
                    </Link>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
      {/* </div> */}
    </>
  );
}

export default Trakslist;
