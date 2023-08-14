import React, { useState } from "react";
import { ResultTabInform } from "./Inform";
import { trackstable } from "./Tables";
import ResultTable from "../Result/Table/ResultTable";
import { motion } from "framer-motion";
import { Grid, duration, Box } from "@mui/material";
import "./Result.css";
function ResultTab() {
  const [track, setTrack] = useState(1);
  const [table, setTable] = useState([]);

  // useEffect(() => {
  //   setTable(trackstable[track]);
  // }, [track]);
  return (
    <div
      //className="AllContentBackground"
      style={{
        background: "#fdfdfd",
      }}
    >
      {/* Tab */}

      <Grid
        container
        gap={1}
        alignItems="center"
        style={{
          padding: "2vh",
          justifyContent: "center",
          position: "sticky",
          top: "5rem",
          background: "#fdfdfd",
          zIndex: 500,
        }}
      >
        <Grid
          item
          xs={2}
          sm={2}
          md={2}
          lg={2}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h1
            style={{
              margin: 0,
              padding: 0,
              color: "#000",
              // textShadow:
              //   "0.5px 0.5px 1px #dcdcdc,0.6px 1px #00F9FF, 1px 0.9px #53F3D3",
              // position:"relative",top:"4.5rem"
            }}
          >
            Track
          </h1>
        </Grid>
        <Grid item xs={9} sm={9} md={9} lg={9}>
          <Grid
            container
            spacing={1}
            style={{ justifyContent: "space-evenly" }}
          >
            {ResultTabInform.map((item, i) => {
              return (
                <>
                  <Grid item style={{ display: "flex", alignItems: "center" }}>
                    <button
                      key={i}
                      style={{
                        // background: track === item.Id ? " #00F9FF" : "none",
                        // boxShadow:
                        //   track === item.Id
                        //     ? "0 0.5rem 2rem #00F9FF, 0 0 1rem #00F9FF,0 0 1rem #53F3D3"
                        //     : "",
                        // height: track === item.Id ? "5vw" : "3vw",
                        // width: track === item.Id ? "5vw" : "3vw",
                        // borderRadius: "50%",
                        background: "none",
                        border: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                      }}
                      onClick={() => setTrack(item.Id)}
                    >
                      {/* 背景 */}

                      {track === item.Id && (
                        <motion.div
                          layoutId="active-pill"
                          transition={{ duration: 0.6 }}
                          style={{
                            background:
                              track === item.Id
                                ? " rgba(0, 249, 255,0.75)"
                                : "none",

                            boxShadow:
                              track === item.Id
                                ? "0 1rem 1.25rem rgba(0, 249, 255,0.35),0 0.5rem 1.25rem #00F9FF, 0 0 1.25rem #00F9FF,0 0 1.25rem #53F3D3"
                                : "",
                            height: "3vw",
                            width: "3vw",
                            filter: "blur(5px)",
                            borderRadius: "50%",
                            position: "absolute",
                          }}
                        />
                      )}
                      <p
                        style={{
                          fontSize: track === item.Id ? "2.5rem" : "2rem",
                          color: track === item.Id ? "#fff" : "#8b8b8b",
                          // color: "#fff",
                          // textShadow:
                          //   track === item.Id
                          //     ? "0.6px 0.6px #dcdcdc,1px 0.8px #23f0c7, 1.3px 1px #108998"
                          //     : "0.5px 0.5px 0.6px #dcdcdc,0.6px 0.8px #00F9FF, 0.7px 0.7px #53F3D3",
                          margin: 0,
                          position: "relative",
                          // top:"2rem"
                        }}
                      >
                        {item.TabTitle}

                        {/* 滑動圈圈背景 */}
                        {/* <div
                          style={{
                            display: "flex",
                            alignItems: track === item.Id ? "flex-end" : "",
                            justifyContent: track === item.Id ? "center" : "",
                            width: track === item.Id ? "5vw" : "2vw",
                            height: track === item.Id ? "4vw" : "2vw",
                            position: "relative",
                            top: track === item.Id ? "-4vh" : 0,

                            zIndex: "7",
                            // background: track === item.Id ? "#fff" : "none",

                            boxShadow:
                              track === item.Id
                                ? " -20px -2px  10px #fff,20px -2px  5px #000,0px -2px  10px #fff," //左外,右外,上外,上內
                                : " ",
                          }}
                        > */}
                        {/* 滑動圈圈 */}

                        {/* <div
                            style={{
                              display: "flex",
                              position: "relative",

                              width: track === item.Id ? "3vw" : "2vw",
                              height: track === item.Id ? "3vw" : "2vw",
                              borderRadius: "50%",
                              background: "#fffff0",
                              // border:
                              //   track === item.Id
                              //     ? "#00F9FF 4px solid"
                              //     : "#dcdcdc 4px solid",
                              filter:
                                track === item.Id
                                  ? " drop-shadow( 0px 0px 4px #00F9FF) drop-shadow( 0px 0px 4px #00F9FF) drop-shadow( 0px 0px 6px #00F9FF) drop-shadow( 0px 0px 7px #00F9FF)"
                                  : " ",
                              boxShadow:
                                track === item.Id
                                  ? "-0.1px -0.5px 1px 1px rgba(20%,20%,40%,0.5) inset"
                                  : "-0.1px -0.5px 1px 1px rgba(9%,9%,8%,0.4) inset",
                              zIndex: "9",
                              // padding: "1vw",
                            }}
                          />
                        </div> */}
                      </p>
                    </button>
                  </Grid>
                </>
              );
            })}
            {/* <Grid
              item
              sm={12}
              md={12}
              lg={12}
              style={{ position: "absolute", top: "33rem" }}
            >*/}
            {/* 槓槓 */}
            {/*  <div
                style={{
                  width: "100%",
                  height: "0.45rem",
                  borderRadius: "5px",
                  border: "#00F9FF solid 1px",
                  bottom: "2rem",
                  zIndex: "6",
                }}
              />
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        {/* 表格賽道標題 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // textShadow:
            //   "0.2px 0.2px #e6ebeb,0.2px 0.3px 0.3px #00F9FF, 0.2px 0.5px 0.5px #53F3D3",
            paddingBottom: "2rem",
          }}
        >
          <h1
            style={{
              margin: "5vh",
              // borderStyle: " solid ",
              // borderWidth: " 4px",
              // padding: "1vw",
              // borderImage: "linear-gradient(#23f0c7, #108998,#00F9FF) 20 ",
              color: "#000",
              marginBottom: "2vw",
              // fontSize: "4vw",
            }}
          >
            {
              ResultTabInform.filter((item) => item.Id === track)[0]
                .ContentTitle
            }
          </h1>

          {/* 表格 */}
          {/* <ResultTable id={track} /> */}

          {trackstable[track].map((item, index) => (
            <center key={index} style={{ margin: "2rem 0" }} className="Tables">
              {item.table}
            </center>
          ))}
        </div>
      </Grid>
    </div>
  );
}

export default ResultTab;
