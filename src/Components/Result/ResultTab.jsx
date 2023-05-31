import React, { useState } from "react";
import { ResultTabInform } from "./Inform";
import ResultTable from "../Result/Table/ResultTable";
import { Grid } from "@mui/material";
function ResultTab() {
  const [track, setTrack] = useState(1);

  return (
    <>
      {/* Tab */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h4 style={{ marginRight: "3rem" }}>Track</h4>
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
                    fontSize:track=== item.Id ? "3rem":"2rem",
                    color: track === item.Id ? "#fff" : "#dcdcdc",
                    textShadow:
                      track === item.Id
                        ? "0 0 0.3em #00F9FF, 0 0 0.3em #00F9FF,0 0 0.3em #00F9FF"
                        : "",
                    zIndex: "0",
                  }}
                >
                  {item.TabTitle}
                </h4>
                {/* 滑動圈圈 */}
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    background: "#fff",
                    position: "relative",
                    top: "-20%",
                    zIndex: "1",
                    paddingTop: "5px",
                    margin:"1rem"
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
                      padding:"1rem"
                    }}
                  />
                </div>
              </button>
            </>
          );
        })}
      </div>

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
