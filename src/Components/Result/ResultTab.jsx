import React, { useState } from "react";
import { ResultTabInform } from "./Inform";
import ResultTable from "../Result/Table/ResultTable";

function ResultTab() {
  const [track, setTrack] = useState(1);

  return (
    <>
      {ResultTabInform.map((item) => {
        return (
          <>
            <button
              style={{ background: "none", border: "none" }}
              onClick={() => setTrack(item.Id)}
            >
              {/* {console.log(track)} */}
              {item.TabTitle}
            </button>
            
          </>
        );
      })}
      <ResultTable id={track} />
    </>
  );
}

export default ResultTab;
