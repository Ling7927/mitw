import { React, useState } from "react";
import { ListTitle, List } from "./Inform";
import "./Successcase.css";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

function Successcase() {
  const [onHandle, setOnHandle] = useState("1");
  // const case={

  // }
  return (
    <div className="AllBackground">
      {/*格局 左|上下*/}

      <Grid
        container
        spacing={1}
        // direction="row"
        // gap={5}
        style={{
          background: "#fdfdfd",
          padding: "2rem 0",
          justifyContent: "space-around",
          minHeight: "100vh",
        }}
      >
        {/*左--選單 */}
        <motion.Grid
          item
          xs={12}
          sm={3}
          md={3}
          lg={3}
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "1vh",
          }}
        >
          {/* 選單 */}
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            //style={{ width: "20%" }}
            style={{
              position: "sticky",
              top: "3rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                position: "sticky",
                top: "3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {ListTitle.map((item, i) => {
                return (
                  <>
                    <button
                      onClick={() => setOnHandle(item.id)}
                      className="SuccessSectionTab"
                      style={{
                        backgroundColor: "Transparent",
                        backgroundRepeat: "no-repeat",
                        border: "none",
                        cursor: "pointer",
                        overflow: "hidden",
                        fontSize: onHandle === item.id ? "1.25rem" : "1rem",
                        margin: 0,
                        color: onHandle === item.id ? "#000" : "#949494",
                        marginBottom: "0.5rem",
                      }}
                      key={i}
                    >
                      {item.title}
                    </button>
                  </>
                );
              })}
            </div>
          </motion.div>
        </motion.Grid>
        {/* 上--目前案例 */}
        <Grid item xs={12} sm={9} md={9} lg={9}>
          <Grid container spacing={1} direction="column">
            <Grid
              item
              style={{
                // width: "85%",
                borderLeft: "5px solid orange",
                // height: "50px",
                paddingLeft: "1rem",

                // marginTop: "2%",
                alignItems: "flex-end",
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>
                {List.filter((item) => onHandle === item.id)[0].title}
              </h2>
            </Grid>
            {/*下--案例們 */}
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "0 2vh",
              }}
            >
              {List.filter((item) => onHandle === item.id)[0].cases}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Successcase;
