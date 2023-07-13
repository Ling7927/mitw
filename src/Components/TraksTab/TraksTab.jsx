import React, { useEffect, useState } from "react";
import { TraksTabInform } from "./TraksTabInform";
import Section from "./Section";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import PhotoSlider from "../../Components/Slider/PhotoSlider";
import { Grid, Box } from "@mui/material";
import "./TraksTab.css";
import { useParams } from "react-router-dom";

function TraksTab() {
  const { id } = useParams();
  const [onHandle, setOnHandle] = useState(id || "1"); //Trackbutton
  const [Click, setClick] = useState("0"); //section
  const [SectionOpen, setSectionOpen] = useState(false);
  const SectionClick = () => {
    setSectionOpen(!SectionOpen);
  };

  return (
    <div>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ background: "#fdfdfd", margin: 0 }}
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
            <Grid item xs={12} sm={12} md={3} lg={3}>
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
                          fontSize: "4rem",
                        }}
                      >
                        {item.TabTitle}
                      </div>
                      <div
                        style={{
                          fontWeight: "bold",
                          fontSize: "1rem",
                          fontSize: "15px",
                          color: "#1e1e1e",
                          margin: 0,
                          padding: "1rem",
                          background: "#fdfdfd",
                          position: "relative",
                          top: "-30px",
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
              xs={12}
              sm={12}
              md={9}
              lg={9}
              style={{
                display: "flex",
                // overflowX: "auto",
                paddingBottom: "3vw",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Grid container columns={18}>
                {TraksTabInform.filter((item) => item.Id !== onHandle).map(
                  (item) => {
                    return (
                      <Grid item xs={2} sm={2}>
                        <button
                          className="Tabsbutton"
                          key={item}
                          onClick={() => setOnHandle(item.Id)}
                        >
                          {item.TabTitle}
                        </button>
                      </Grid>
                    );
                  }
                )}
              </Grid>
            </Grid>
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
                  {/* <button
                    style={{
                      height: "2rem",
                      width: "100%",
                      border: "none",
                      borderBottom: "#000 1px solid",
                      margin: " 1rem 0",
                      padding: "0.3rem",
                    }}
                    onClick={() => {
                      SectionClick();
                      setClick(item.id);
                    }}
                  >
                    {item.Sc}
                    {SectionOpen && Click === item.id ? (
                      <GoTriangleDown />
                    ) : (
                      <GoTriangleUp />
                    )}
                  </button> */}
<Section 
// open={SectionOpen} 
item={item} key={i}/>
                  {/* {Click === item.id ? <div>{item.content}</div> : ""} */}
                  {/* {SectionOpen && Click === item.id ? (
                    <div>{item.content}</div>
                  ) : (
                    ""
                  )} */}
                </div>
              );
            }
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default TraksTab;
