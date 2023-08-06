import React, { useState } from "react";
import { ResultTabInform } from "./Inform";
import ResultTable from "../Result/Table/ResultTable";
import { motion } from "framer-motion";
import { Grid, duration } from "@mui/material";
function ResultTab() {
  const [track, setTrack] = useState(1);

  return (
    <div className="AllContentBackground">
      {/* Tab */}
      <Grid
        container
        spacing={1}
        gap={1}
        alignItems="center"
        style={{
          marginBottom: "2rem",
          padding: "3vw 10vw 2vw",
          justifyContent: "center",
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
            style={{ justifyContent: "space-around" }}
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
                                ? "0 1rem 4rem rgba(0, 249, 255,0.35),0 0.5rem 3rem #00F9FF, 0 0 3rem #00F9FF,0 0 3rem #53F3D3"
                                : "",
                            height: track === item.Id ? "5vw" : "3vw",
                            width: track === item.Id ? "5vw" : "3vw",
                            borderRadius: "50%",
                            position: "absolute",
                            top: 0,
                          }}
                        />
                      )}
                      <h4
                        style={{
                          fontSize: track === item.Id ? "4vw" : "2.5vw",
                          // color: track === item.Id ? "#fff" : "#dcdcdc",
                          color: "#fff",
                          // textShadow:
                          //   track === item.Id
                          //     ? "0.6px 0.6px #dcdcdc,1px 0.8px #23f0c7, 1.3px 1px #108998"
                          //     : "0.5px 0.5px 0.6px #dcdcdc,0.6px 0.8px #00F9FF, 0.7px 0.7px #53F3D3",

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
                      </h4>
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
        <h3
          style={{
            margin: 0,
            // borderStyle: " solid ",
            // borderWidth: " 4px",
            // padding: "1vw",
            // borderImage: "linear-gradient(#23f0c7, #108998,#00F9FF) 20 ",
            color: "#fff",
            marginBottom: "2vw",
            // fontSize: "4vw",
          }}
        >
          {ResultTabInform.filter((item) => item.Id === track)[0].ContentTitle}
        </h3>

        {/* 表格 */}
        <ResultTable id={track} />
      </div>
    </div>
  );
}

export default ResultTab;
