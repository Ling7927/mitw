import { useRef } from "react";
import {WorkGrop } from "./Inform";
import { motion, useInView } from "framer-motion";
import { Grid } from "@mui/material";

function Part({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.25s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function Recruit() {
  return (
    <>
      <div style={{ background: "#FEFEFA" }}>
        {/* 小組及說明 */}
        {/*     
      {Title.map((item) => {
        return (
          <Part>
            <h4>{item.title}</h4>

            <p>{item.instructions}</p>
            <hr /> */}
        {/* 細項規則 */}
        {/* {Subtitle.map((item)=>{
        return(
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                margin: "1rem 2rem",
                width: "100%",}}>
                {item.li}

            </div>
        )
      })}
          </Part>
        );
      })} */}
      
        <Grid container spacing={1}>
          <div style={{ margin: "6rem" }}>
            {WorkGrop.map((item) => {
              return (
                <>
                  <Grid item xs={12} sm={12} md={12} lg={10}>
                    <Part>
                      <h4 key={item.title}>{item.title}</h4>

                      <p>{item.instructions}</p>
                      <hr />
                    </Part>
                  </Grid>

                  <Part>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                      <>{item.li}</>
                    </Grid>
                  </Part>
                </>
              );
            })}
          </div>
        </Grid>
      </div>
    </>
  );
}

export default Recruit;
