import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Grid, Menu, MenuItem, Box, Popper, Paper } from "@mui/material";
import "./Nav.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/Logo.png";
import { routerList } from "../RouterList";
const Navbar = () => {
  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");
  const [OnHover, setOnHover] = useState("");
  const [Hamburger, setHamburger] = useState(false);

  const onToggle = () => {
    collapse === "nav__menu"
      ? setCollapse("nav__menu nav__collapse")
      : setCollapse("nav__menu");

    toggleIcon === "toggler__icon"
      ? setToggleIcon("toggler__icon toggle")
      : setToggleIcon("toggler__icon");
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOnHover("");
  };

  return (
    <Box style={{}}>
      <Grid container spacing={1}>
        <nav className="nav">
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Link to="/" style={{ borderBottom: "none" }}>
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "10rem", marginLeft: " 1.5rem" }}
              />
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} className={collapse}>
            {routerList.map((item) => {
              if (item.icon === null) {
                return (
                  <li
                    key={item.name}
                    className="nav__item"
                    onMouseEnter={handleClose}
                  >
                    <NavLink to={item.path} className="nav__link">
                      {item.name}
                    </NavLink>
                  </li>
                );
              } else {
                return (
                  <div
                    className="dropdown"
                    style={{ float: "left", zIndex: " 900" }}
                  >
                    <button className="dropbtn">{item.name}</button>
                    <div
                      className="dropdown-content"
                      style={{ left: "32px", padding: 0 }}
                    >
                      {item.li.map((li, index) => {
                        return (
                          <NavLink to={li.lipath} key={index}>
                            {li.liname}
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                );
              }
            })}
          </Grid>
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
      </Grid>
    </Box>
    //   </div>
    // </div>
  );
};

export default Navbar;
