import { React, useState } from "react";
import { ListTitle, List } from "./Inform";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

function Successcase() {
  const [onHandle, setOnHandle] = useState("1");
  // const case={

  // }
  return (
    <div
      style={{
        background: "#dcdcdc",
        color: "#000",
        padding: "0 5rem",
      }}
    >
      {/*格局 左|上下*/}

      <Grid
        container
        spacing={1}
        direction="row"
        gap={5}
        style={{ background: "#fff", padding: "2rem 0" }}
      >
        {/*左--選單 */}
        <motion.Grid
          item
          sm={4}
          md={4}
          lg={4}
          initial={{
            x: "-100%",
          }}
          animate={{
            x: "0%",
          }}
          transition={{ delay: 0.5, duration: 0.3 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "2rem",
          }}
        >
          {ListTitle.map((item, i) => {
            return (
              <>
                <button
                  onClick={() => setOnHandle(item.id)}
                  style={{
                    backgroundColor: "Transparent",
                    backgroundRepeat: "no-repeat",
                    border: "none",
                    cursor: "pointer",
                    overflow: "hidden",
                    fontSize: onHandle === item.id ? "15px" : "5px",
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
        </motion.Grid>
        {/* 上--目前案例 */}
        <Grid item sm={8} md={8} lg={9}>
          <Grid container spacing={1} direction="column">
            <Grid
              item
              style={{
                // width: "85%",
                borderLeft: "5px solid orange",
                // height: "50px",
                // paddingLeft: "1rem",
                // marginTop: "2%",
                alignItems: "flex-end",
              }}
            >
              <h3>{List.filter((item) => onHandle === item.id)[0].title}</h3>
            </Grid>
            {/*下--案例們 */}
            <Grid item lg={12}>
              {List.filter((item) => onHandle === item.id)[0].cases}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Successcase;
