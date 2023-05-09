import React from 'react'
import { Title, TBody } from "./Inform";
import { Table} from "reactstrap"
function LevelTable() {
  return (
    <div>
      <Table bordered  style={{backgroundColor:"#dcdcdc"}}>
      <thead>
        <tr>
          {Title.map((item) => {
            return <th>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody style={{justifyContent: "center",alignItems:"center" }}>
        {TBody.map((item) => {
          return (
            <tr>
              <th scope="row">
                {item.level}
              </th>
              <th>{item.name}</th>
              <th>{item.describe}</th>

            </tr>
          );
        })}
      </tbody>
    </Table>
    </div>
  )
}

export default LevelTable
