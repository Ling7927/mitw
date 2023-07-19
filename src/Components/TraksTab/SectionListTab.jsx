import React from "react";
import { TraksTabInform } from "./TraksTabInform";
import { Grid, Box } from "@mui/material";

function SectionListTab({ setClick, onHandle }) {
  return (
    <Grid
      item
      xs={2}
      sm={2}
      md={2}
      lg={2}
      sx={{
        display: "block",
        flexDirection: "column",
        // position: "fixed",
        // left: "3rem",
      }}
    >
      {TraksTabInform.filter((item) => item.Id === onHandle)[0].List.map(
        (sectiontab) => {
          return (
            <button
              style={{ border: "none", background: "none" }}
              key={sectiontab.id}
              onClick={() => setClick(sectiontab.id)}
            >
              {sectiontab.Sc}
            </button>
          );
        }
      )}
    </Grid>
  );
}

export default SectionListTab;
