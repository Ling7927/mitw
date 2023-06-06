import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";
import { Grid } from "@mui/material";
function SliderCard(props) {
   const { Id, Track,TraksTitle, Img,Position, Name, Tollger } = props.item;
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
    useEffect(()=>{
  setMem(Id===clickId)
    },[clickId])
  return (
    <>
 <Grid container spacing={1} >
        <Grid item sm={12} md={12} lg={12}>
          <h4>賽道工作小組</h4>
          <hr />
        </Grid>
        <Grid item sm={1} md={1} lg={2}>
          <p style={{ fontSize:"2rem"}}>Track</p>
              <div style={{ display: "flex" }}
              >
                <button
                  style={{
                    background: "none",
                    marginBottom: "0.5rem",
                    border: "none",
                  }}
                  onClick={() => {
                    setClickId(Id);
                  }}
                >
                  <p
                    key={Id}
                    style={{
                      paddingLeft:"10px",
                      fontSize: clickId === Id ? "1.5rem" : "1rem",
                      borderLeft:clickId === Id ? "2px solid #000" : "none",
                    }}
                  >
                    {TraksTitle}
                  </p>
                </button>
              </div>
            
        </Grid>

        <Grid item sm={8} md={8} lg={10} >
          <Grid container spacing={1}>
          
              <Grid item  sm={6} md={6} lg={6}>
                <div
                  style={{
                    background: "#fff",
                    width: "40rem",
                    height: "60rem",
                    margin: "1rem",
                    display: "flex",
                    boxShadow: "3px 3px 13px #dad7cd",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ fontSize: "100px" }}>
                    {Track}

                    <hr style={{ width: "10%", margin: "0 0 1rem" }} />
                  </div>

                  <h2>{TraksTitle}</h2>

                  <h5 style={{margin:"1rem 0 0",paddingBottom:"1rem", color: "#3ABCBF" }}>{Name}</h5>

                  <img
                  onClick={() => {
                    handleClickOpen();}}
                    src={`assets/${Img}`}
                    style={{
                      height: "100%",
                      width: "95%",
                      objectFit: "contain",
                    }}
                  />
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <h4
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        bottom: "3rem",
                        right: "0.5px",
                        padding: "0 2rem ",
                        height: "3rem",
                        right: "-1px",
                        background: "#3ABCBF",
                        color: "#fff",
                        boxShadow: "2px 0px 3px #d6ccc2",
                      }}
                    >
                      {Position}
                    </h4>
                  </span>
                </div>
                <Dialog open={Open} onClose={handleClose}>
                  <DialogContent>
                    <DialogContentText>
                      {Tollger}
                      
                    </DialogContentText>
                  </DialogContent>
                </Dialog>
                </Grid>
            
          </Grid>
        </Grid> 

       
      </Grid>

      {/* <div style={{ margin: "5rem",background:"#dcdcdc" }}>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 style={{marginBottom:"5rem"}}>{Traks}</h1>

            <div
              style={{
                width: "30%",
              }}
              onClick={() => {
                setId(Id);
                handleClickOpen();
              }}
            >

              <div style={{height: "50vh",}}>
                <img src={Img} style={{ height: "100%",objectFit:"contain" }} />
                </div>

              {Members.map((person) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      position: "relative",
                      bottom: "6rem",
                      background: "hsla(0,0%,100%,.3)",
                      borderRadius: "3px",
                      color: "#FFFFF0",
                      width: "100%",
                    }}
                  >
                    <h4> {person.position}</h4>
                    <h5> {person.name}</h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}

        {/* 彈跳介紹視窗 */}
       {/* <Dialog open={Open} onClose={handleClose}> 
          <DialogContent>
            <DialogContentText>
               {id !== null
                ? item.filter((item) => Id === id)[0].Tollger
                : null} 
                {Tollger}
            </DialogContentText>
          </DialogContent>
        </Dialog> 
      </div>*/}
      </>
  )
}

export default SliderCard
