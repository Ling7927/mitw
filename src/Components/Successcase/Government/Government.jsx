import React from "react";
import { GovernmentInform } from "../../../Pages/Successcase/Inform";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
function Goverment() {
  return (
    <>
      {GovernmentInform.map((item, i) => {
        return (
          <motion.div
            key={i}
            style={{
              marginTop: "1rem",
              // border:"2px solid #orange"
            }}
            initial={{
              x: "-150%",
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            animate={{
              x: "0%",
            }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <Grid container spacing={1} marginBottom="2rem" alignItems= "center" key={i}>
              <Grid item sm={12} md={3} lg={3}>
                <div style={{ width: "60%" }}>{item.img}</div>
              </Grid>
              <Grid item sm={12} md={9} lg={9}>
                {/* 上半 */}
              <a
                href={item.link}
                target="_blank"
                style={{ textDecoration: "none ", color: "#000" }}
              >
                <h3>{item.name}</h3>
              </a>
              <div style={{ whiteSpace: "pre-line" }}>{item.traks}</div>

              </Grid>
              
              
              {/* 下半 */}
              <div style={{margin:"2rem 1rem 1rem 1rem"}}>{item.introduce}</div>

            </Grid>
          </motion.div>
        );
      })}
    </>
  );
}
export default Goverment;
