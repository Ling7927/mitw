import React from "react";
import { active } from "./Inform";
import "./Relatedactivity.css";
function Relatedactivity() {
  return (
    <>
      <div className="Background">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "rgb(253, 253, 253)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2vw 0 ",
            }}
          >
            <h3
              style={{
                borderWidth: "2px",
                padding: "1vw",
                fontWeight: "bold",
                borderStyle: "solid",

                boxShadow: " rgb(118, 189, 213) 2px 1px 3px 2px",

                borderImage:
                  "linear-gradient(rgb(35, 240, 199), rgb(16, 137, 152), rgb(16, 249, 255)) 20 / 1 / 0 stretch",
              }}
            >
              相關活動
            </h3>
          </div>
          {active.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  key={item}
                  style={{
                    background: "rgb(253, 253, 253)",
                    border: "2px outset rgb(255, 255, 255)",
                    boxShadow: " rgb(118, 189, 213) 1px 1px 2px 1px",
                    padding: "2vw",
                    marginBottom: "5vw",
                    width: "90%",
                  }}
                >
                  <h4
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    {item.title}
                  </h4>
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Relatedactivity;
