import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Submenu.css";
function Submenu({ item, onToggle }) {
  const [submenu, setSubmenu] = useState(false);
  const showSubmenu = () => setSubmenu(!submenu);
  return (
    <li key={item.name} className="Title">
      <NavLink
        to={item.path}
        className="Menu"
        onMouseEnter={() => {
          if (item.li) {
            showSubmenu();
          } else {
            return 0;
          }
        }}
        // onMouseLeave={() => {
        //   if (item.li) {
        //     showSubmenu();
        //   } else {
        //     return 0;
        //   }
        // }}
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
      <div className="Submenu"                onMouseLeave={() => {
                  if (item.li) {
                    showSubmenu();
                  } else {
                    return 0;
                  }
                }}>
        {submenu &&
          item.li.map((item, index) => {
            return (
              <NavLink
                to={item.lipath}
                key={index}
                className="Subitems"
                onClick={() => onToggle()}
                onMouseLeave={() => {
                  if (item.li) {
                    showSubmenu();
                  } else {
                    return 0;
                  }
                }}

              >
                {item.liname}
              </NavLink>
            );
          })}{" "}
      </div>
    </li>
  );
}

export default Submenu;
