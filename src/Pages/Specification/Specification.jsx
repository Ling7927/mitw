import { React, useState } from "react";
import { P1, ListTitle, List } from "./SpecificationInform";
import "./Specification.css";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
function Specification() {
  const [onHandle, setOnHandle] = useState("1");
  return (
    <>
      <div style={{ background: "#d9d9d9" }}>
        <div
          className="Specification_background"
          // style={{
          //   margin: "0 5vw ",
          //   background: "#fdfdfd",
          //   padding: "2vw 0",
          // }}
        >
          {/* 公開意見徵求 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              // border: "2px outset #fff",
              // boxShadow: "1px 1px 2px 1px #76bdd5",
              display: "flex",
              position: "relative",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2vw",
              margin: "2vw 5vw 0",
            }}
          >
            <h4 style={{ marginBottom: "2rem" }}> {P1.title}</h4>
            <p>{P1.context}</p>
            <a href={P1.link} target="_blank" style={{ color: "#000" }}>
              {P1.linkTitle}
            </a>
            <hr style={{ width: "100%" }} />
          </motion.div>

          {/* 說明 */}

          <Grid container style={{}}>
            <Grid
              item
              sm={12}
              md={12}
              lg={3}
              style={{ display: "flex", justifyContent: "center" }}
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
                          fontSize: onHandle == item.id ? "15px" : "5px",
                          color: onHandle === item.id ? "#000" : "#949494",
                        }}
                      >
                        {item.title}
                      </button>
                    </div>
                  );
                })}
              </motion.div>
            </Grid>
            {/* 說明內容 */}
            <Grid item sm={12} md={12} lg={9}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0 5vw 2vh",
                }}
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
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Specification;
