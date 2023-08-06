import React from "react";
import { Title, TBody } from "./Inform";
import { Table } from "reactstrap";
function LevelTable() {
  return (
    <div>
      <Table bordered style={{ backgroundColor: "#f3f4f6" }}>
        <thead>
          <tr>
            {Title.map((item, i) => {
              return <th key={i}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody style={{ justifyContent: "center", alignItems: "center" }}>
          {TBody.map((item, i) => {
            return (
              <tr key={i}>
                <th scope="row">{item.level}</th>
                <th>{item.name}</th>
                <th>{item.describe}</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default LevelTable;
