import React, { useState } from "react";

function SeeMore({ introduce }) {
  const [SeeMore, setSeeMore] = useState(50);

  return (
    <>
      {introduce.length > SeeMore ? (
        <>
          {introduce.substr(1, 180)}...
          <a onClick={() => setSeeMore(introduce.length)}>顯示更多</a>
        </>
      ) : (
        introduce
      )}
    </>
  );
}

export default SeeMore;
