import React, { useState } from "react";
import TRACK from "./Inform";
import { Table } from "antd";
import "./ResultTable.css";
import { useEffect } from "react";

function Trak1Table({id}) {
  
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
{bt.map((item) => {

      {tableData.map(({ column, data }) => {

    if (id===item)

      return(
        <>
        
        <Table
          columns={column}
          dataSource={data}
          pagination={false}
          bordered
          size="large"
        />
        </>
      )
      }
       
      )}
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
