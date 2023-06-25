import { React, useState } from "react";
import { P1, ListTitle, List } from "./SpecificationInform";
import { motion } from "framer-motion";
function Specification() {
  const [onHandle, setOnHandle] = useState("1");
  return (
    <>
      <div style={{ background: "#dcdcdc" }}>
        <div
          style={{
            margin: "0 5vw 1vw",
            background: "#fdfdfd",
            paddingTop: "2vw",
          }}
        >
          {/* 公開意見徵求 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              border: "2px outset #fff",
              boxShadow: "1px 1px 2px 1px #76bdd5",
              display: "flex",
              position: "relative",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2vw",
              margin: "2vw 5vw",
              // border: "4px dotted #fff"  ,
            }}
          >
            <h4 style={{ marginBottom: "2rem" }}> {P1.title}</h4>
            <p>{P1.context}</p>
            <a href={P1.link} target="_blank" style={{ color: "#000" }}>
              {P1.linkTitle}
            </a>
          </motion.div>

          {/* 說明 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0 5vw",
            }}
          >
            {/* 選單 */}
            <motion.div
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ width: "20%" }}
            >
              {ListTitle.map((item) => {
                return (
                  <div>
                    <button
                      onClick={() => setOnHandle(item.id)}
                      key={item}
                      style={{
                        margin: 0,
                        backgroundColor: "Transparent",
                        backgroundRepeat: "no-repeat",
                        whiteSpace: "nowrap", //不換行
                        border: "none",
                        //cursor: "pointer",//鼠標形狀改變
                        overflow: "hidden",
                        fontSize: onHandle === item.id ? "15px" : "5px",
                        color: onHandle === item.id ? "#fff" : "#949494",
                      }}
                    >
                      {item.title}
                    </button>
                  </div>
                );
              })}
            </motion.div>
            {/* 說明內容 */}
            <div
              style={{ width: "75%", display: "flex", flexDirection: "column" }}
            >
              <motion.h5
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                style={{
                  margin: "0.5rem 0",
                  padding: "0 1rem ",
                  borderLeft: "2px solid #F5CE85",
                }}
              >
                {List.filter((item) => item.id === onHandle)[0].title}
              </motion.h5>
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                style={{ fontSize: "1vw" }}
              >
                {List.filter((item) => item.id === onHandle)[0].content}
              </motion.p>

              {/* <h4>{item.title}</h4>
              {item.content} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Specification;
