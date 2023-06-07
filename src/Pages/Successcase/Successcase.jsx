import { React, useState } from "react";
import { ListTitle, List } from "./Inform";
import { motion } from "framer-motion";

function Successcase() {
  const [onHandle, setOnHandle] = useState("1");
  // const case={

  // }
  return (
    <div
      style={{
        background: "#dcdcdc",
        color: "#000",
      }}
    >
      <div style={{ margin: "0 5rem", background: "#fff" }}>
        {/* 選單 */}
        <motion.div
          initial={{
            x: "-100%",
          }}
          animate={{
            x: "0%",
          }}
          transition={{ delay: 0.5, duration: 0.3 }}
          style={{ display: "flex" }}
        >
          <div
            style={{
              width: "15%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              alignContent: "center",
              paddingLeft: "4%",
              marginTop: "2rem",
            }}
          >
            {ListTitle.map((item, i) => {
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
                      color: onHandle === item.id ? "#000" : "#949494",
                      marginBottom:"0.5rem"
                    }}
                    key={i}
                  >
                    {item.title}
                  </button>
                </>
              );
            })}
          </div>

          <div
            style={{
              display: "flex",
              width: "85%",
              borderLeft: "5px solid orange",
              height: "50px",
              paddingLeft: "1rem",
              marginTop: "2%",
              alignItems: "flex-end",
            }}
          >
            <h3>{List.filter((item) => onHandle === item.id)[0].title}</h3>
          </div>
        </motion.div>
        {/* 案例 */}
        <div
          style={{
            padding: "2rem 15%",
          }}
        >
          {List.filter((item) => onHandle === item.id)[0].cases}
        </div>
      </div>
    </div>
  );
}

export default Successcase;
