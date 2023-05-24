import React,{useState} from 'react';
import TRACK from "./Inform";
import { Table } from 'antd';

import { useEffect } from 'react';
function Trak1Table() {

  const [track,setTrack] = useState(1)
  const [tableData,setTableData] = useState([])

  useEffect(()=>{
    
    setTableData(TRACK[track])
  },[track])

  return (
    <>
{/* <div>
      <Table bordered  style={{backgroundColor:"#f1f4ec"}}>
      <thead>
        <tr>
          {Title.map((item,i) => {
            return <th key={i}>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody style={{justifyContent: "center",alignItems:"center" }}>
        {TBody.map((item,i) => {
          return (
            <tr key={i}>
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
    </div> */}
    {/* ------------------- */}
    <button onClick={()=>setTrack(1)}>1</button>
    <button onClick={()=>setTrack(2)}>2</button>
    {
      tableData.map(({column,data})=>(
      <Table
        columns={column}
        dataSource={data}
        pagination={false}
        bordered
        size="large"
        
      />))
    }
    
    {/* <Table
    columns={Track1Colums}
    dataSource={Track1Data.filter(t=>t.type==='CONSUMER')}
    pagination={false}
    bordered
    size="large"
    
  /> */}

    </>
    
  )
}

export default Trak1Table
