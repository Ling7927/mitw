import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";
import { Tabs, Mem } from "../../Pages/Member/Inform";
import Card from "./Card";
import { Box, Grid } from "@mui/material";
import { CCard, CCardImage, CCardText, CCardTitle } from "@coreui/react";
import "./MemberCard.css";
import MemberSlider from "./MemberSlider";
function MemberCard() {
  // const { Id, Traks, Img, Members, Tollger } = props.item;
  const [clickTrackId, setclickTrackId] = useState(1);
  const [Tracksopen, setTracksopen] = useState("MemSec");
  const onToggle = () => {
    Tracksopen === "MemSec"
      ? setTracksopen("MemSec_click")
      : setTracksopen("MemSec");
  };
  // vvvvvvv dialog use
  const [memId, setMemId] = useState(null);
  const [Open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  const handleClickOpen = (ID) => {
    setMemId(ID);
    setOpen(true);
    // console.log(memId);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    //  setMemId(Mem.Id === clickTrackId);
    // console.log(memId);
  }, [clickTrackId]);
  // MMMMMM dialog use

  return (
    <>
      <Grid
        container
        className="AllContentbackground"
        style={{
          justifyContent: "center",
          // margin: "2vw 5vw",

          padding: "5vh 10vh",
          background: "#fff",
          minHeight: "80vh",
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} height="10vh" sx={{}}>
          <h2>賽道工作小組</h2>
          <hr style={{ margin: "2vh 0 " }} />
        </Grid>
        {/* 選單 */}
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          lg={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "2rem" }}>Track</p>
          {Tabs.map((item) => {
            return (
              <div>
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
                    className={Tracksopen}
                    onClick={() => {
                      onToggle();
                    }}
                    style={{
                      margin: 0,
                      paddingLeft: "10px",
                      fontSize: clickTrackId === item.id ? "1.4rem" : "1.2rem",

                      fontWeight: clickTrackId === item.id ? "bold" : "normal",
                      borderLeft:
                        clickTrackId === item.id ? "4px solid orange" : "none",
                    }}
                  >
                    {item.title}
                    {item.name}
                  </p>
                </button>
              </div>
            );
          })}
        </Grid>

        {/* 卡片 */}
        <Grid item xs={12} sm={10} md={10} lg={10}>
          <Grid
            container
            gap={1}
            style={{
              // height: "100%",
              width: "100%",
              // flexWrap: "nowrap",
              justifyContent: "space-evenly",
            }}
          >
            {Mem.filter(({ Track }) => Track === clickTrackId).map(
              (item, i) => {
                return (
                  <Grid
                    item
                    xs={10}
                    sm={10}
                    md={5}
                    lg={5}
                    key={i}
                    sx={{
                      display: "flex",
                      // , height: "100%"
                    }}
                  >
                    {/* flipCard */}
                    {/* <Card item={item} /> */}
                    {/* dialog card */}
                    {/* <div
                     
                      onClick={() => {
                        handleClickOpen(item.Id); */}
                    {/* setMemId(item.Id); */}
                    {/* }}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        background: "#fff",
                        width: " 100%",
                        height: " 75vh",

                        padding: " 0 1vw",
                        boxShadow: "3px 3px 13px #dad7cd",
                      }}
                    > */}
                    {/* 賽道資訊 */}
                    {/* <div>
                        <p className="Tracks">{item.Track}</p>
                        <h2 className="TracksTitle">{item.TraksTitle}</h2>
                      </div> */}
                    {/* 姓名 身分 */}
                    {/* <h5
                        className="Name" 
                      >
                        {item.Name}
                      </h5> */}
                    {/* 照片 */}
                    {/* <div className="ImgContainer">
                        <img
                          src={item.Img}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            cursor: "pointer",
                          }}
                        />
                      </div> */}
                    {/* 藍色標標 */}
                    {/* <div
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
                          <h4 className="Bluetag">{item.Position}</h4>
                        </span>
                      </div>
                    </div> */}
                    {/* card component */}
                    <CCard
                      className="CardContainer"
                      style={{ width: "100%", border: "none" }}
                    >
                      <p className="Tracks"> {item.Track}</p>
                      <h2 className="TracksTitle">{item.TraksTitle}</h2>
                      <div style={{ height: "3.5rem" }}>
                        <h5 className="Name">{item.Name}</h5>
                      </div>
                      <CCardImage
                        style={{ width: "90%", cursor: "pointer" }}
                        src={item.Img}
                        onClick={() => {
                          handleClickOpen(item.Id);
                          // setMemId(item.Id);
                        }}
                      />

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
                          <h4 className="Bluetag">{item.Position}</h4>
                        </span>
                      </div>
                    </CCard>
                    {Open === true && memId === item.Id ? (
                      <Dialog open={Open} onClose={handleClose}>
                        <DialogContent>
                          <DialogContentText>
                            <div style={{ width: "50vw" }}>{item.Tollger}</div>
                          </DialogContentText>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      ""
                    )}
                  </Grid>
                );
              }
            )}
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
