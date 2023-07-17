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
    <div className="SuccessBackground">
      {/*格局 左|上下*/}

      <Grid
        container
        spacing={1}
        direction="row"
        gap={5}
        style={{
          background: "#fff",
          padding: "2rem 0",
          justifyContent: "center",
        }}
      >
        {/*左--選單 */}
        <motion.Grid
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          initial={{
            x: -200,
          }}
          animate={{
            x: 0,
          }}
          transition={{ duration: 0.8 }}
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
        </motion.Grid>
        {/* 上--目前案例 */}
        <Grid item xs={11} sm={8} md={8} lg={9}>
          <Grid container spacing={1} direction="column">
            <Grid
              item
              style={{
                // width: "85%",
                borderLeft: "5px solid orange",
                // height: "50px",
                paddingLeft: "1rem",
                marginLeft: "1vw",
                // marginTop: "2%",
                alignItems: "flex-end",
              }}
            >
              <h3>{List.filter((item) => onHandle === item.id)[0].title}</h3>
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
