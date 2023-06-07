import React from 'react'
import { CrosssystemInform } from '../../../Pages/Successcase/Inform'
function Crosssystem() {
  return (
    <>
      {CrosssystemInform.map((item,i) => {
        return (
          <div key={i} style={{marginTop:"1rem" ,display:"flex",flexDirection:"column",alignItems: "center"
          // border:"2px solid #fff0"
          }}>
               
             <h3 style={{marginBottom:"2rem"}}>
                    {item.title}
                </h3>
            <div style={{width:"70%"}}>
              
                          {item.img}

            </div>
            
          </div>
        );
      })}
    </>
  )
}

export default Crosssystem
