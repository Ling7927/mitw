import React from "react";
import MemberCard from "../../Components/MemberCard/MemberCard";
import MemberSlider from "../../Components/MemberCard/MemberSlider";
import TrackTab from "../../Components/MemberCard/TrackTab";
import { Grid } from "@mui/material";
function Member() {
  return (
    <>
      <div style={{ margin: "3rem" }}>
        <MemberSlider />
        {/* <MemberCard /> */}
      </div>
      {/* <Grid container spacing={1}>
      <Grid item lg={1}>

      <TrackTab/>
      </Grid>
      <Grid item lg={10}>

   <MemberSlider/>
   </Grid>
     </Grid> */}
    </>
  );
}

export default Member;
