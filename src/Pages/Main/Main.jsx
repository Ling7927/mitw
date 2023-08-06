import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
// import Background from "../../assets/Background.png";
// import T2023 from "../../assets/T2023.png";
// import Ttext from "../../assets/Titletext.png";
import Main1 from "../../assets/mainbackground.jpg";
import maintitle from "../../assets/Title.png";
import TTime from "../../assets/TTime.png";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import "./Main.css";
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
        className="Mainbackground"
        style={{
          //backgroundSize: window.innerWidth,
          backgroundImage: `url(${Main1})`,
        }}
      >
        <motion.img
          ref={ref}
          src={maintitle}
          className="Maintitle"
          style={{
            transform: isInView ? "translateX(0)" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            margin: 0,
          }}
        ></motion.img>
        <motion.div
          style={{
            // display: "flex",
            // position: "absolute",
            marginRight: "5vw",
            // bottom: "1rem",
            // textAlign: "center",
            // justifyContent: "center",
            // fontSize: "25px",
          }}
        >
          <a
            href="https://mitw.dicom.org.tw/pdf/mitw2023_DM.pdf"
            target="_blank"
            style={{ color: "#fff" }}
          >
            MITW-DM 宣傳單下載 <AiOutlineDownload />
          </a>
        </motion.div>
      </div>
      {/* -------------------DM下載--------------------- */}

      {/* </div> */}
    </>
  );
}

export default Main;
