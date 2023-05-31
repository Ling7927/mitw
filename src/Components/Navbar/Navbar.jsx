import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
import "./Nav.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/Logo.png";
import { routerList } from "../RouterList";
const Navbar = () => {
  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");
  const [onhandle,setOnHandle] =useState()
  const onToggle = () => {
    collapse === "nav__menu"
      ? setCollapse("nav__menu nav__collapse")
      : setCollapse("nav__menu");

    toggleIcon === "toggler__icon"
      ? setToggleIcon("toggler__icon toggle")
      : setToggleIcon("toggler__icon");
  };

  return (
 
        <Grid container spacing={1}>
          <nav className="nav">
            <Grid item xs={12} sm={12} md={3}>

              <Link to="/" style={{ borderBottom: "none" }}>
                <img
                  src={Logo}
                  alt="Logo"
                  style={{ width: "10rem", marginLeft: " 1.5rem" }}
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>    
            <ul className={collapse}>
              {routerList.map((item) => (
                <li key={item.name} className="nav__item">
                  <NavLink to={item.path} className="nav__link">
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className={toggleIcon} onClick={onToggle}>
             <div>
               <AiOutlineMenu />
             </div>
               
              
            </div>
            </Grid>
          </nav>
        </Grid>
    //   </div>
    // </div>
  );
};

export default Navbar;
