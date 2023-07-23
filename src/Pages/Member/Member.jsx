import React from "react";
import MemberCard from "../../Components/MemberCard/MemberCard";
import MemberSlider from "../../Components/MemberCard/MemberSlider";
import TrackTab from "../../Components/MemberCard/TrackTab";
import { Grid } from "@mui/material";
function Member() {
  return (
    <>
      <div
        style={{
          padding: "0  5vh 3vh",
          minHeight: "100vh",
          background:
            "linear-gradient( 180deg, #ffffff 0%, #6aadd9 0.01%, rgba(0, 249, 255, 0) 56.56%, rgba(240, 240, 240, 0) 100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MemberCard />
      </div>
    </>
  );
}

export default Member;
