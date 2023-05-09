// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// import "./Navbar.css";
// import Logo from "../../assets/Logo.png";
// import { routerList } from "../RouterList";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// function Navbar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMenu = () => setClick(false);
//   return (
//     <>
//       <div className="nav">
//         <Link to="/" style={{ borderBottom: "none" }}>
//           <img src={Logo} alt="Logo" style={{width: "10rem",
//     marginLeft:" 1.5rem"}} />
//         </Link>
//         <div className="menu-icon" onClick={handleClick}>
//             <i className={click ? <AiOutlineMenu /> : <AiOutlineClose />}/>
//           </div>
//         <ul
//         style={{display: "flex",
//           alignItems: "center",
//           justifyContent:" center",
//           listStyle: "none",
//           textAlign: "center",
//           justifyContent: "flex-end",
//           gap: "1rem",}}
//         className={click ? "nav-menu active" : "nav-menu"}>
//           {routerList.map((item) => {
//             return (
//               <li style={{padding:"1.5rem 0.5rem",
//                 color: "#fff",
//                 fontSize: "1rem",
//                 textDecoration: "none"}}>
//                 <NavLink
//                   to={item.path}
//                   key={item.name}

//                   className={({ isActive }) =>
//                     "nav-links" + (isActive ? " activated" : "")
//                   }
//                   onClick={closeMenu}
//                 >
//                   {item.name}
//                 </NavLink>
//               </li>
//             );
//           })}
//           <button className="menu-icon" onClick={handleClick}>
//             {click ? <AiOutlineMenu /> : <AiOutlineClose />}
//           </button>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Navbar;
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/Logo.png";
import { routerList } from "../RouterList";
const Navbar = () => {
  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");

  const onToggle = () => {
    collapse === "nav__menu"
      ? setCollapse("nav__menu nav__collapse")
      : setCollapse("nav__menu");

    toggleIcon === "toggler__icon"
      ? setToggleIcon("toggler__icon toggle")
      : setToggleIcon("toggler__icon");
  };

  return (
    <div className="nav__wrapper">
      <div className="container">
        <nav className="nav">
          <Link to="/" style={{ borderBottom: "none" }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "10rem", marginLeft: " 1.5rem" }}
            />
          </Link>
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
              {" "}
              <AiOutlineMenu />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
