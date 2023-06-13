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
      {/* <div style={{ background: "#FEFEFA", display: "flex" }}> */}
      <Grid container spacing={1}>
        {WorkGrop.map((item, index) => {
          if (index === 0)
            // 第一區塊
            return (
              <Grid item sm={12} md={12} lg={12}>
                <Part>
                  {/* <div style={{ margin: "1.5rem 3rem" }}> */}
                  <div
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(58, 188, 191, 0.71) 0%, rgba(0, 249, 255, 0.15) 65%,rgba(214, 255, 255,0)95%",
                      margin: "3rem ",

                      borderRadius: "3rem",
                    }}
                  >
                    <Grid container spacing={1}>
                      {/* 小組及說明(左) */}
                      <Grid
                        item
                        sm={12}
                        md={12}
                        lg={7}
                        style={{
                          // padding: 0,
                          padding: "1rem 2rem 0",
                        }}
                      >
                        <h4 key={item.title} style={{ padding: "1rem 0 2rem" }}>
                          {item.title}
                        </h4>
                        <p
                          style={{
                            letterSpacing: "1px",
                            lineHeight: "1.7",
                            paddingLeft: "1rem",
                          }}
                        >
                          {item.instructions}
                        </p>
                        <img
                          src={item.img}
                          style={{ width: "50%", filter: " invert(100%)" }}
                        />
                      </Grid>
                      {/* 細項規則(右) */}
                      <Grid item sm={12} md={12} lg={5} style={{ padding: 0 }}>
                        <div
                          style={{
                            background: "#f0f4f6",
                            padding: "2rem 1rem",
                            borderRadius: "3rem",
                          }}
                        >
                          {item.li}
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Part>
              </Grid>
            );
          // 第二區塊
          else
            return (
              <Grid item sm={12} md={12} lg={12}>
                <Part>
                  <div
                    style={{
                      background:
                        "linear-gradient(270deg, rgba(58, 188, 191, 0.71) 0%, rgba(0, 249, 255, 0.15) 65%,rgba(214, 255, 255,0)95%",
                      margin: "3rem ",

                      borderRadius: "3rem",
                    }}
                  >
                    <Grid container spacing={1}>
                      <Grid item sm={12} md={5} lg={5} style={{ padding: 0 }}>
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
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={7}
                        lg={7}
                        style={{ padding: "1rem 2rem" }}
                      >
                        {/* 小組及說明(右) */}
                        <h4 key={item.title} style={{ padding: "1rem 0 2rem" }}>
                          {item.title}
                        </h4>
                        <p
                          style={{
                            paddingRight: "1rem",
                            letterSpacing: "1px",
                            lineHeight: "1.7",
                          }}
                        >
                          {item.instructions}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            paddingRight: "3rem",
                            flexDirection: " row-reverse",
                          }}
                        >
                          <img
                            src={item.img}
                            style={{ width: "50%", filter: " invert(100%)" }}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Part>
              </Grid>
            );
        })}
      </Grid>

      {/* </div> */}
    </>
  );
}

export default Recruit;
