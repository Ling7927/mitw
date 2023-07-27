import React from "react";
import { Inform } from "./Inform";
import { Grid } from "@mui/material";
import "./Signup.css";
function Signup() {
  return (
    <div
      className="Background"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(180deg, #000000 0%, #6AADD9 0.01%, rgba(0, 249, 255, 0) 56.56%, rgba(240, 240, 240, 0) 100%)",
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
          <h3
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
          </h3>
        </div>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignContent: "center",
          }}
        >
          {Inform.map((item) => {
            return (
              <Grid item sx={6} sm={6} md={4} lg={4} className="Block">
                {/* <div key={item} className="Block"> */}
                <h3
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignContent: "center",
                    fontWeight: "bold",
                    marginBottom: "2vw",
                    whiteSpace: "nowrap",
                  }}
                >
                  {" "}
                  <a href={item.link} target="_blank" className="SignupLink">
                    {item.title}
                  </a>
                </h3>
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
