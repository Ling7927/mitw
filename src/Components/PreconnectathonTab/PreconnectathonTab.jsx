import React, { useState } from "react";
import { PreconnectathonTabInform } from "./PreconnectathonTabInform";
function Preconnectathon() {
  const [onHandle, setOnHandle] = useState("1");

  return (
    <>
      <div
        style={{
          // background: "#90a09f",
          justifyContent: "space-between",
        }}
      >
        {PreconnectathonTabInform.map((item) => {
          return (
            <button
              onClick={() => setOnHandle(item.id)}
              style={{
                background: onHandle === item.id ? "#fff" : "#7AACA9",
                color: onHandle === item.id ? "#7AACA9" : "#fff",
                border: 0,
                margin: "2rem 0.5rem",
                padding: "2rem 1.5rem",
              }}
            >
              <h3 style={{color: onHandle === item.id ? "#7AACA9" : "#fff",}}>
                  {item.TabTitle}
              </h3>
            
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Preconnectathon;
