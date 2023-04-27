import React, { useState } from "react";
import Items from "./TraksInform.json";
function Traks() {
  const [isHover, setIsHover] = useState("");
  
  return (
    <>
      <div className="containter" style={{color:"#fff"}}>
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
          class="grid sm:grid-row-2 lg:grid-row-5"
          style={{
            display: "flex",
            // textShadow:
            //   "0 0 0.7em #53F3D3, 0 0 0.7em #53F3D3,0 0 0.7em #53F3D3",
          }}
        >
          {Items.Traks.map((index) => {
            return (
              <>
                <div
                  onMouseEnter={() => setIsHover(index.id)}
                  onMouseLeave={() => setIsHover("")}
                  style={{
                    margin: "2rem 2rem",
                    textShadow:
                      isHover === index.id
                        ? "0 0 0.7em #FF8C00, 0 0 0.7em #FF8C00,0 0 0.7em #FF8C00"
                        : "0 0 0.7em #53F3D3, 0 0 0.7em #53F3D3,0 0 0.7em #53F3D3",
                    top:
                    isHover === index.id
                    ? "5rem"
                    : "0",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      margin: " 1rem 1rem",
                    }}
                  >
                    {index.title}
                  </div>
                  <p style={{}}>{index.context}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Traks;
