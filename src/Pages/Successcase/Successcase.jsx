import { React, useState } from "react";
import { ListTitle, List } from "./Inform";
import { motion  } from "framer-motion";

function Successcase() {
  const [onHandle, setOnHandle] = useState("1");
  // const case={

  // }
  return (
    
      <div
        style={{
          background: "linear-gradient( #204241 30%,#26595a 80%, #33989d 100%)",
          color: "#fff"
        }}
      >
        {/* 選單 */}
        <motion.div 
        initial={ {
          x: "-100%",
      }}
      animate={ {
          x: "0%",
      }}
      transition={{delay:0.5,
        duration: 0.3,
      }}
        style={{ display: "flex" }}>
          <div
            style={{
              width: "15%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              alignContent: "center",
              paddingLeft:"4%"
            }}
          >
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

          <div
            style={{
              width: "85%",
              borderLeft: "2px solid #fff",
              height: "50px",
              paddingLeft: "1rem",
              marginTop:"2%"

            }}
          >
            <h3 style={{alignItems:"center",justifyItems:"center"}}>{List.filter((item) => onHandle === item.id)[0].title}</h3>
          </div>
        </motion.div>
        {/* 案例 */}
        <div
        style={{
          padding: "2rem 15%",
        }}>
          {List.filter((item) => onHandle === item.id)[0].cases}
          

        </div>
      </div>
  );
}

export default Successcase;
