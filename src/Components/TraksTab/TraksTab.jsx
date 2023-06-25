import React, { useEffect, useState } from "react";
import { TraksTabInform } from "./TraksTabInform";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import PhotoSlider from "../../Components/Slider/PhotoSlider";
import { Grid, Box } from "@mui/material";

import { useParams } from "react-router-dom";

function TraksTab() {
  const { id } = useParams();
  const [onHandle, setOnHandle] = useState(id || "1");
  const [Click, setClick] = useState("0");

  return (
    <>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center"
        position="relative"
        style={{ background: "#f1f1f1" }}
      >
        {/* 上面按鈕 */}

        <Grid
          item
          xs={2}
          md={2}
          lg={2}
          columns={20}
          style={{ justifyContent: "center", width: "100%" }}
        >
          <Grid container spacing={1} direction="row" style={{ width: "100%" }}>
            <Grid item sm={12} md={3} lg={3}>
              {/* 目前賽道 */}
              {TraksTabInform.filter((item) => item.Id === onHandle).map(
                (item) => {
                  return (
                    <Box
                      key={item}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        border: 0,
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "3rem",
                        }}
                      >
                        {item.TabTitle}
                      </div>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontSize: "15px",
                          color: "#1e1e1e",
                          margin: 0,
                          padding: "1rem",
                          background: "#f1f1f1",
                          position: "relative",
                          top: "-25px",
                        }}
                      >
                        {item.ContentTitle}
                      </div>
                    </Box>
                  );
                }
              )}
            </Grid>
            <Grid
              item
              sm={12}
              md={9}
              lg={9}
              gap={3}
              style={{
                display: "flex",
                overflowX: "auto",
                paddingBottom: "2vw",
              }}
            >
              {TraksTabInform.filter((item) => item.Id !== onHandle).map(
                (item) => {
                  return (
                    <button
                      key={item}
                      onClick={() => setOnHandle(item.Id)}
                      style={{
                        background: "none",
                        border: 0,

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
                }
              )}
            </Grid>

            {/* {TraksTabInform.map((item) => {
              //已選取
              if (onHandle === item.Id)
                return (
                  <Grid item sm={2} md={2} lg={2}>
                    <button
                      key={item}
                      onClick={() => setOnHandle(item.Id)}
                      style={{
                        position: "absolute",
                        top: "5%",
                        left: "5%",
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
                  </Grid>
                );
              //未選取
              else
                return (
                  <Grid item sm={1} md={1} lg={1}>
                    <button
                      key={item}
                      s
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
                  </Grid>
                );
            })} */}
          </Grid>
        </Grid>
        {/* 內容 */}

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

        <Grid item style={{ width: "80%", paddingBottom: "3rem" }}>
          {TraksTabInform.filter((item) => item.Id === onHandle)[0].List.map(
            (item, i) => {
              return (
                <div>
                  <button
                    style={{
                      height: "2rem",
                      width: "100%",
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
      </Grid>
    </>
  );
}

export default TraksTab;
