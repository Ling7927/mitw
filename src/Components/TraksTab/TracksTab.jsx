import React, { useEffect, useState } from "react";
import { TraksTabInform } from "./TraksTabInform";
import "./TraksTab.css";
import { useParams } from "react-router-dom";

import { Grid, Box } from "@mui/material";

function TracksTab({ setOnHandle, onHandle }) {
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="space-between"
      style={{
        width: "100%",
        margin: 0,
        position: "sticky",
        paddingTop: "1rem",
        top: "0",
        background: "#fdfdfd",
        alignItems: "baseline",
        zIndex: 500,
      }}
    >
      <Grid item xs={12} sm={12} md={4} lg={2.5} style={{ width: "100%" }}>
        {/* 目前賽道 */}
        {TraksTabInform.filter((item) => item.Id === onHandle).map((item) => {
          return (
            <Box
              key={item}
              style={{
                display: "flex",
                flexDirection: "column",
                border: 0,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                }}
              >
                {item.TabTitle}
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                  // fontSize: "15px",
                  color: "#1e1e1e",
                  margin: 0,
                  background: "#fdfdfd",
                  position: "relative",
                  top: "-10px",
                }}
              >
                {item.ContentTitle}
              </div>
            </Box>
          );
        })}
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={8}
        lg={9}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          // overflowX: "auto",
          // paddingBottom: "3vw",
        }}
      >
        <Grid container columns={20} alignItems="center" justify="center">
          {TraksTabInform.filter((item) => item.Id !== onHandle).map((item) => {
            return (
              <Grid item xs={2} sm={2}>
                <button
                  className="Tabsbutton"
                  key={item}
                  onClick={() => setOnHandle(item.Id)}
                >
                  {item.TabTitle}
                </button>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TracksTab;
