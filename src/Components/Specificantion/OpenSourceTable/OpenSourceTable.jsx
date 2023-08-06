import React from "react";
import { Title, TBody } from "./Inform";
import { Table } from "reactstrap";

function OpenSourceTable() {
  return (
    <div>
      <Table bordered style={{ backgroundColor: "#f3f4f6" }}>
        <thead>
          <tr>
            {Title.map((item, i) => {
              return <th key={i}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody style={{ justifyContent: "center", alignItems: "center" }}>
          {TBody.map((item, i) => {
            return (
              <tr
                key={i}
                style={{
                  height: "100%",
                }}
              >
                <th
                  scope="row"
                  style={{
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <img
                      src={item.img}
                      width={"30%"}
                      style={{ height: "100%" }}
                    />
                    <a
                      href={item.link}
                      target="_blank"
                      style={{
                        color: "#295285",
                        textDecoration: "none",
                        height: "100%",
                      }}
                    >
                      {item.name}{" "}
                    </a>
                  </div>
                </th>
                <th>{item.introduce}</th>
                <th
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item.traks}
                </th>
                <th>
                  <a
                    href={item.clink}
                    target="_blank"
                    style={{ color: "#295285", textDecoration: "none" }}
                  >
                    {item.contributor}
                  </a>
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default OpenSourceTable;
