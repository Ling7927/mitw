import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { FooterContext, Connection } from "./Inform";
function Footer() {
  return (
    <>
      <Grid
        container
        spacing={1}
        style={{
          background: "#000",
          paddingTop: "1rem",
          justifyContent: "center",
        }}
      >
        {/* 左 */}
        <Grid item sm={6} md={6} lg={6}>
          {FooterContext.map((item) => {
            return (
              <Grid container alignItems="baseline" columns={12}>
                <Grid
                  item
                  sm={3}
                  md={3}
                  lg={3}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    whiteSpace: "nowrap",
                  }}
                >
                  <p key={item} style={{ color: "#fff" }}>
                    {item.title}
                  </p>
                </Grid>
                <Grid
                  item
                  sm={8}
                  md={8}
                  lg={8}
                  style={{ display: "flex", margin: "1vh 0" }}
                >
                  <ul
                    style={{
                      margin: "0 0 1rem",
                      padding: "0 0 0 1vw ",
                      flexDirection: "column",
                    }}
                  >
                    {item.data.map((item) => {
                      return (
                        <li
                          key={item}
                          style={{
                            listStyle: "none",
                            marginBottom: "0.3rem",
                          }}
                        >
                          <Link
                            to={item.path}
                            style={{
                              color: "#fff",
                              maxWidth: "100%",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </Grid>
              </Grid>
            );
          })}
        </Grid>

        {/* 右 */}
        <Grid item sm={6} md={6} lg={6}>
          <h2
            style={{
              color: "#fff",
              display: "flex",
              margin: "0 0 0.5rem",
              justifyContent: "start",
            }}
          >
            聯絡我們
          </h2>
          {Connection.map((item) => {
            return (
              <p
                key={item}
                style={{
                  color: "#fff",
                  marginBottom: "0.5rem",
                  wordWrap: "break-word", //空格換行
                }}
              >
                {item.title}
                {item.context}
              </p>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
