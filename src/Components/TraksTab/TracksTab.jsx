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
      style={{ width: "100%" }}
    >
      <Grid item xs={12} sm={12} md={2} lg={2}>
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
                  fontSize: "4rem",
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
                  padding: "0.75rem",
                  background: "#fdfdfd",
                  position: "relative",
                  top: "-30px",
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
        md={9}
        lg={9}
        style={{
          display: "flex",
          flexDirection: "row",
          // overflowX: "auto",
          paddingBottom: "3vw",
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
