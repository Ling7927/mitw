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
