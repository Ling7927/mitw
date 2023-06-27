import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";
import { Tabs, Mem } from "../../Pages/Member/Inform";
import { motion } from "framer-motion";
import { Box, Grid } from "@mui/material";
import MemberSlider from "./MemberSlider";
function MemberCard() {
  // const { Id, Traks, Img, Members, Tollger } = props.item;
  const [clickId, setClickId] = useState(1);
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
  // setMem(Mem.Id===clickId)
  //   },[clickId])
  return (
    <>
      <Grid container spacing={1}>
        <Grid item sm={12} md={12} lg={12}>
          <h4>賽道工作小組</h4>
          <hr />
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
                      paddingLeft: "10px",
                      fontSize: clickId === item.id ? "1.5rem" : "1rem",
                      borderLeft:
                        clickId === item.id ? "2px solid #000" : "none",
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
          <Grid container spacing={1} style={{ width: "100%" }}>
            {Mem.filter(({ Track }) => Track === clickId).map((item) => {
              return (
                <Grid item sm={6} md={6} lg={6}>
                  <Grid
                    container
                    spacing={1}
                    direction="column"
                    style={{
                      background: "#fff",
                      width: "100%",
                      margin: "1rem",
                      boxShadow: "3px 3px 13px #dad7cd",
                    }}
                    onClick={() => {
                      handleClickOpen();
                      setMemId(item.Id);
                    }}
                  >
                    {/* 賽道資訊 */}
                    <Grid item>
                      <p style={{ fontSize: "7.5vw", margin: 0 }}>
                        {item.Track}
                      </p>
                      <div
                        style={{
                          width: "7vw",
                          height: "3px",
                          margin: "0 0 1rem",
                          background: "pink",
                        }}
                      />
                      <h2>{item.TraksTitle}</h2>
                      {/* <div style={{ fontSize: "100px" }}>
                        {item.Track}

                        <hr style={{ width: "10%", margin: "0 0 1rem" }} />
                      </div>

                      <h2>{item.TraksTitle}</h2> */}
                    </Grid>
                    {/* 姓名 身分 */}

                    <Grid item height="10vh">
                      <h5
                        style={{
                          color: "#3ABCBF",
                        }}
                      >
                        {item.Name}
                      </h5>
                    </Grid>
                    {/* 照片 */}
                    <Grid item style={{ height: "60%", width: "90%" }}>
                      <img
                        onClick={() => {
                          handleClickOpen();
                        }}
                        src={`assets/${item.Img}`}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "fill",
                        }}
                      />
                      {/* <img
                        onClick={() => {
                          handleClickOpen();
                          setMemId(item.Id);
                        }}
                        src={`assets/${item.Img}`}
                        style={{
                          height: "100%",
                          width: "95%",
                          objectFit: "contain",
                        }}
                      /> */}
                    </Grid>
                    <Grid item>
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
                    </Grid>
                  </Grid>

                  <Dialog open={Open} onClose={handleClose}>
                    <DialogContent>
                      <DialogContentText>
                        {/* {item.Tollger} */}
                        {console.log(item.Id, "aaaaaaa")}
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
    </>
  );
}

export default MemberCard;
