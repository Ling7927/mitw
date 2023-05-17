import React, { useState } from "react";
import {TraksInform} from "./TraksInform.js";

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
          {TraksInform.map((index) => {
            return (
              <>
                <div
                  onMouseEnter={() => setIsHover(index.id)}
                  onMouseLeave={() => setIsHover("")}
                  style={{
                    margin: "1rem 1rem",
                    width: "8rem",
                    textShadow:
                      isHover === index.id
                        ? index.onhover
                        : "0 0 0.7em #53F3D3, 0 0 0.7em #53F3D3,0 0 0.7em #53F3D3",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {index.title}
                  </h3>
                  <h5 style={{}}>{index.context}</h5>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Trakslist;
