import { useRef } from "react";
import { WorkGrop } from "./Inform";
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
        {/* <div
          style={{
            position: "absolute",
            zIndex: "0",
            width: "60rem",
            height: "50rem",
            background:
              "linear-gradient(180deg, rgba(58, 188, 191, 0.71) 0%, rgba(0, 249, 255, 0) 100%)",
            boxShadow: "inset -40px 0px  30px -20px #fff",
          }}
        /> */}

        <div style={{ margin: "3rem" }}>
          {WorkGrop.map((item, index) => {
            if (index === 0)
              return (
                <>
                  <div
                    style={{
                      margin: "3rem",
                      paddingLeft: "2rem",
                      borderRadius: "1rem",
                      background:
                        "linear-gradient(90deg, rgba(58, 188, 191, 0.71) 0%, rgba(0, 249, 255, 0) 65%)",
                    }}
                  >
                    <Grid container spacing={1} gap={10}>
                      <Grid item sm={12} md={12} lg={6}>
                        <Part>
                          {/* 小組及說明(左) */}
                          <h4 key={item.title} style={{ paddingTop: "1rem" }}>
                            {item.title}
                          </h4>
                          <p>{item.instructions}</p>
                          <img
                            src={item.img}
                            style={{ width: "50%", filter: " invert(100%)" }}
                          />
                        </Part>
                      </Grid>
                      <Grid item sm={12} md={12} lg={5}>
                        <Part>
                          {/* 細項規則(右) */}
                          <div
                            style={{
                              background: "#f0f4f6",
                              padding: "1.5rem 1rem",
                              borderRadius: "3rem",
                            }}
                          >
                            {item.li}
                          </div>
                        </Part>
                      </Grid>
                    </Grid>
                  </div>
                </>
              );
            else
              return (
                <>
                  <Part>
                    <div
                      style={{
                        background:
                          "linear-gradient(270deg, rgba(58, 188, 191, 0.71) 0%, rgba(0, 249, 255, 0) 65%)",
                        margin: "3rem ",

                        borderRadius: "1rem",
                      }}
                    >
                      <Grid container spacing={1} gap={10}>
                        <Grid item sm={12} md={8} lg={5}>
                          <div
                            style={{
                              background: "#f0f4f6",
                              padding: "2rem 1rem",
                              borderRadius: "3rem",
                            }}
                          >
                            {/* 細項規則 (左*/}

                            {item.li}
                          </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          {/* 小組及說明(右) */}
                          <h4 key={item.title} style={{ paddingTop: "1rem" }}>
                            {item.title}
                          </h4>
                          <p style={{ paddingRight: "1rem" }}>
                            {item.instructions}
                          </p>
                          <img
                            src={item.img}
                            style={{ width: "50%", filter: " invert(100%)" }}
                          />
                        </Grid>
                      </Grid>
                    </div>
                  </Part>
                </>
              );
          })}
        </div>
        {/* <div
          style={{
            background:
              "  repeating-linear-gradient(to right, transparent 0 100px,#a79d8388 400px 200px), repeating-linear-gradient(to top, transparent 0 100px,#a79d8388 400px 200px), rgba(0, 249, 255, 0) ",
            width: "40rem",
            height: "40rem",
          }}
        /> */}
      </div>
    </>
  );
}

export default Recruit;
