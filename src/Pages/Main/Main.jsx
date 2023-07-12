import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
// import Background from "../../assets/Background.png";
// import T2023 from "../../assets/T2023.png";
// import Ttext from "../../assets/Titletext.png";
import Main1 from "../../assets/main.jpg";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

function Main() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      {/* 主視覺 */}
      {/* <div style={{ backgroundColor: "#1f4140" }}> */}
      {/* <div
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
          </div> */}
      <div
        style={{
          //backgroundSize: window.innerWidth,
          backgroundImage: `url(${Main1})`,
          // backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          // // objectFit: "scale-down",
          objectFit: "fill",
          height: "60rem",
          width: "100%",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      />
      {/* </div> */}

      {/* -------------------DM下載--------------------- */}
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          margin: "3rem 3rem",
          fontSize: "25px",
        }}
      >
        <a
          href="https://mitw.dicom.org.tw/pdf/mitw2023_DM.pdf"
          target="_blank"
          // onClick={onButtonClick}
          style={{ color: "#000" }}
        >
          MITW-DM 宣傳單下載 <AiOutlineDownload />
        </a>
      </div>
    </>
  );
}

export default Main;
