import React from "react";
import MemberCard from "../../Components/MemberCard/MemberCard";
import MemberSlider from "../../Components/MemberCard/MemberSlider";
import TrackTab from "../../Components/MemberCard/TrackTab";
import { Grid } from "@mui/material";
function Member() {
  return (
    <>
      <Grid container spacing={1} style={{ padding: "2rem  2rem 3rem" }}>
        <MemberCard />
      </Grid>
    </>
  );
}

export default Member;
