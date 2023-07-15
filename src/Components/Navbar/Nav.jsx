import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { Grid, Box } from "@mui/material";
import Submenu from "./Submenu";
import Logo from "../../assets/Logo.png";
import "./Nav.css";
import { routerList } from "../RouterList";

function Nav() {
  const [collapse, setCollapse] = useState("nav__menu");
  const [menuOpen, setMenuOpen] = useState(false);
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");
  const onToggle = () => {
    setMenuOpen(!menuOpen);
    collapse === "nav__menu"
      ? setCollapse("nav__menu nav__collapse")
      : setCollapse("nav__menu");

    toggleIcon === "toggler__icon"
      ? setToggleIcon("toggler__icon toggle")
      : setToggleIcon("toggler__icon");
  };
  return (
    <>
      {/* <Grid container spacing={1}> */}
      <nav className="nav">
        {/* <Grid item xs={12} sm={12} md={3} lg={3}> */}
        <Link to="/" style={{ borderBottom: "none" }}>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "10rem", marginLeft: " 1.5rem" }}
          />
        </Link>
        {/* </Grid> */}
        {/* <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            //  style={{ display: "flex", justifyContent: "space-evenly" }}
            className={collapse}
          > */}
        <div className={collapse}>
          {routerList.map((item, index) => {
            return <Submenu item={item} key={index} onToggle={onToggle} />;
          })}
        </div>
        {/* </Grid> */}
        <div
          className={toggleIcon}
          onClick={() => {
            onToggle();
          }}
        >
          <div>
            <AiOutlineMenu />
          </div>
        </div>
      </nav>
      {/* </Grid> */}
    </>
  );
}

export default Nav;
