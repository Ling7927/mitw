import React, { useState } from "react";
import { Inform } from "./Inform";
function IntroductionTab() {
  const [onHandle, setOnHandle] = useState("1");
  return (
    <>
      <div style={{}}>
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
                  backgroundColor: onHandle === item.id ? "#fff" : "#7AACA9",
                  color: onHandle === item.id ? "#7AACA9" : "#fff",
                  border: 0,
                  borderRadius: "10px 10px 0px 0px",
                  padding: "1rem 3rem",
                  boxShadow: " 0px 0px 1px rgba(0, 0, 0, 0.5)",
                }}
              >
                <p
                  style={{
                    fontSize: "40px",
                    color: onHandle === item.id ? "#7AACA9" : "#fff",
                    stroke: "white",
                    marginTop:"2rem",
                  }}
                >
                  {item.icon}
                </p>

                <div style={{ marginTop: "10px" }}>
                  <h3
                    style={{ color: onHandle === item.id ? "#7AACA9" : "#fff" }}
                  >
                    {item.Tabtitle}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>
        <div
          style={{
            // display:"flex",
            backgroundColor: "#fff",
            fontColor: "black",
            // padding: "2px",
            borderRadius: "0px 0px 1rem 1rem",
            height: "40rem",
            overflow:"scroll",
            justifyContent: "center",alignItems:"center",
          }}
        >
        
            {Inform.filter((item) => item.id === onHandle)[0].content}
        </div>
      </div>
    </>
  );
}

export default IntroductionTab;
