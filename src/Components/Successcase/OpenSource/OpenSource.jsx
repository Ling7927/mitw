import React from "react";
import { OpenSourceInform } from "../../../Pages/Successcase/Inform";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
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
            transition={{ duration: 0.8 }}
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
            <Grid container spacing={1} sx={{ marginTop: "1rem" }}>
              {/* 上 */}
              <Grid item sx={12} sm={12} md={12} lg={12}>
                <Grid container spacing={1} direction="row" key={i} gap={1}>
                  {/* 照片 */}
                  <Grid
                    item
                    sx={12}
                    sm={3}
                    md={3}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
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
                    <span>
                      <icon style={{ fontSize: "1.5rem", marginRight: "5px" }}>
                        <AiOutlineGithub />
                      </icon>
                      <a
                        href={item.link}
                        target="_blank"
                        style={{ textDecoration: "none ", color: "#0081a7" }}
                      >
                        {item.linkName}
                      </a>
                    </span>
                  </Grid>
                  {/* 產品名稱 */}

                  <Grid
                    item
                    sx={12}
                    sm={8}
                    md={8}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <h3>{item.name}</h3>
                  </Grid>
                </Grid>
              </Grid>
              {/* 下 */}
              <Grid item>
                <Grid container direction="row" spacing={1}>
                  {/* 參與賽道 */}
                  <Grid
                    item
                    sx={3}
                    sm={3}
                    md={3}
                    style={{
                      whiteSpace: "pre-line",
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    {/* <p style={{ whiteSpace: "pre-line" }}>
                      參加賽道{item.tracks}
                    </p> */}

                    <p style={{ whiteSpace: "pre-wrap" }}>
                      <strong>參加賽道</strong>
                      {item.jointracks.map((tracks) => {
                        return (
                          <>
                            {tracks.trackstitle}
                            {tracks.tracksname}
                          </>
                        );
                      })}
                    </p>
                  </Grid>
                  {/* 介紹 */}
                  <Grid item sx={9} sm={9} md={9} lg={9} xs={{ width: "100%" }}>
                    <p>{item.introduce}</p>
                  </Grid>{" "}
                </Grid>{" "}
                <hr />
              </Grid>{" "}
            </Grid>
          </motion.div>
        );
      })}
    </>
  );
}

export default OpenSource;
