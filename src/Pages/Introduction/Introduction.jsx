import React from "react";
import Tab from "../../Components/IntroductionTab/IntroductionTab";
function Introduction() {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(180deg, #000000 0%, #6AADD9 0.01%, rgba(0, 249, 255, 0) 56.56%, rgba(240, 240, 240, 0) 100%),linear-gradient(0deg, #F0F0F0, #F0F0F0)",
          // "#dae3e8",
          margin: 0,
          minHeight: "100%",
        }}
      >
        <Tab />
      </div>
    </>
  );
}

export default Introduction;
