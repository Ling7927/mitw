import React from "react";
import { GovernmentInform } from "../../../Pages/Successcase/Inform";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import "../Successcase.css";
function Goverment() {
  return (
    <>
      {/* --------政府專案--------- */}
      {GovernmentInform.map((item, i) => {
        return (
          <motion.div
            key={i}
            style={{
              marginTop: "1rem",
              borderBottom: "1px solid #dfdfdf",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            // initial={{
            //   x: "-150%",
            // }}
            // whileInView={{ opacity: 1 }}
            // viewport={{ once: true }}
            // animate={{
            //   x: "0%",
            // }}
            // transition={{ delay: 0.7, duration: 0.7 }}
          >
            <Grid
              container
              spacing={1}
              marginBottom="2rem"
              key={i}
              sx={{ marginTop: "1rem" }}
            >
              {/* 上半 */}
              <Grid
                item
                xs={6}
                sm={6}
                md={3}
                lg={3}
                style={{
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "1vh",
                }}
              >
                <img src={item.img} className="GoverImg" />
                <a
                  href={item.link}
                  target="_blank"
                  style={{
                    textDecoration: "none ",
                    color: "#0081a7",
                  }}
                >
                  {item.linkname}
                </a>
              </Grid>
              <Grid
                item
                sm={12}
                md={9}
                lg={9}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "1vh",
                }}
              >
                <h3>{item.name}</h3>
                <p style={{ whiteSpace: "pre-line" }}>{item.tracks}</p>
              </Grid>
              {/* 下半 */}

              <p style={{ margin: "2rem 1rem 1rem 1vh" }}>{item.introduce}</p>
            </Grid>
          </motion.div>
        );
      })}
    </>
  );
}
export default Goverment;
