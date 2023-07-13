import React from 'react'
import { useState } from 'react'
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

function Section({ item}) {
    const [Click, setClick] = useState("0"); //section
    const [SectionOpen, setSectionOpen] = useState(false);
    const SectionClick = () => {
      setSectionOpen(!SectionOpen);
    };
    console.log(item.content)
  return (
    <> 
   
     <button
                    style={{
                      height: "2rem",
                      width: "100%",
                      border: "none",
                      borderBottom: "#000 1px solid",
                      margin: " 1rem 0",
                      padding: "0.3rem",
                    }}
                    onClick={() => {
                      SectionClick();
                      setClick(item.id);
                    }}
                  >
                    {item.Sc}
                    {SectionOpen && Click === item.id ? (
                      <GoTriangleDown />
                    ) : (
                      <GoTriangleUp />
                    )}
                  </button>
                  {SectionOpen && Click === item.id ? (
                    <div>{item.content}</div>
                  ) : (
                    ""
                  )}
    </>
   
    
  )
}

export default Section