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
  console.log({ id });
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
        alignItems="center"
        justify="center"
        style={{ background: "#fdfdfd", margin: 0 }}
      >
        {/* 上面按鈕 */}
        <Grid item xs={12} md={12} lg={12}>
          <TracksTab setOnHandle={setOnHandle} onHandle={onHandle} />
        </Grid>

        {/* 下半內容 */}
        {/* 左邊選單 */}
        <SectionListTab onHandle={onHandle} />
        {/* 內容 */}
        <Grid item xs={10} sm={10} md={10} lg={10}>
          {/* 輪播照片 */}
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
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{
              width: "80%",
              paddingBottom: "3rem",
              margin: "auto",
            }}
          >
            {TraksTabInform.filter((item) => item.Id === onHandle)[0].List.map(
              (item, i) => {
                return (
                  <div>
                    <Section
                      // open={SectionOpen}
                      item={item}
                      key={i}
                    />
                  </div>
                );
              }
            )}
          </Grid>
        </Grid>

        {/* 內容列表 */}
        {/* <Grid
          item
          xs={10}
          sm={10}
          md={10}
          lg={10}
          sx={{
            width: "80%",
            paddingBottom: "3rem",
            margin: "auto",
          }}
        >
          
        </Grid> */}
      </Grid>
    </div>
  );
}

export default TraksTab;
