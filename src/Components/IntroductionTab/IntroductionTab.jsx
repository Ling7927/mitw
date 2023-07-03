import React, { useState } from "react";
import { Inform } from "./Inform";
function IntroductionTab() {
  const [onHandle, setOnHandle] = useState("1");
  return (
    <>
      <div style={{ width: "80%", margin: " auto" }}>
        {/* 上方按鈕 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {Inform.map((item) => {
            return (
              <button
                onClick={() => setOnHandle(item.id)}
                style={{
                  backgroundColor: onHandle === item.id ? "#f0f0f0" : "#7AACA9",
                  color: onHandle === item.id ? "#7AACA9" : "#fff",
                  border: 0,
                  width: "30vh",
                  borderRadius: "10px 10px 0px 0px",
                  boxShadow: " 0px 0px 1px rgba(0, 0, 0, 0.5)",
                }}
              >
                <p
                  style={{
                    fontSize: "40px",
                    color: onHandle === item.id ? "#7AACA9" : "#fff",
                    stroke: "white",
                    margin: "auto",
                    padding: "5% 0",
                  }}
                >
                  {item.icon}
                </p>

                <div style={{ padding: "10% 0" }}>
                  <h5
                    style={{
                      color: onHandle === item.id ? "#7AACA9" : "#fff",
                      margin: "0 0 0 0",
                    }}
                  >
                    {item.Tabtitle}
                  </h5>
                </div>
              </button>
            );
          })}
        </div>
        {/* 下方內容 */}
        <div
          style={{
            // display:"flex",
            backgroundColor: "#f0f0f0",
            fontColor: "black",
            // padding: "2px",
            borderRadius: "0px 0px 1rem 1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Inform.filter((item) => item.id === onHandle)[0].content}
        </div>
      </div>
    </>
  );
}

export default IntroductionTab;
