import { useState,useEffect } from "react";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";
import { Tabs, Mem } from "../../Pages/Member/Inform";
import { Grid } from "@mui/material";
import MemberSlider from "./MemberSlider";
function MemberCard() {
  // const { Id, Traks, Img, Members, Tollger } = props.item;
  const [clickId, setClickId] = useState(1);
  const [mem,setMem] = useState([]);
  const [Open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
//   useEffect(()=>{
// setMem(Mem.Id===clickId)
//   },[clickId])
  return (
    <>
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
        </div>

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
      </div> */}

      {/* --------------------------- */}

      {/* <div style={{ margin: "5rem",background:"#dcdcdc" }}>
      {Mem.map((item) => {
          return (
            <> */}
      {/* <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >  */}
      {/*賽道*/}
      {/* <h3>{item.Track}</h3> */}

      {/* 名片 */}
      {/* <div
                  style={{
                    width: "30%",
                  }}
                  onClick={() => {
                    setId(item.Id);
                    handleClickOpen();
                  }}
                >  */}
      {/* 相片 */}
      {/* <img src={item.Img} style={{ width: "100%" }} />  */}
      {/* 召集人 姓名單位職位 */}
      {/* {item.Members.map((person) => {
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
            </>
          );
        })}  */}

      {/* 彈跳介紹視窗 */}
      {/* <Dialog open={Open} onClose={handleClose}> 
          <DialogContent>
            <DialogContentText>
              {id !== null
                ? Mem.filter((item) => item.Id === id)[0].Tollger
                : null}
            </DialogContentText>
          </DialogContent>
        </Dialog>

      </div> 
       */}
      <Grid container spacing={1}>
        <Grid item sm={12} md={12} lg={12}>
          <h4>賽道工作小組</h4>
          <hr />
        </Grid>
        <Grid item sm={3} md={3} lg={3}>
          {Tabs.map((item) => {
            return (
              <div style={{ display: "flex" }}>
                <button
                  style={{ background: "none",marginBottom:"0.5rem", border: "none" }}
                  onClick={() => {
                    setClickId(item.id);
                  }}
                >
                  <p key={item.id} style={{fontSize:clickId===item.id ? "1.5rem":"1rem"}}>{item.title}</p>
                </button>
              </div>
            );
          })}
        </Grid>

        <Grid item sm={8} md={8} lg={8}>
          <Grid container spacing={1}>
            <div style={{}}>
              
                  <div
                    style={{
                      background: "#fff",
                      width: "40rem",
                      height: "55rem",
                      margin: "1rem",
                      display: "flex",
                      boxShadow: "3px 3px 13px #dad7cd",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ fontSize: "100px" }}>
                      {Mem.filter((item) => item.Id === clickId)[0].Track}

                      <hr style={{ width: "10%", margin: "0 0 1rem" }} />
                    </div>
                    
                    <h2>
                      {Mem.filter((item) => item.Id === clickId)[0].TraksTitle}
                    </h2>
                    
                      {Mem.filter((item) => item.Id === clickId)[0].Name.map((N)=>
                      {
                        return(
                          <h5 style={{ color: "rgba(#3ABCBF,0.5)" }}>
                          {N.N}
                          </h5>

                        )
                      })}
                    <img
                      src={Mem.filter((item) => item.Id === clickId)[0].Img.map((I)=>
                        {
                          return(
                            <>
                            {I.I}
                            </>
                          )
                        })}
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
                        {Mem.filter((item) => item.Id === clickId)[0].Position.map((P)=>
                      {
                        return(
                          <>
                          {P.P}
                          </>
                        )
                      })}
                      </h4>
                    </span>
                  </div>
                
            </div>
          </Grid>
        </Grid>
        {/* <Grid item sm={8} md={8} lg={8}>
          <Grid container spacing={1}>
            <div style={{}}>
              {Mem.map((item) => {
                if(clickId===item.Id)
                return (
                  <div
                  key={item.Id}
                  style={{
                    background: "#fff",
                    width: "40rem",
                    height: "55rem",
                    margin: "1rem",
                    display: "flex",
                    boxShadow: "3px 3px 13px #dad7cd",
                    flexDirection: "column",
                  }}
                  >
                    {console.log("A")}
                    <div style={{ fontSize: "100px" }}>
                      {item.Track}
                      <hr style={{ width: "10%", margin: "0 0 1rem" }} />
                    </div>
                    <h2>
                      {item.TraksTitle}
                    </h2>
                    <h5 style={{ color: "rgba(#3ABCBF,0.5)" }}>
                      {item.Name}
                    </h5>
                    <img
                      src={item.Img}
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
                        {item.Position}
                      </h4>
                    </span>
                  </div>
                );
              })}
            </div>
          </Grid>
        </Grid> */}
      </Grid>
      <Dialog open={Open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            {id !== null
              ? Mem.filter((item) => item.Id === id)[0].Tollger
              : null}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default MemberCard;
