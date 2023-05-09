import { React, useState } from "react";
import { ListTitle, List } from "./Inform";
import OpenSource from "../../Components/Successcase/OpenSource/OpenSource";
import Industry from "../../Components/Successcase/Industry/Industry";
function Successcase() {
  const [onHandle, setOnHandle] = useState("1");
  return (
    <div
      style={{
        background: "linear-gradient( #204241 30%,#26595a 80%, #33989d 100%)",
        color: "#fff",
        padding: "0 5rem",
      }}
    >
      {/* 選單 */}
      <div style={{ display: "flex" }}>
        <div style={{ width: "20%",display: "flex",flexDirection:"column",alignItems: "flex-start" }}>
          {ListTitle.map((item) => {
            return (
              <>
                <button
                  onClick={() => setOnHandle(item.id)}
                  style={{
                    backgroundColor: "Transparent",
                    backgroundRepeat: "no-repeat",
                    border: "none",
                    cursor: "pointer",
                    overflow: "hidden",
                    fontSize: onHandle === item.id ? "15px" : "5px",
                    margin: 0,
                    color: onHandle === item.id ? "#fff" : "#949494",
                  }}
                >
                  {item.title}
                </button>
              </>
            );
          })}
        </div>

        <div style={{ width: "80%",borderLeft:"2px solid #fff",height:"30px",paddingLeft:"1rem" }}>
          
          <h3>
            {List.filter((item) => onHandle === item.id)[0].title}
            </h3>
        </div>
      </div>
      {/* 案例 */}
      <div
        style={{
          width: "70%",
        
        }}
      >
        {List.filter((item) => onHandle === item.id)[0].cases}
      </div>
    </div>
  );
}

export default Successcase;
