import React, { useEffect, useState } from "react";
import { TraksTabInform } from "./TraksTabInform";
import Section from "./Section";
import TracksTab from "./TracksTab";
import SectionListTab from "./SectionListTab";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
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
    <Grid
      container
      spacing={1}
      alignItems="flex-start"
      justify="center"
      style={{ background: "#fdfdfd", margin: 0, height: "100%" }}
    >
      {/* 上面按鈕 */}
      <Grid item xs={12} md={12} lg={12}>
        <TracksTab setOnHandle={setOnHandle} onHandle={onHandle} />
      </Grid>

      {/* 下半內容 */}
      {/* 左邊選單 */}
      <SectionListTab onHandle={onHandle} Click={Click} setClick={setClick} />

      {/* 內容 */}
      <Grid item xs={10} sm={10} md={10} lg={10}>
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
            width: "80%",
            paddingBottom: "3rem",
            margin: "0 auto",
          }}
        >
          {TraksTabInform.find((item) => item.Id === onHandle).List.map(
            (sc) => {
              return (
                <section id={sc.id} key={sc.id}>
                  {" "}
                  {sc.content}{" "}
                </section>
              );
            }
          )}
          {/* {
            TraksTabInform.find((item) => item.Id === onHandle).List.find(
              (item) => item.id === Click
            ).content
          } */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TraksTab;
