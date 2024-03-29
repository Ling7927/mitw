import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { Twirl as Hamburger } from "hamburger-react";
import { Grid, Box } from "@mui/material";
import Submenu from "./Submenu";
import Logo from "../../assets/Logo.png";
import "./Nav.css";
import { routerList } from "../RouterList";

function Nav() {
  const [collapse, setCollapse] = useState("nav__menu");
  const [menuOpen, setMenuOpen] = useState(false);
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");
  const [submenu, setSubmenu] = useState(false);
  const [isOpen, setOpen] = useState(false); //hamburger
  const showSubmenu = () => setSubmenu(!submenu);
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
    <Grid
      container
      sx={{ position: "fixed", top: 0, background: "#fdfdfd", zIndex: "9999" }}
    >
      <nav className="nav">
        <Grid item xs={2} sm={2} md={2} lg={2} style={{ display: "flex" }}>
          <Link to="/" style={{ borderBottom: "none" }}>
            <img
              src={Logo}
              alt="Logo"
              className="Logo"
              style={{ marginLeft: " 1.5rem" }}
            />
          </Link>
        </Grid>
        <Grid
          item
          xs={10}
          sm={10}
          md={10}
          lg={10}
          //  style={{ display: "flex", justifyContent: "space-evenly" }}
          className={collapse}
        >
          {" "}
          {/* =================== */}
          {/* <div className={collapse}> */}
          {routerList.map((item, index) => {
            return <Submenu item={item} key={index} onToggle={onToggle} />;
          })}
          {/* </div> */}
          {/* =================== */}
          {/* <div className={collapse}>
          {routerList.map((item, index) => {
            return
             <Submenu item={item} key={index} onToggle={onToggle} />;
          })}
        </div> */}
          {/* ==================================================================== */}
        </Grid>
        <div
          className={toggleIcon}
          // onClick={() => {
          //   onToggle();
          // }}
        >
          <Hamburger
            onToggle={(toggled) => {
              if (toggled) {
                // open a menu
                setCollapse("nav__menu nav__collapse");
                setToggleIcon("toggler__icon toggle");
              } else {
                // close a menu
                setCollapse("nav__menu");
                setToggleIcon("toggler__icon");
              }
            }}
          />
        </div>
      </nav>
    </Grid>
  );
}

export default Nav;
