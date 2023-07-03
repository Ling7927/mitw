import React, { useState } from "react";

function SeeMore({ introduce }) {
  const [SeeMore, setSeeMore] = useState(50);

  return (
    <>
      {introduce.length > SeeMore ? (
        <>
          {introduce.substr(1, 180)}...
          <div
            style={{ cursor: "pointer", color: "#0081A7" }}
            onClick={() => setSeeMore(introduce.length)}
          >
            {console.log(introduce)}
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
