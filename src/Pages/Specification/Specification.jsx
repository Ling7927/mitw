import { React, useState } from "react";
import { HashLink as Link } from "react-router-hash-link"; //section nagetive on same page

import { P1, ListTitle, List } from "./SpecificationInform";
import "./Specification.css";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
function Specification() {
  const [onHandle, setOnHandle] = useState("1");
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(  180deg,  #ffffff 0%,  #6aadd9 0.01%,  rgba(0, 249, 255, 0) 56.56%,  rgba(240, 240, 240, 0) 100%)",
          minHeight: "100%",
        }}
      >
        <div className="Specification_background">
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
              margin: "2vw 5vh 0",
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

          <Grid container sx={{ margin: 0 }}>
            <Grid
              item
              xs={2}
              sm={2}
              md={2}
              lg={2}
              style={{
                display: "flex",
                justifyContent: "center",
                paddingLeft: "1vh",
              }}
            >
              {/* 選單 */}
              <motion.div
                initial={{ x: -200 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
                //style={{ width: "20%" }}
              >
                <div style={{ position: "sticky", top: "3rem" }}>
                  {ListTitle.map((item) => {
                    return (
                      <div style={{ marginBottom: "5px" }}>
                        <Link
                          to={`#${item.id}`}
                          onClick={() => setOnHandle(item.id)}
                          key={item.id}
                          style={{
                            margin: 0,
                            backgroundColor: "Transparent",
                            backgroundRepeat: "no-repeat",
                            //whiteSpace: "nowrap", //不換行
                            border: "none",
                            //cursor: "pointer",//鼠標形狀改變
                            overflow: "hidden",
                            fontSize: onHandle === item.id ? "1.25rem" : "1rem",
                            color: onHandle === item.id ? "#000" : "#949494",
                          }}
                          smooth
                        >
                          {item.title}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </Grid>
            {/* 說明內容 */}
            <Grid item xs={9} sm={9} md={9} lg={9} padding="0 2vh">
              {List.map((item) => {
                return (
                  <section
                    key={item.id}
                    id={item.id}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      paddingBottom: "  2vh",
                    }}
                  >
                    <motion.h5
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1.2 }}
                      className="SpecificationH5"
                      style={{
                        margin: "1rem 0",
                        padding: "0 1rem  ",
                        borderLeft: "4px solid #F5CE85",
                        fontWeight: "bold",
                      }}
                    >
                      {item.title}
                    </motion.h5>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      {item.content}{" "}
                    </motion.div>
                  </section>
                );
              })}

              {/* ===============origin================== */}
              {/* <div
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
                    margin: "1rem 0",
                    padding: "0 1rem  ",
                    borderLeft: "4px solid #F5CE85",
                    fontWeight: "bold",
                  }}
                >*/}
              {/* {List.filter((item) => item.id === onHandle)[0].title} */}
              {/* </motion.h5>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  {List.filter((item) => item.id === onHandle)[0].content}
                </motion.div>
              </div> */}
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Specification;
