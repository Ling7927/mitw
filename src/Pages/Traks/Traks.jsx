import React from "react";
import "./Traks.css";
import { Grid } from "@mui/material";

import Tab from "../../Components/TraksTab/TraksTab";
function Traks() {
  return (
    <div className="TracksBackground">
      {/* // <Grid
    //   container
    //   spacing={1}
    //   direction="column"
    //   alignItems="center"
    //   justify="center"
    //   style={{ background: "#d9d9d9" }}
    // > */}
      <Tab />

      {/* </Grid> */}
    </div>
  );
}

export default Traks;
