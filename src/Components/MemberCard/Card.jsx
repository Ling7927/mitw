import React,{useState} from 'react'
import "./MemberCard.css";
import {  Mem } from "../../Pages/Member/Inform";
import ReactCardFlip from "react-card-flip";

function Card({item}) {
    const [memId, setMemId] = useState(null);
//   const [Open, setOpen] = useState(false);
//   const [id, setId] = useState(null);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   flip
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
   // e.preventDefault();
    setIsFlipped((prevState) => !prevState);
  };
  return (
    <>
    <ReactCardFlip isFlipped={isFlipped}>
    <div
    // initial={{ x: 100 }}
    // animate={{ x: -200, opacity: 1 }}
    // transition={{ duration: 1 }}
    className="CardContainer"
  
  >
    {/* 賽道資訊 */}
    <div>
      <p className="Tracks">{item.Track}</p>
      <h2 className="TracksTitle">{item.TraksTitle}</h2>
    </div>
    {/* 姓名 身分 */}
    <h5
      className="Name" // style={{
      //   fontSize: "1.5vw",
      //   color: "#3ABCBF",
      //   height: "8vh",
      //   margin: 0,
      // }}
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
        //  handleClickOpen();
        handleClick();

          setMemId(item.Id);
        }}
        src={item.Img}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          cursor:"pointer"

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
{/* back */}
    <div onClick={handleClick}   style={{display:"flex",flexDirection:"column",height:"100%",cursor:"pointer",maxWidth:"514px",justifyContent: "space-between",  boxShadow: "3px 3px 13px #dad7cd",padding:"2vw",overflowY:"auto"}} >
    {memId !== null
          ? Mem.filter((item) => item.Id === memId)[0].Tollger
          : null}
    </div>
  </ReactCardFlip>
{/* 
  <Dialog open={Open} onClose={handleClose}>
    <DialogContent>
      <DialogContentText>
        {/* {item.Tollger} */}
        {/* {memId !== null 
          ? Mem.filter((item) => item.Id === memId)[0].Tollger
          : null}
      </DialogContentText>
    </DialogContent>
  </Dialog> */}
  </>
  )
}

export default Card