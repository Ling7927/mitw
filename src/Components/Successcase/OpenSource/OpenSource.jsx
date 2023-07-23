import React from "react";
import { OpenSourceInform } from "../../../Pages/Successcase/Inform";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

function OpenSource() {
  return (
    <>
      {/* --------開源產品---------- */}
      {OpenSourceInform.map((item, i) => {
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            // left->right
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
            {/* -----------------------------上下布局-------------------------------- */}
            <Grid container spacing={1}>
              {/* 上 */}
              <Grid item sx={12} sm={12} md={12}>
                <Grid container spacing={1} direction="row" key={i}>
                  {/* 照片 */}
                  <Grid
                    item
                    sx={12}
                    sm={4}
                    md={4}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        width: "8rem",
                        // paddingBottom: "50%",
                        height: "8rem",
                        background: "rgb(242 247 249)",
                        borderRadius: "50%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <img
                        src={item.img}
                        style={{
                          marginTop: "10%",
                          marginLeft: "10%",
                          width: "80%",
                        }}
                      />
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      style={{ textDecoration: "none ", color: "#0081a7" }}
                    >
                      {item.linkName}
                    </a>
                  </Grid>
                  {/* 產品名稱 */}

                  <Grid
                    item
                    sx={12}
                    sm={8}
                    md={8}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <h3>{item.name}</h3>
                  </Grid>
                </Grid>
              </Grid>

              {/* 下 */}
              <Grid item>
                <Grid container spacing={1} direction="row">
                  {/* 參與賽道 */}
                  <Grid item sx={4} sm={4} md={4}>
                    <div style={{ whiteSpace: "pre-line" }}>{item.tracks}</div>
                  </Grid>
                  {/* 介紹 */}
                  <Grid item sx={8} sm={8} md={8}>
                    <p>{item.introduce}</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <hr />
          </motion.div>
        );
      })}
    </>
  );
}

export default OpenSource;
