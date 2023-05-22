import React from "react";
import "./News.css";
import { AiOutlineDownload } from "react-icons/ai";

import Traks from "../../Components/Traklist/Trakslist";
import Title from "../../assets/Title.png";
import NewsInform from "./NewsInform.json";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Background from "../../assets/Background.png";
import T2023 from "../../assets/T2023.png";
import Ttext from "../../assets/Titletext.png";

function News() {

  
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <div
        style={{
          background: "linear-gradient( #204241 30%,#26595a 80%, #33989d 100%)",
          color: "#fff",
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

        <div style={{ backgroundColor: "#000" }}>
          <div
            style={{
              backgroundSize: window.innerWidth,
              backgroundImage: `url(${Background})`,
              backgroundAttachment: "fixed",
              objectFit: "scale-down",
              height: "20rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.img
              ref={ref}
              src={T2023}
              style={{
                transform: isInView
                  ? "translateX(10rem)"
                  : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            ></motion.img>
            <motion.img
              ref={ref}
              src={Ttext}
              style={{
                position: "relative",
                top: "-2rem",
                transform: isInView ? "translateX(-3rem)" : "translateX(300px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            ></motion.img>
          </div>
        </div>

        {/* ---------------------------------------- */}
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            margin: "10rem 10rem",
            fontSize: "25px",
          }}
        >
          <a
            href="https://mitw.dicom.org.tw/pdf/mitw2023_DM.pdf"
            target="_blank"
            // onClick={onButtonClick}
            style={{ color: "#fff" }}
          >
            MITW-DM 宣傳單下載 <AiOutlineDownload />
          </a>
        </div>
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

          <hr style={{ border: 0, height: "1px", background: "#fff" }} />

          <div className="p1">
            <h2 style={{ textAlign: "center", justifyContent: "center" }}>
              {NewsInform.title.p1}
            </h2>
            <ul>
              <p>{NewsInform.p1.hash1}</p>
              <p>{NewsInform.p1.hash2}</p>
              {NewsInform.p1.context.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>

          <hr style={{ border: 0, height: "1px", background: "#fff" }} />
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
                  {NewsInform.p3.context.map((item,i) => {
                    return <li style={{ margin: "0.5rem" }} key={i}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
