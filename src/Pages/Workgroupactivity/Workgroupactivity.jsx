import React from "react";
import { active } from "./Inform";
function Workgroupactivity() {
  return (
    <>
      {active.map((item) => {
        return (
          <div
            key={item}
            style={{ background: "#ddccdc", border: "2px solid orange" }}
          >
            <h4> {item.title}</h4>
            {item.content}
          </div>
        );
      })}
    </>
  );
}

export default Workgroupactivity;
