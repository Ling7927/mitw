import React from 'react'
import {Inform} from "././Inform"
function Traks1() {
  return (
    <div style={{width:"80%"}}>
      {Inform.map((item)=>{
        return (<div > 
          <h3>{item.Title}</h3>
        </div>)
      })}
    </div>
  )
}

export default Traks1
