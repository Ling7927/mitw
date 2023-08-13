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
        <div
          // className="Menu"
          className="MenuContainer"
        >
          <div
            className="Menu"
            // style={{ paddingRight: "2vh" }}
            onClick={() => {
              if (item.li) {
                setSubmenu(true);
              } else {
                return 0;
              }
            }}
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
          </div>
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
            {/* ==============v1.0=================== */}
            {item.li.map((sub, index) => {
              if (item.name === "歷年活動")
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
            })}
          </div>
        </div>
      )}
    </li>
  );
}

export default Submenu;
