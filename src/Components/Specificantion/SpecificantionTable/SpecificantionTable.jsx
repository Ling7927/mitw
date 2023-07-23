import React from "react";
import { Title, TBody } from "./Inform";
import { Table } from "reactstrap";

function SpecificantionTable() {
  return (
    <div>
      <Table bordered style={{ backgroundColor: "#f2f8fd" }}>
        <thead>
          <tr>
            {Title.map((item, i) => {
              return <th key={i}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody style={{}}>
          {TBody.map((item, i) => {
            return (
              <tr key={i}>
                <th scope="row">{item.domain}</th>
                <th>{item.trak}</th>
                <th>{item.short}</th>
                <th>{item.name1}</th>
                <th>{item.name2}</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default SpecificantionTable;
