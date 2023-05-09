import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import { FooterContext } from "./FooterContext";
import { Connection } from "./Connection";
function Footer() {
  return (
    <>
      <div className="footer">
        <div style={{marginLeft:"5rem"}} >
          {FooterContext.map((item) => {
            return (
              <>
                  <p style={{display:"flex",margin: 0,padding:0}}>{item.title}</p>

                <ul style={{display:"flex",margin:"1rem 0 1rem 5rem ",padding:0,flexDirection: "column" }}>
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
          <h2 style={{display:"flex",margin:0,justifyContent:"start",padding:"2rem 0 2rem 0"}}>聯絡我們</h2>
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
