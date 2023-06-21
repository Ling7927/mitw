import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";
import { Grid } from "@mui/material";
import { color } from "framer-motion";
function SliderCard(props) {
  const { Id, Track, TraksTitle, Img, Position, Name, Tollger } = props.item;
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
  useEffect(() => {
    setMem(Id === clickId);
  }, [clickId]);
  return (
    <>
      <Grid container spacing={1}>
        <Grid item sm={6} md={12} lg={12}>
          <Grid
            container
            spacing={1}
            direction="column"
            style={{
              background: "#fff",
              width: "100%",
              height: "100%",
              margin: "1rem",
              boxShadow: "3px 3px 13px #dad7cd",
            }}
          >
            {/* 賽道資訊 */}
            <Grid item style={{ position: "relative" }}>
              <p style={{ fontSize: "7.5vw", margin: 0 }}>{Track}</p>
              <div
                style={{
                  width: "5vw",
                  height: "3px",
                  margin: "0 0 1rem",
                  background: "pink",
                }}
              />
              <h2>{TraksTitle}</h2>
            </Grid>
            {/* 姓名 身分 */}

            <Grid item style={{ height: "10vh" }}>
              <h5
                style={{
                  color: "#3ABCBF",
                }}
              >
                {Name}
              </h5>
            </Grid>
            {/* 照片 */}
            <Grid item style={{ display: "flex" }}>
              <img
                onClick={() => {
                  handleClickOpen();
                }}
                src={`assets/${Img}`}
                style={{
                  height: "100%",
                  width: "95%",
                  objectFit: "contain",
                }}
              />
              {/* <span
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
              </span> */}
            </Grid>
          </Grid>
          {/* 彈跳視窗 */}
          <Dialog open={Open} onClose={handleClose}>
            <DialogContent>
              <DialogContentText>{Tollger}</DialogContentText>
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
    </>
  );
}

export default SliderCard;
