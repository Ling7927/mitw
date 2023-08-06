import React from "react";
import { TraksTabInform } from "./TraksTabInform";
import { Grid, Box } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link"; //section nagetive on same page

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
        alignContent: "space-around",
        position: "sticky",
        // left: "3rem",
        height: "100%",
        width: "100%",
        top: "10rem",
        paddingLeft: "1vh",
      }}
    >
      {TraksTabInform.filter((item) => item.Id === onHandle)[0].List.map(
        (sectiontab) => {
          return (
            <Link
              to={`#${sectiontab.id}`}
              style={{
                border: "none",
                background: "none",
                fontSize: Click === sectiontab.id ? "1.25rem" : "1rem",
                fontWeight: Click === sectiontab.id ? "bold" : "normal",
                color: "#000",
                textDecoration: "none",
                marginBottom: "5px",
              }}
              key={sectiontab.id}
              onClick={() => setClick(sectiontab.id)}
              smooth
            >
              {sectiontab.Sc}
            </Link>
          );
        }
      )}
    </Grid>
  );
}

export default SectionListTab;
