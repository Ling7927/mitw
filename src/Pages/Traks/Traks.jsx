import React from "react";
import "./Traks.css";
import { Grid } from "@mui/material";

import Tab from "../../Components/TraksTab/TraksTab";
function Traks() {
  return (
    <div
      style={{
        background: "#d9d9d9",
      }}
    >
       <Grid container spacing={1} 
      direction="column"
      alignItems="center"
      justify="center">
        <Grid item sm={12} md={12} lg={12} style={{width:"80%"}}>
        <Tab />
      </Grid>
      </Grid>
      
    </div>
  );
}

export default Traks;
