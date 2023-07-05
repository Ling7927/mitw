import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";
import { Tabs, Mem } from "../../Pages/Member/Inform";
import { motion } from "framer-motion";
import { Box, Grid } from "@mui/material";
import "./MemberCard.css";
import MemberSlider from "./MemberSlider";
function MemberCard() {
  // const { Id, Traks, Img, Members, Tollger } = props.item;
  const [clickTrackId, setclickTrackId] = useState(1);
  const [memId, setMemId] = useState(null);
  const [Open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //   useEffect(()=>{
  // setMem(Mem.Id===clickTrackId)
  //   },[clickTrackId])
  return (
    <>
      <Grid container style={{ justifyContent: "space-between" }}>
        <Grid item sm={12} md={12} lg={12} height="10vh">
          <h4>賽道工作小組</h4>
          <hr style={{ margin: "2vh 0 " }} />
        </Grid>
        {/* 選單 */}
        <Grid item sm={1} md={1} lg={2}>
          <p style={{ fontSize: "2rem" }}>Track</p>
          {Tabs.map((item) => {
            return (
              <div style={{ display: "flex" }}>
                <button
                  style={{
                    background: "none",
                    marginBottom: "1vw",
                    border: "none",
                  }}
                  onClick={() => {
                    setclickTrackId(item.id);
                  }}
                >
                  <p
                    key={item.id}
                    style={{
                      margin: 0,
                      paddingLeft: "10px",
                      fontSize: clickTrackId === item.id ? "1.5rem" : "1rem",
                      borderLeft:
                        clickTrackId === item.id ? "2px solid #000" : "none",
                    }}
                  >
                    {item.title}
                  </p>
                </button>
              </div>
            );
          })}
        </Grid>

        {/* 卡片 */}
        <Grid item sm={8} md={8} lg={10}>
          <Grid
            container
            spacing={1}
            style={{
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            {Mem.filter(({ Track }) => Track === clickTrackId).map((item) => {
              return (
                <Grid item sm={6} md={6} lg={6}>
                  <div
                    // initial={{ x: 100 }}
                    // animate={{ x: -200, opacity: 1 }}
                    // transition={{ duration: 1 }}
                    className="CardContainer"
                    onClick={() => {
                      handleClickOpen();
                      setMemId(item.Id);
                    }}
                  >
                    {/* 賽道資訊 */}
                    <div>
                      <p style={{ fontSize: "5vw", margin: 0 }}>{item.Track}</p>
                      <div
                        style={{
                          width: "5vw",
                          height: "3px",
                          margin: "0 0 1rem",
                          background: "pink",
                        }}
                      />
                      <h2 style={{ fontSize: "2vw" }}>{item.TraksTitle}</h2>
                      {/* <div style={{ fontSize: "100px" }}>
                        {item.Track}

                        <hr style={{ width: "10%", margin: "0 0 1rem" }} />
                      </div>

                      <h2>{item.TraksTitle}</h2> */}
                    </div>
                    {/* 姓名 身分 */}

                    <h5
                      style={{
                        fontSize: "1.5vw",
                        color: "#3ABCBF",
                        height: "8vh",
                        margin: 0,
                      }}
                    >
                      {item.Name}
                    </h5>
                    {/* 照片 */}
                    <div
                      className="ImgContainer"
                      // style={{
                      //   height: "60%",
                      //   width: "60%",
                      //   display: "flex",
                      //   flexDirection: "column",
                      //   alignItems: "center",
                      // }}
                    >
                      <img
                        onClick={() => {
                          handleClickOpen();
                          setMemId(item.Id);
                        }}
                        src={item.Img}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    {/* 藍色標標 */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        width: "100%",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "row-reverse",
                        }}
                      >
                        <h4
                          className="Bluetag"
                          // style={{
                          //   margin: 0,
                          //   fontSize: "1.5vw",
                          //   display: "flex",
                          //   position: "relative",
                          //   justifyContent: "center",
                          //   alignItems: "center",
                          //   padding: "0 2rem ",
                          //   height: "2vh",
                          //   right: "-1vw",
                          //   background: "#3ABCBF",
                          //   color: "#fff",
                          //   boxShadow: "2px 0px 3px #d6ccc2",
                          // }}
                        >
                          {item.Position}
                        </h4>
                      </span>
                    </div>
                  </div>

                  <Dialog open={Open} onClose={handleClose}>
                    <DialogContent>
                      <DialogContentText>
                        {/* {item.Tollger} */}
                        {memId !== null
                          ? Mem.filter((item) => item.Id === memId)[0].Tollger
                          : null}
                      </DialogContentText>
                    </DialogContent>
                  </Dialog>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        {/* <Grid item sm={8} md={8} lg={8}>
          <Grid container spacing={1}>
            <div style={{}}>
              {Mem.map((item) => {
                if(clickTrackId===item.Id)
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
    </>
  );
}

export default MemberCard;
