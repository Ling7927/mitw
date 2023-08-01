import React, { useState } from "react";

function SeeMore({ introduce }) {
  const [SeeMore, setSeeMore] = useState(50);
  const [click, setClick] = useState(false);
  return (
    <>
      {introduce.length > SeeMore ? (
        <>
          {introduce.substr(0, 180)}...
          <div
            style={{ cursor: "pointer", color: "#0081A7" }}
            onClick={() => {
              setSeeMore(introduce.length);
              setClick(true);
            }}
          >
            顯示更多
          </div>
        </>
      ) : (
        introduce
      )}
    </>
  );
}

export default SeeMore;
