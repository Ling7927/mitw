import React, { useState } from "react";
import { ResultTabInform } from "./Inform";
import ResultTable from "../Result/Table/ResultTable";
import { Grid } from "@mui/material";
function ResultTab() {
  const [track, setTrack] = useState(1);

  return (
    <>
      {/* Tab */}
      <Grid
        container
        spacing={1}
        gap={1}
        alignItems="center"
        style={{ marginBottom: "2rem" }}
      >
        <Grid
          item
          sm={2}
          md={2}
          lg={2}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <p
            style={{
              margin: 0,
              padding: 0,
              fontSize: "2vw",
              color: "#090908",
              // position:"relative",top:"4.5rem"
            }}
          >
            Track
          </p>
        </Grid>
        <Grid item sm={9} md={9} lg={9}>
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
                        background: "none",
                        border: "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      onClick={() => setTrack(item.Id)}
                    >
                      <h4
                        style={{
                          fontSize: track === item.Id ? "4.5vw" : "2vw",
                          color: track === item.Id ? "#fff" : "#dcdcdc",
                          textShadow:
                            track === item.Id
                              ? "0 0 0.3em #00F9FF, 0 0 0.3em #00F9FF,0 0 0.3em #00F9FF"
                              : "",
                          zIndex: "5",
                          // position:"relative",
                          // top:"2rem"
                        }}
                      >
                        {item.TabTitle}
                        {/* 滑動圈圈背景 */}
                        <div
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
                        >
                          {/* 滑動圈圈 */}

                          <div
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
                        </div>
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

      {/* 表格 */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>
          {ResultTabInform.filter((item) => item.Id === track)[0].ContentTitle}
        </h2>
      </div>

      <ResultTable id={track} />
    </>
  );
}

export default ResultTab;
