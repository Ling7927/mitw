import React, { useState } from "react";
import TRACK from "./Inform";
import { Table } from "antd";
import "./ResultTable.css";
import { useEffect } from "react";

function TraksTable({ id }) {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    setTableData(TRACK[id]);
  }, [id]);
  return (
    <>
      {tableData.map(({ column, data }, index) => {
        return (
          <Table
            columns={column}
            dataSource={data}
            pagination={false} //不要表格頁數
            bordered //圓角
            size="small"
            style={{ margin: "5vw 20vh 0" }}
            key={index}
          />
        );
      })}
    </>
  );
}

export default TraksTable;
