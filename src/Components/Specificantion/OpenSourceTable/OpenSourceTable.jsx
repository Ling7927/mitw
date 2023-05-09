import React from "react";
import { Title, TBody } from "./Inform";
import { Table} from "reactstrap";

function OpenSourceTable() {
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
                  <div style={{ display:"flex",flexDirection: "column",justifyContent: "center",alignItems:"center"}}>
                    <img src={item.img} width={"30%"} />
                    <a href={item.link}  style={{color:"#295285",textDecoration:"none"}}>{item.name} </a>
                  </div>
                </th>
                <th>{item.introduce}</th>
                <th>{item.traks}</th>
                <th >
                  <a href={item.clink} style={{color:"#295285",textDecoration:"none"}}>{item.contributor}</a>
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default OpenSourceTable;
