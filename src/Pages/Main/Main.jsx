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
            marginTop: "5%",
          }}
        ></motion.img>
        <div
          style={{
            width: "25vw",
            height: "25vh",
            position: "absolute",
            right: "35rem",
            bottom: "4rem",
          }}
        >
          <iframe
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
            frameborder="0"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/_9BZXTGUvwI?rel=0"
            width="100%"
          ></iframe>
        </div>
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "sticky",
            marginRight: "5vw",
            top: "3rem",
            alignItems: "flex-end",
            // bottom: "1rem",
            // textAlign: "center",
            // justifyContent: "center",
            // fontSize: "25px",
          }}
        >
          {" "}
          <a
            href="https://goo.gl/maps/yUavFiSYCd612aS37"
            target="_blank"
            style={{ color: "#fff", marginBottom: "3vh" }}
          >
            <h3>台北市信義區松仁路9號(國泰金融會議中心)</h3>{" "}
          </a>
          <a
            href="https://mitw.dicom.org.tw/pdf/mitw2023_DM.pdf"
            target="_blank"
            style={{ color: "#fff" }}
          >
            MITW-DM 宣傳單下載 <AiOutlineDownload />
          </a>
        </motion.div>
      </div>
      {/* <center style={{ background: "#dcdcdc", height: "70vh" }}>
        <iframe
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
          frameborder="0"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/_9BZXTGUvwI?rel=0"
          width="80%"
        ></iframe>
      </center> */}
      {/* -------------------DM下載--------------------- */}

      {/* </div> */}
    </>
  );
}

export default Main;
