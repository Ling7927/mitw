import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import "./Footer.css";
import { FooterContext, Connection } from "./Inform";
function Footer() {
  return (
    <>
      <Grid
        container
        spacing={1}
        gap={5}
        style={{
          background: "#000",
          paddingTop: "1rem",
          justifyContent: "center",
        }}
      >
        {/* 左 */}
        <Grid item sm={5} md={5} lg={5}>
          <Grid container>
            {FooterContext.map((item) => {
              return (
                <>
                  <Grid
                    item
                    sm={4}
                    md={4}
                    lg={4}
                    style={{ display: "flex", justifyContent: "flex-end" }}
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
                    style={{ display: "flex", margin: "1rem 0" }}
                  >
                    <ul style={{ margin: "0 0 1rem", flexDirection: "column" }}>
                      {item.data.map((item) => {
                        return (
                          <li
                            key={item}
                            style={{
                              listStyle: "none",
                              marginBottom: "0.3rem",
                            }}
                          >
                            <Link to={item.path} style={{ color: "#fff" }}>
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Grid>

        {/* 右 */}
        <Grid item sm={5} md={5} lg={5}>
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
