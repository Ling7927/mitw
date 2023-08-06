import React, { useState } from "react";
import { Inform } from "./Inform";
import { motion } from "framer-motion";
import "./Introduction.css";
function IntroductionTab() {
  const [onHandle, setOnHandle] = useState("1");
  return (
    <>
      <div className="AllContentBackground" style={{ padding: "3rem 2rem" }}>
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
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    onHandle === item.id ? "#fdfdfd" : "#7AACA9 ",
                  color: onHandle === item.id ? "#7AACA9" : "#fff",
                  border: 0,
                  width: "30vh",
                  borderRadius: "10px 10px 0px 0px",
                  boxShadow: " 0px 0px 1px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div style={{ padding: "2rem 0" }}>
                  <h5
                    style={{
                      color: onHandle === item.id ? "#7AACA9" : "#fff",
                      margin: 0,
                    }}
                  >
                    <icon style={{ paddingRight: "5px", fontSize: "2rem" }}>
                      {item.icon}
                    </icon>

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
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fdfdfd",
            fontColor: "black",
            borderRadius: "0px 0px 1rem 1rem",
            justifyContent: "center",
            alignItems: "center",
            padding: "3vw 5vw",
          }}
        >
          {Inform.filter((item) => item.id === onHandle)[0].content}
        </div>
      </div>
    </>
  );
}

export default IntroductionTab;
