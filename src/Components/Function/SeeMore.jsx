import React, { useState } from "react";

function SeeMore({ introduce }) {
  const [SeeMore, setSeeMore] = useState(50);
  // function li() {
  //   introduce.includes("：1.")
  //     ? introduce.replaceAll("：1.", "：\n1.").replaceAll("。", "。\n")
  //     : introduce;
  //   return introduce;
  // }

  // const String = introduce
  //   .replaceAll("：1.", "：\r\r1.")
  //   .replaceAll("。", "。" + "\r\n");

  // let tmplength = 0,tmpString="";
  {
    /*====================換行但無法分字串數量前50字--最後依然是還原無法分行模式========================*/
  }

  // const String = Strings.split("\n").map(
  //   (str) => {
  //     tmplength += str.length;
  //     tmpString+=str;
  //   }
  //   // <p style={{ margin: 0 }}>
  //   //   {(tmplength += str.length)}

  //   //   {str}
  //   // </p>
  // );
  {
    /*====================換行但無法分字串數量前50字========================*/
  }
  // const Strings = introduce;
  // const String = Strings.split("\n").map((str) => (
  //   <p style={{ margin: 0 }}>
  //     {str}
  //     {console.log(str.length)}
  //   </p>
  // ));

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
