import { useState } from "react";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";
import MemberSlider from "./MemberSlider";
function MemberCard(props) {
  const { Id, Traks, Img, Members, Tollger } = props.item;

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
      <div style={{ margin: "5rem",background:"#dcdcdc" }}>
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
        <Dialog open={Open} onClose={handleClose}>
          <DialogContent>
            <DialogContentText>
              {/* {id !== null
                ? item.filter((item) => Id === id)[0].Tollger
                : null} */}
                {Tollger}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>

      {/* --------------------------- */}

      {/* <div style={{ margin: "5rem" }}> */}
      {/* {Mem.map((item) => {
          return (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >  */}
      {/*賽道*/}
      {/* <h3>{item.Traks}</h3> */}

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
        </Dialog> */}
      {/* </div>     */}
    </>
  );
}

export default MemberCard;
