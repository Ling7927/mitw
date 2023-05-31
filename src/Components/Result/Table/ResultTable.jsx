import React, { useState } from "react";
import TRACK from "./Inform";
import { Table } from "antd";
import "./ResultTable.css";
import { useEffect } from "react";

function Trak1Table({ id }) {
  //const [track, setTrack] = useState(1);
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    setTableData(TRACK[id]);
  }, [id]);
  const bt = Object.keys(TRACK);
  return (
    <>
      {/* {bt.map((item) => {
        return <button onClick={() => setTrack(item)}
        style={{background:"none",border:"none"}}
        >{item}</button>;
      })} */}
      {tableData.map(({ column, data }, index) => {
        return (
          <div key={index}>
            <Table
              columns={column}
              dataSource={data}
              pagination={false}
              bordered
              size="large"
            />
          </div>
        );
      })}

      {/* <Table
    columns={Track1Colums}
    dataSource={Track1Data.filter(t=>t.type==='CONSUMER')}
    pagination={false}
    bordered
    size="large"
    
  /> */}
    </>
  );
}

export default Trak1Table;
