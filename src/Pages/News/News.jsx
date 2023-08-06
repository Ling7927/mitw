import React from "react";
import "./News.css";
import Title from "../../assets/Title.png";
import p1Img from "../../assets/example.png";
import Traks from "../../Components/Traklist/Trakslist";
import NewsInform from "./NewsInform.json";
import TTime from "../../assets/TTimeblack.png";

import { Grid } from "@mui/material";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

function News() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <div
        className="AllBackground"
        style={{
          // background:
          //   // "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(32, 65, 63, 0.7) 100%)",
          //   "#000",
          color: "#000",

          // display:"flex"
        }}
      >
        {/* -----------------首圖------------------ */}
        {/* <div>
          <img
            src={Title}
            alt="Title"
            style={{ width: "100%", height: "5%", display: "flex" }}
          />
        </div> */}
        <Grid
          container
          spacing={1}
          direction="column"
          alignContent="center"
          alignItems="center"
          className="AllContentBackground"
        >
          {/* -----------------時程規劃--------------------- */}
          <Grid item display="flex" justifyContent="center" marginBottom="3vw">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "5rem",
              }}
            >
              <img src={TTime} alt="time" style={{ width: "80%" }} />
            </div>
          </Grid>

          {/* <hr style={{ border: 0, height: "1px", background: "#000" }} /> */}

          {/*----------- 意見小組 -----------*/}
          <Grid
            item
            xs={12}
            sm={10}
            md={10}
            lg={10}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
              marginBottom: "3vw",
              padding: 0,
            }}
          >
            <Grid
              container
              direction="row"
              className="ContentBlock"
              style={{
                background: "#f1f1f1",

                // margin: "0 2vh",
                // margin: " 0 8rem",
              }}
            >
              {" "}
              <Grid
                item
                sx={8}
                sm={4}
                md={4}
                lg={4}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  // padding: "0 2rem",
                }}
              >
                <img
                  src={p1Img}
                  alt="p1img"
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Grid>
              {/* 右半文字 */}
              <Grid
                item
                sx={6}
                sm={8}
                md={8}
                lg={8}
                padding="2vw"
                // marginTop="2rem"
                // height="90%"
              >
                <h3
                  className="NewsH3"
                  style={{
                    marginBottom: "3rem",
                    textAlign: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    whiteSpace: "pre",
                  }}
                >
                  {NewsInform.title.p1}
                </h3>
                <ul style={{ margin: 0 }}>
                  <h5>
                    {NewsInform.p1.hash1}
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfPNL-NWe_EWJ7pfYY74hIQr8kuNRFEXYbeROu3Sem8Cq8Qlw/viewform"
                      style={{ color: "#3e78cf" }}
                      target="_blank"
                    >
                      表單
                    </a>
                  </h5>
                  <h5>{NewsInform.p1.hash2}</h5>
                  {NewsInform.p1.context.map((item) => {
                    return (
                      <li style={{ margin: "2rem 0", wordBreak: "normal" }}>
                        <p className="NewsP">{item}</p>
                      </li>
                    );
                  })}
                </ul>
              </Grid>
            </Grid>
          </Grid>

          {/* ----------------預計賽道------------------- */}
          <Grid item xs={10} sm={12} md={12} lg={12} sx={{ width: "80%" }}>
            <Traks />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default News;
