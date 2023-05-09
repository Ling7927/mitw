import React from 'react'
import { CrosssystemInform } from '../../../Pages/Successcase/Inform'
function Crosssystem() {
  return (
    <>
      {CrosssystemInform.map((item) => {
        return (
          <div style={{marginTop:"1rem" ,border:"2px solid #fff"}}>
            <div>
                <h3>
                    {item.title}
                </h3>
            </div>
            {item.img}
            
          </div>
        );
      })}
    </>
  )
}

export default Crosssystem
