import React, { useEffect, useState } from "react";
import { TraksTabInform } from "./TraksTabInform";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import PhotoSlider from "../../Components/Slider/PhotoSlider";
import { Grid } from "@mui/material";

import { useParams } from "react-router-dom";

function TraksTab() {
  const { id } = useParams();
  const [onHandle, setOnHandle] = useState(id || "1");
  const [Click, setClick] = useState("0");

  return (
    <>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "5% ",
          width: "80%",
          background:"#f1f1f1"
        }}
      > */}
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ background: "#f1f1f1" }}
      >
        {/* 上面按鈕 */}

        <Grid item>
          {TraksTabInform.map((item) => {
            //已選取
            if (onHandle === item.Id)
              return (
                <button
                  key={item}
                  onClick={() => setOnHandle(item.Id)}
                  style={{
                    position: "absolute",
                    top: "10%",
                    left: "10%",
                    background: "none",
                    border: 0,
                    padding: 0,
                    // boxShadow: " 0px 3px 1px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "4rem",
                      color: "#1e1e1e",
                      margin: 0,
                    }}
                  >
                    {item.TabTitle}
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#1e1e1e",
                      margin: 0,
                      padding: "1rem",
                      background: "#f1f1f1",
                      position: "relative",
                      top: "-2rem",
                    }}
                  >
                    {item.ContentTitle}
                  </p>
                </button>
              );
            else
             //未選取
              return (
                <button
                  key={item}
                  onClick={() => setOnHandle(item.Id)}
                  style={{
                    background: "none",
                    border: 0,
                    padding: "4rem 1.5rem 0",
                    // boxShadow: " 0px 3px 1px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.5rem",
                      color: "#dddddd",
                      margin: 0,
                    }}
                  >
                    {item.TabTitle}
                  </p>
                </button>
              );
            
          })}
        </Grid>
        {/* 內容 */}
        {/* <div
          style={{
            backgroundColor: "#fff",
            padding: "2rem",
            marginBottom: "10px",
            borderRadius: "10px 10px 10px 10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        > */}
        {/* 輪播照片 */}
        <div
          style={{
            width: "60%",
            margin: "2rem",
          }}
        >
          <PhotoSlider
            images={
              TraksTabInform.filter((item) => item.Id === onHandle)[0].Img
            }
          />
        </div>
        {/* 內容選單 */}

        <Grid item style={{ width: "80%" }}>
          {TraksTabInform.filter((item) => item.Id === onHandle)[0].List.map(
            (item, i) => {
              return (
                <div>
                  <button
                    style={{
                      height: "2rem",
                      width: "80%",
                      border: "none",
                      borderBottom: "#000 1px solid",
                      margin: " 1rem 0",
                      padding: "0.3rem",
                    }}
                    onClick={() => setClick(item.id)}
                    key={item.id}
                  >
                    {item.Sc}
                    {Click === item.id ? <GoTriangleDown /> : <GoTriangleUp />}
                  </button>
                </div>
              );
            }
          )}
        </Grid>
        {/* </div> */}
      </Grid>
      {/* </div> */}
    </>
  );
}

export default TraksTab;
