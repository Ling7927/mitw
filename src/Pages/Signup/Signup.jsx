import React from "react";
import { Inform } from "./Inform";
import { Grid } from "@mui/material";
import "./Signup.css";
function Signup() {
  return (
    <div
      className="AllBackground"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // background:
        //   "linear-gradient(180deg, #000000 0%, #6AADD9 0.01%, rgba(0, 249, 255, 0) 56.56%, rgba(240, 240, 240, 0) 100%)",
      }}
    >
      <div
        style={{
          minHeight: "80vh",
          background: "#fdfdfd",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "2vw 0 0",
          }}
        >
          <h1
            style={{
              borderWidth: "2px",
              paddingTop: "1vw",
              fontWeight: "bold",
              marginBottom: "2rem",
              padding: " 1rem 5rem 1.5rem",
              borderBottom: "solid 4px #fbc170",
              // borderStyle: "solid",

              // boxShadow: " rgb(118, 189, 213) 2px 1px 3px 2px",

              // borderImage:
              //   "linear-gradient(rgb(35, 240, 199), rgb(16, 137, 152), rgb(16, 249, 255)) 20 / 1 / 0 stretch",
            }}
          >
            報名連結
          </h1>
        </div>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: "3rem",
          }}
          gap={2}
        >
          {Inform.map((item) => {
            return (
              <Grid item sx={5} sm={5} md={5} lg={5} className="Block">
                {/* <div key={item} className="Block"> */}
                <a href={item.link} target="_blank" className="SignupLink">
                  <h3
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignContent: "center",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {" "}
                    {item.title}
                  </h3>
                </a>
                {/* </div> */}
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Signup;
