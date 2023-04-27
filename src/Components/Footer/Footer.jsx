import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import { FooterContext } from "./FooterContext";
import { Connection } from "./Connection";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="member" style={{}}>
          {FooterContext.map((item) => {
            return (
              <>
                <p>{item.title}</p>
                <ul style={{ margin: "0" }}>
                  {item.data.map((index) => {
                    return (
                      <li style={{ listStyle: "none" }}>
                        <Link to={index.path} style={{ color: "#fff" }}>
                          {index.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          })}
        </div>
        <div className="connection">
          <h2>聯絡我們</h2>
          {Connection.map((item) => {
            return (
              <p>
                {item.title}
                {item.context}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Footer;
