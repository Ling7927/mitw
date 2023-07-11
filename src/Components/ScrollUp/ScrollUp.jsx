import { PestControlSharp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

function ScrollUp() {
  const [BackToTop, setBackToTop] = useState(false);
  const [Ishover, setIshover] = useState(false);
  useEffect(() => {
    window.scrollY > 100 ? setBackToTop(true) : setBackToTop(false);
  });
  const ScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {BackToTop && (
        <button
          onMouseLeave={() => setIshover(false)}
          onMouseEnter={() => setIshover(true)}
          style={{
            background: "#5bcbe1e6",
            borderRadius: "50%",
            border: "1px solid #dcdcdc",
            boxShadow: Ishover
              ? "3px 2px 15px #20c3e3"
              : "3px 2px 15px #5bcbe1e6",
            position: "fixed",
            bottom: "150px",
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "2.5rem",
            zIndex: 999,
          }}
          onClick={ScrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
}

export default ScrollUp;
