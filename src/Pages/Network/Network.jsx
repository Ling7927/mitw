import React from "react";
import Box from "@mui/material/Box";

import Net from "../../assets/Network.jpg";
function Network() {
  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          // background:
          //   "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)",
        }}
      >
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            padding: "2rem 3rem",
            margin: "1rem 10rem",

            // background: "#5C998D",
            border:" 0.25rem solid #5C998D",
             borderRadius: "30px",
          }}
        >
          <img src={Net} alt="Net" style={{width:"80%"}}></img>
        </div>
      </div>
    </>
  );
}

export default Network;
