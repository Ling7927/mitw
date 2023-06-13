import React, { useState } from "react";
import { ResultTabInform } from "./Inform";
import ResultTable from "../Result/Table/ResultTable";
import { Grid } from "@mui/material";
function ResultTab() {
  const [track, setTrack] = useState(1);

  return (
    <>
      {/* Tab */}
      <Grid container spacing={1} alignItems= "center">
        <Grid item sm={2} md={2} lg={2} style={{display:"flex",justifyContent: "flex-end"}}>
          <p
          style={{ margin: 0, padding: 0,fontSize:"2vw"
           // position:"relative",top:"4.5rem" 
          }}
          >Track</p>
        </Grid>
        <Grid item sm={10} md={10} lg={10} style={{display:"flex",justifyContent: "space-evenly",marginBottom:"2rem"}}>
          {ResultTabInform.map((item) => {
            return (
              <>
                <button
                  key={item}
                  style={{ background: "none", border: "none" }}
                  onClick={() => setTrack(item.Id)}
                >
                  <h4
                    style={{
                      fontSize: track === item.Id ? "3vw" : "2vw",
                      color: track === item.Id ? "#000" : "#dcdcdc",
                      // textShadow:
                      //   track === item.Id
                      //     ? "0 0 0.3em #00F9FF, 0 0 0.3em #00F9FF,0 0 0.3em #00F9FF"
                      //     : "",
                      // zIndex: "0",
                      // position:"relative",
                      // top:"2rem"
                    }}
                  >
                    {item.TabTitle}
                  </h4>
                  {/* 滑動圈圈 */}
                  {/* <div
                    style={{
                      display:"flex",
                      justifyContent: "center",
                      width: "3rem",
                      height: "3rem",
                      background: "#fff",
                      position: "relative",
                      top: "-20%",
                      zIndex: "1",
                      padding: "10px",
                      margin: "1rem 1rem 0",
                    }}
                  >
                    <div
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "50%",
                        border:
                          track === item.Id
                            ? "#00F9FF 5px solid"
                            : "#dcdcdc 5px solid",
                        filter:
                          track === item.Id
                            ? " drop-shadow( 0px 0px 3px #00F9FF)"
                            : " ",
                        margin: 0,
                        padding: "1rem",
                      }}
                    />
                  </div> */}
                </button>
              </>
            );
          })}
          {/* 槓槓 */}
          {/* <div
            style={{
              width: "100%",
              height: "0.5rem",
              borderRadius: "5px",
              border: "#00F9FF solid 1px",
              position: "relative",
              bottom: "2rem",
            }}
          /> */}
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
