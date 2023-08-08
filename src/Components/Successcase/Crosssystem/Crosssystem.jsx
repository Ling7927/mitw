import React from "react";

import { CrosssystemInform } from "../../../Pages/Successcase/Inform";
import { motion } from "framer-motion";

function Crosssystem() {
  return (
    <>
      {/*--------跨系統互通情境---------*/}
      {CrosssystemInform.map((item, i) => {
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              margin: "1rem 0 3rem 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderBottom: "1px solid #dfdfdf",
            }}
          >
            <h1
              style={{
                marginBottom: "2rem",
                borderBottom: "orange solid 3px",
                padding: "0 2vh 1rem",
                fontWeight: "bold",
              }}
            >
              {item.title}
            </h1>
            <div style={{ width: "70%" }}>{item.img}</div>
          </motion.div>
        );
      })}
    </>
  );
}

export default Crosssystem;
