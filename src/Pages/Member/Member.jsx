import React from "react";
import MemberCard from "../../Components/MemberCard/MemberCard";
import MemberSlider from "../../Components/MemberCard/MemberSlider";
import TrackTab from "../../Components/MemberCard/TrackTab";
import { Grid } from "@mui/material";
function Member() {
  return (
    <>
      {/* // <div style={{ margin: "3rem" }}>
        // <MemberSlider />
        //  <MemberCard /> 
       // </div>  */}
      <Grid container spacing={1} style={{ padding: "2rem " }}>
        {/* <Grid item sm={12} md={12} lg={12}>
          <h4>賽道工作小組</h4>
          <hr />
        </Grid>

        <Grid item sm={1} md={1} lg={1}>
          <TrackTab />
        </Grid>
        <Grid item sm={10} md={10} lg={10}>
          <MemberSlider />
        </Grid> */}
        {/* ------------------------ */}
        <MemberCard />
      </Grid>
    </>
  );
}

export default Member;
