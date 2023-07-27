import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
import "./Dialog.css";
function SimpleDialog({ Img, open, onClose }) {
  const handleClose = () => {
    onClose(Img);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      style={{ maxWidth: "100%", maxHeight: "100%" }}
    >
      <img src={Img} style={{ width: "100%", height: "80vh" }}></img>
    </Dialog>
  );
}
// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

function ImgDialog({ Img, Width }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <img onClick={handleClickOpen} src={Img} style={{ width: Width }}></img>
      <SimpleDialog Img={Img} open={open} onClose={handleClose} />
    </>
  );
}

export default ImgDialog;
