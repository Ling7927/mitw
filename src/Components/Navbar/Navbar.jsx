import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { routerList } from "../RouterList";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <>
      <div className="nav">
        <Link to="/" style={{ borderBottom: "none" }}>
          <img src={Logo} alt="Logo" />
        </Link>
        <ul
        style={{display: "flex",
          alignItems: "center",
          justifyContent:" center",
          listStyle: "none",
          textAlign: "center",
          justifyContent: "flex-end",
          gap: "1rem",}}
        className={click ? "nav-menu active" : "nav-menu"}>
          {routerList.map((item) => {
            return (
              <li style={{padding:"1.5rem 0.5rem",
                color: "#fff",
                fontSize: "1rem",
                textDecoration: "none"}}>
                <NavLink
                  to={item.path}
                  key={item.name}
                  
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMenu}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
          <button className="menu-icon" onClick={handleClick}>
            {click ? <AiOutlineMenu /> : <AiOutlineClose />}
          </button>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
