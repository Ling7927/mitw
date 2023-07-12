import React, { useState, MouseEvent } from "react";
import ReactCardFlip from "react-card-flip";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Background from "../assets/Background.png";
import { Grid } from "@mui/material";
import T2023 from "../assets/T2023.png";
import Ttext from "../assets/Titletext.png";

import { useRef } from "react";
import { useInView } from "framer-motion";
function Test() {
  // const [Thiscolor, setThisColor] = useState(
  //   "0 0 0.7em #53F3D3, 0 0 0.7em #53F3D3,0 0 0.7em #53F3D3"
  // );
  // const colorlist = [
  //   "0 0 0.7em #F1BB9B, 0 0 0.7em #F1BB9B,0 0 0.7em #F1BB9B",
  //   "0 0 0.7em #F5CE85, 0 0 0.7em #F5CE85,0 0 0.7em #F5CE85",
  //   "0 0 0.7em #6a4c93, 0 0 0.7em #6a4c93,0 0 0.7em #6a4c93",
  // ];
  // const randcolor = (a) => {
  //   const number = Math.floor(Math.random() * a); //回傳一個0~a之間的隨機數
  //   return (setThisColor = colorlist[number]);
  // };
  // let mouseX = useMotionValue(0);
  // let mouseY = useMotionValue(0);

  // function handleMouseMove({ clientX, clientY, currentTarget }) {
  //   let { left, top } = currentTarget.getBoundingClientRect();
  //   let xPosition = clientX - left;
  //   let yPosition = clientY - top;
  //   console.log(xPosition, yPosition);
  // }

  // function handleMouseMove({
  //   currentTarget,
  //   clientX,
  //   clientY,
  // }: MouseEvent) {
  //   let { left, top } = currentTarget.getBoundingClientRect();

  //   mouseX.set(clientX - left);
  //  mouseY.set(clientY - top);
  // }
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  const [open, setOpen] = useState(false);

  const Click = () => {
    setOpen(!open);
    console.log(open);
  };
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped((prevState) => !prevState);
  };
  //

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div>
          This is the front of the card.
          <button onClick={handleClick}>Click to flip</button>
        </div>

        <div>
          This is the back of the card.
          <button onClick={handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
      {/*  */}

      {/* <div>
        <button onClick={Click}>aaa</button>
        {open && <div>rjfvrs</div>}
      </div> */}

      {/* <Grid container>
        <Grid item></Grid>
        <Grid item>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              background: "pink",
              width: "10rem",
              height: "10rem",
              x: 100,
            }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            dd
          </motion.div>
        </Grid>
        <motion.p
          style={{
            color: "#fff",
            marginLeft: "5rem",
            padding: 0,
            fontSize: "2rem",
            textShadow:
              "0 0 0.7em #53F3D3, 0 0 0.7em #53F3D3,0 0 0.7em #53F3D3",
          }}
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          whileHover={{
            scale: 1.3,
            color: "#fff",
            textShadow: "0 0 0.7em black, 0 0 0.7em black,0 0 0.7em black",
          }}
          exit={{ color: "blue", y: "-30px" }}
        >
          aa
        </motion.p>
      </Grid> */}

      {/* <div
        style={{
          background: "yellow",
          width: "10rem",
          height: "10rem",
          textAlign: "center",
        }}
      >
        <div>jgre</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            background: "pink",
            width: "10rem",
            height: "10rem",
          }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          fenjek
        </motion.div>
        <motion.p
          style={{
            color: "#fff",
            marginLeft: "5rem",
            padding: 0,
            fontSize: "2rem",
            textShadow:
              "0 0 0.7em #53F3D3, 0 0 0.7em #53F3D3,0 0 0.7em #53F3D3",
          }}
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          whileHover={{
            scale: 1.3,
            color: "#fff",
            textShadow: "0 0 0.7em black, 0 0 0.7em black,0 0 0.7em black",
          }}
          exit={{ color: "blue", y: "-30px" }}
        >
          dnksl
        </motion.p>
      </div>
      <div
        style={{ height: "100rem", width: "100%", background: "#86608E" }}
        onMouseMove={handleMouseMove}
      > */}
      {/* <motion.div 
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(14, 165, 233, 0.15),
                transparent 80%
              )
            `,
          }}
          
          >

          </motion.div> */}
      {/* <motion.div
          style={{
            width: "30rem",
            height: "30rem",
            background: " radial-gradient(#0047AB, transparent 70%)",
          }}
          // animate={{x:[-150,200,700,680,800,650,600,300,200,100],y:[100,-100,0,400,-100,-200,800,1400,1350,1200]}}
          animate={{ x: [1000], y: [100] }}
          dragConstraints={{ left: -200, right: 1000, top: -300, bottom: 1400 }}
          transition={{ duration: 20, repeat: Infinity }}
        ></motion.div>
        <motion.div
          style={{
            width: "20rem",
            height: "20rem",
            background: " radial-gradient(#FF8000, transparent 70%)",
          }}
          animate={{
            x: [-50, 150, 600, 700, 1300, 1200, 1400, 1450, 900, 100, 50],
            y: [100, -300, -400, -500, -450, 300, 600, 900, 800, 750, 300],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div> */}
      {/* <div style={{ border:"1px solid yellow"}}>
          <svg
            width="521"
            height="516"
            viewBox="0 0 521 516"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="260.5" cy="260.5" r="260.5" fill="white" />
          </svg>
      </div> */}
      {/* <div style={{ backgroundColor: "#000" }}>
        <div
          style={{
            backgroundSize: window.innerWidth,
            backgroundImage: `url(${Background})`,
            backgroundAttachment: "fixed",
            objectFit: "scale-down",
            height: "30rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.img
            ref={ref}
            src={T2023}
            style={{
              transform: isInView ? "translateX(10rem)" : "translateX(-200px)",
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
      </div> */}
    </>
  );
}

export default Test;
