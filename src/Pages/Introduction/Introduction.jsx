import React from "react";

import IntroductionImform from "./IntroductionInform.json";
import Tab from "../../Components/IntroductionTab/IntroductionTab";
import Tracks from "../../Components/Traklist/Trakslist";
import { Link } from "react-router-dom";
function Introduction() {
  return (
    <>
      <div
        style={{
          background: "linear-gradient( to bottom, #20413F 20%, transparent 70%)",
          margin: 0,
          padding:"5rem 0"
        }}
      >
        {/* <div style={{ color: "#fff" }}>
          <h2
            style={{
              margin: 0,
              paddingTop: "4rem",
            }}
          >
            {IntroductionImform.p1.title}
          </h2>
          <div style={{ margin: 0, padding: "2rem 5rem " }}>
            <p>{IntroductionImform.p1.context}</p>
            <p>
              {IntroductionImform.p1.linktitle}
              <Link to={IntroductionImform.p1.link} style={{ color: "#fff" }}>
                {" "}
                {IntroductionImform.p1.link}
              </Link>
            </p>
          </div>
        </div> */}
        <Tab />
      </div>
    </>
  );
}

export default Introduction;
