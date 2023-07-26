// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Grid, Menu, MenuItem, Box, Popper, Paper } from "@mui/material";
// import "./Navbarr.css";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import Logo from "../../assets/Logo.png";
// import { routerList } from "../RouterList";
// const Navbar = () => {
//   const [collapse, setCollapse] = useState("nav__menu");
//   const [toggleIcon, setToggleIcon] = useState("toggler__icon");
//   const [OnHover, setOnHover] = useState("");
//   const [Hamburger, setHamburger] = useState(false);

//   const onToggle = () => {
//     collapse === "nav__menu"
//       ? setCollapse("nav__menu nav__collapse")
//       : setCollapse("nav__menu");

//     toggleIcon === "toggler__icon"
//       ? setToggleIcon("toggler__icon toggle")
//       : setToggleIcon("toggler__icon");
//   };
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//     setOnHover("");
//   };

//   return (
//     <Box style={{}}>
//       <Grid container spacing={1}>
//         <nav className="nav">
//           <Grid item xs={12} sm={12} md={3} lg={3}>
//             <Link to="/" style={{ borderBottom: "none" }}>
//               <img
//                 src={Logo}
//                 alt="Logo"
//                 style={{ width: "10rem", marginLeft: " 1.5rem" }}
//               />
//             </Link>
//           </Grid>
//           <Grid item xs={12} sm={12} md={8} lg={8} className={collapse}>
//             {routerList.map((item) => {
//               if (item.icon === null) {
//                 return (
//                   <li
//                     key={item.name}
//                     className="nav__item"
//                     onMouseEnter={handleClose}
//                   >
//                     <NavLink to={item.path} className="nav__link">
//                       {item.name}
//                     </NavLink>
//                   </li>
//                 );
//               } else {
//                 return (
//                   <div
//                     className="dropdown"
//                     style={{ float: "left", zIndex: " 900" }}
//                   >
//                     <button className="dropbtn">{item.name}</button>
//                     <div
//                       className="dropdown-content"
//                       style={{ left: "10px", padding: 0 }}
//                     >
//                       {item.li.map((li, index) => {
//                         return (
//                           <NavLink to={li.lipath} key={index}>
//                             {li.liname}
//                           </NavLink>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 );
//               }
//             })}
//           </Grid>
//           <div
//             className={toggleIcon}
//             onClick={() => {
//               onToggle();
//             }}
//           >
//             <div>
//               <AiOutlineMenu />
//             </div>
//           </div>
//         </nav>
//       </Grid>
//     </Box>
//     //   </div>
//     // </div>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { Grid, Box } from "@mui/material";
import Submenu from "./Submenu";
import Logo from "../../assets/Logo.png";
import "./Nav.css";
import { routerList } from "../RouterList";

function Navbar() {
  const [collapse, setCollapse] = useState("nav__menu");
  const [menuOpen, setMenuOpen] = useState(false);
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");
  const [submenu, setSubmenu] = useState(false);
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

  function Sub({ item, name }) {
    <div
      className="Submenu"
      // onMouseLeave={() => {
      //   if (item.li) {
      //     showSubmenu();
      //   } else {
      //     return 0;
      //   }
      // }}
    >
      {item.map((sub, index) => {
        if (name === "歷年活動")
          return (
            <a
              href={sub.lipath}
              key={sub}
              target="_blank"
              className="Subitems"
              // onClick={() => onToggle()}
            >
              {sub.liname}
            </a>
          );
        else
          return (
            <NavLink
              to={sub.lipath}
              key={index}
              className="Subitems"
              onClick={() => onToggle()}
            >
              {sub.liname}
            </NavLink>
          );
      })}{" "}
    </div>;
  }
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
        {/* =================== */}
        {/* <div className={collapse}>
          {routerList.map((item, index) => {
            return <Submenu item={item} key={index} onToggle={onToggle} />;
          })}
        </div> */}
        {/* =================== */}
        <div className={collapse}>
          {routerList.map((item, index) => {
            return (
              <>
                <div>
                  {" "}
                  {item.path !== "" ? (
                    <NavLink to={item.path} className="Menu">
                      {item.name}
                    </NavLink>
                  ) : (
                    <NavLink
                      className="Menu"
                      onMouseEnter={() => {
                        if (item.li) {
                          setSubmenu(true);
                        } else {
                          return 0;
                        }
                      }}
                      onMouseOut={() => {
                        if (item.li) {
                          setSubmenu(false);
                        } else {
                          return 0;
                        }
                      }}
                    >
                      {item.name}
                      {item.li && submenu
                        ? item.iconOpened
                        : item.li
                        ? item.iconClosed
                        : null}
                    </NavLink>
                  )}
                </div>
                {/* {item.name === "歷年活動" ? (
                  <div>
                    {" "}
                    {item.name}"ha"
                    {item.li.map((sub) => {
                      return (
                        <Link to={sub.lipath} target="_blank">
                          {sub.liname}
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div>bb</div>
                )} */}
                {/* if (item.name === "歷年活動")
            return (
              <div>
                {item.name}"ha"
                {item.li.map((sub) => {
                  return (
                    <Link to={sub.lipath} target="_blank">
                      {sub.liname}
                    </Link>
                  );
                })} */}
                {/* <Sub
                  name={item.name}
                  item={item.li}
                  key={index}
                  onToggle={onToggle}
                /> */}
              </>
            );
          })}
        </div>
        {/* ==================================================================== */}
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

export default Navbar;
