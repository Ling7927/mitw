import React from "react";
import MemberCard from "../../Components/MemberCard/MemberCard";
import MemberSlider from "../../Components/MemberCard/MemberSlider";
function Member() {
  return (
    <>
     <MemberCard/>
     <div style={{width:"600px",height:"400px",margin:"3rem"}}>
        <MemberSlider/>
     </div>
   
    </>
  );
}

export default Member;
