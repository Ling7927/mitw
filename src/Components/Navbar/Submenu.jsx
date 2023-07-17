import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Submenu.css";
function Submenu({ item, onToggle }) {
  const [submenu, setSubmenu] = useState(false);
  const showSubmenu = () => setSubmenu(!submenu);
  return (
    <li key={item.name} className="Title">
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
            {item.li.map((item, index) => {
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
            })}{" "}
          </div>
        </NavLink>
      )}
    </li>
  );
}

export default Submenu;
