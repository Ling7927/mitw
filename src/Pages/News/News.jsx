import React from "react";
import "./News.css";
import Title from "../../assets/Title.png";
import time from "../../assets/Timee.png";
import p1Img from "../../assets/圖片1.png";
import Traks from "../../Components/Traklist/Trakslist";
import NewsInform from "./NewsInform.json";

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
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(32, 65, 63, 0.7) 100%)",
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
        >
          {/* -----------------時程規劃--------------------- */}
          <Grid item display="flex" justifyContent="center">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "5rem",
              }}
            >
              <img src={time} alt="time" style={{ width: "80%" }} />
            </div>
          </Grid>

          {/* <hr style={{ border: 0, height: "1px", background: "#000" }} /> */}

          {/*----------- 意見小組 -----------*/}
          <Grid
            item
            sm={12}
            md={12}
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <Grid
              container
              direction="row"
              style={{ background: "#f1f1f1", width: "80%" }}
            >
              <Grid
                item
                sm={12}
                md={12}
                lg={4}
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <img
                  src={p1Img}
                  alt="p1img"
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Grid>
              <Grid
                item
                sm={12}
                md={12}
                lg={7}
                padding="2rem"
                marginTop="2rem"
                height="90%"
              >
                <h2
                  style={{
                    marginBottom: "3rem",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  {NewsInform.title.p1}
                </h2>
                <ul style={{ margin: 0 }}>
                  <p>{NewsInform.p1.hash1}</p>
                  <p>{NewsInform.p1.hash2}</p>
                  {NewsInform.p1.context.map((item) => {
                    return <li style={{ margin: "2rem 0" }}>{item}</li>;
                  })}
                </ul>
              </Grid>
            </Grid>
          </Grid>

          {/* ----------------預計賽道------------------- */}
          <Grid item>
            <Traks />

            {/* ---------預計時程------------*/}
            {/*  <hr />

           <div className="p3">
            <h2 style={{ textAlign: "center", justifyContent: "center" }}>
              {NewsInform.title.p3}
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-betwee",
                gap: "5rem",
              }}
            >
              <div style={{ width: "50%" }}>
                <img
                  src={Title}
                  style={{ width: "100%", margin: "0.5rem" }}
                ></img>
              </div>
              <div style={{ width: "50%" }}>
                <ul style={{ margin: 0 }}>
                  {NewsInform.p3.context.map((item, i) => {
                    return (
                      <li style={{ margin: "0.5rem" }} key={i}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div> */}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default News;
