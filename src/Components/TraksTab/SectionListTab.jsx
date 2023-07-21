import React from "react";
import { TraksTabInform } from "./TraksTabInform";
import { Grid, Box } from "@mui/material";

function SectionListTab({ Click, setClick, onHandle }) {
  return (
    <Grid
      item
      xs={2}
      sm={2}
      md={2}
      lg={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "flex-start",
        position: "sticky",
        // left: "3rem",
        height: "100%",
        top: "5rem",
      }}
    >
      {TraksTabInform.filter((item) => item.Id === onHandle)[0].List.map(
        (sectiontab) => {
          return (
            <button
              // a
              // href={`#${sectiontab.id}`}
              style={{
                border: "none",
                background: "none",
                fontSize: Click === sectiontab.id ? "1.25rem" : "1rem",
              }}
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
