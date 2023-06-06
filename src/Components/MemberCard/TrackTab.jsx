import { useState,React} from 'react'
import MemberSlider from './MemberSlider'
import { Grid } from "@mui/material";
import { Tabs,Mem } from '../../Pages/Member/Inform'; 

function TrackTab() {
    const [clickId, setClickId] = useState(1);
    const [mem, setMem] = useState([]);
    const [Open, setOpen] = useState(false);
    const [id, setId] = useState(null);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <>
    <Grid container spacing={1}>
        <Grid item sm={12} md={12} lg={12}>
          <h4>賽道工作小組</h4>
          <hr />
        </Grid>
        <Grid item sm={1} md={1} lg={2}>
          <p style={{ fontSize: "2rem" }}>Track</p>
          {Tabs.map((item) => {
            return (
              <div style={{ display: "flex" }}
              >
                <button
                  style={{
                    background: "none",
                    marginBottom: "0.5rem",
                    border: "none",
                  }}
                  onClick={() => {
                    setClickId(item.id);
                  }}
                >
                  <p
                    key={item.id}
                    style={{
                      paddingLeft:"10px",
                      fontSize: clickId === item.id ? "1.5rem" : "1rem",
                      borderLeft:clickId === item.id ? "2px solid #000" : "none",
                    }}
                  >
                    {item.title}
                  </p>
                </button>
              </div>
            );
          })}
        </Grid>

      <MemberSlider id={clickId}/>
      </Grid>
    </>
  )
}

export default TrackTab
