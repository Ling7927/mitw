import React from "react";
import ResultTab from "../../Components/Result/ResultTab";
import Table from "../../Components/Result/Table/ResultTable";
function Result() {
  return (
    <div
      style={{
        background: "rgb(220, 220, 220)",
        //"linear-gradient(180deg, #000000 0%, #20413F 20.83%, rgba(217, 217, 217, 0) 100%), #F0F0F0"
      }}
    >
      <div style={{ background: "#fff" }}>
        <ResultTab />
      </div>
    </div>
  );
}

export default Result;
