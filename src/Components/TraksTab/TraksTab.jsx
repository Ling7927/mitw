import React, { useEffect, useState } from "react";
import { TraksTabInform } from "./TraksTabInform";
import Section from "./Section";
import TracksTab from "./TracksTab";
import SectionListTab from "./SectionListTab";
import PhotoSlider from "../../Components/Slider/PhotoSlider";
import { Grid, Box } from "@mui/material";
import "./TraksTab.css";
import { useParams } from "react-router-dom";

function TraksTab() {
  const { id } = useParams();
  const [onHandle, setOnHandle] = useState(id || "1"); //Trackbutton
  const [Click, setClick] = useState("1"); //section
  // const [SectionOpen, setSectionOpen] = useState(false);
  // const SectionClick = () => {
  //   setSectionOpen(!SectionOpen);
  // };
  useEffect(() => {
    setClick("1");
  }, [onHandle]);
  return (
    <Box sx={{ background: "#fdfdfd", margin: 0, minHeight: "100vh" }}>
      {/* <Grid
        container
        spacing={1}
        alignItems="flex-start"
        justify="center"
        style={{ background: "#fdfdfd", margin: 0, minHeight: "100vh" }}
      > */}
      {/* 上面按鈕 */}

      <TracksTab setOnHandle={setOnHandle} onHandle={onHandle} />

      {/* 下半內容 */}
      {/* 左邊選單 */}
      <Grid
        container
        sx={{
          justifyContent: "space-around",
        }}
      >
        <SectionListTab onHandle={onHandle} Click={Click} setClick={setClick} />

        {/* 內容 */}
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          lg={9}
          sx={{
            margin: 0,
          }}
        >
          {/* 輪播照片 */}
          {TraksTabInform.filter((item) => item.Id === onHandle)[0].Img.length >
          0 ? (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={{ marginBottom: "2rem" }}
            >
              <div
                style={{
                  width: "70%",
                  margin: "auto",
                }}
              >
                <PhotoSlider
                  images={
                    TraksTabInform.filter((item) => item.Id === onHandle)[0].Img
                  }
                />
              </div>
            </Grid>
          ) : (
            ""
          )}

          {/* 內容列表 */}
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{
              // width: "80%",
              padding: "0 3rem 3rem 0",
              margin: 0,
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            {TraksTabInform.find((item) => item.Id === onHandle).List.map(
              (sc) => {
                return (
                  <section id={sc.id} key={sc.id}>
                    <h1
                      style={{
                        fontWeight: "bold",
                        borderLeft: "4px orange solid",
                        paddingLeft: "1rem",
                        margin: "2rem 0",
                      }}
                    >
                      {sc.Sc}
                    </h1>
                    {sc.content}{" "}
                  </section>
                );
              }
            )}
            {/* ===== */}
            {/* {
            TraksTabInform.find((item) => item.Id === onHandle).List.find(
              (item) => item.id === Click
            ).content
          } */}
            {/* </Grid>*/}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TraksTab;
