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

        <div>
          <img
            src={time}
            alt="time"
            style={{ width: "60%", margin: "5% 20% 3%" }}
          />
        </div>

        {/* <hr style={{ border: 0, height: "1px", background: "#000" }} /> */}
        {/* 意見小組 */}

        <div
          className="p1"
          style={{ margin: "2rem 5rem", background: "#f1f1f1" }}
        >
          <Grid container direction="row"  >
            <Grid item lg={4} style={{ display: "flex"}}>
              <img src={p1Img} alt="p1img" style={{width: "90%" ,height: "90%", objectFit:"cover"   }} height="30%"  />
            </Grid>
            <Grid item lg={8} padding="2rem">
              <h2 style={{ textAlign: "center", justifyContent: "center" }}>
                {NewsInform.title.p1}
              </h2>
              <ul style={{margin:0}}>
                <p>{NewsInform.p1.hash1}</p>
                <p>{NewsInform.p1.hash2}</p>
                {NewsInform.p1.context.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </Grid>
          </Grid>
        </div>
        {/* ----------------預計賽道------------------- */}
        <div
          style={{
            // background: "#90a09f",
            // border: "solid",
            // borderRadius: "5rem 5rem",
            margin: " 10rem 10rem 0 10rem",
            padding: "3rem 0",
          }}
        >
          <div
            className="p2"
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <Traks />
          </div>

          {/* 預計時程 */}
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
        </div>
      </div>
    </>
  );
}

export default News;
