import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Submenu.css";
function Submenu({ item, onToggle }) {
  const [submenu, setSubmenu] = useState(false);
  const showSubmenu = () => setSubmenu(!submenu);
  return (
    <li
      key={item.name}

      //onMouseEnter={handleClose}
    >
      <NavLink
        to={item.path}
        className="Menu"
        onClick={() => {
          if (item.li) {
            showSubmenu();
          } else {
            onToggle();
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
      {submenu &&
        item.li.map((item, index) => {
          return (
            <NavLink
              to={item.lipath}
              key={index}
              className="Subitems"
              onClick={() => onToggle()}
            >
              {item.liname}
            </NavLink>
          );
        })}
    </li>
  );
}

export default Submenu;
