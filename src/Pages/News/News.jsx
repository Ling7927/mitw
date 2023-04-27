import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import "./News.css";
import { AiOutlineDownload } from "react-icons/ai";

import Traks from "../../Components/Trak/Traks";
import Title from "../../assets/Title.png";
import NewsInform from "./NewsInform.json";
function News() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("SamplePDF.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "mitw2023_DM.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <div
        style={{
          background: "linear-gradient( #204241 30%,#26595a 80%, #33989d 100%)",
          color: "#fff",
        }}
      >
        <div>
          <img
            src={Title}
            alt="Title"
            style={{ width: "100%", height: "5%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            margin: "10rem 10rem",
            fontSize: "25px",
          }}
        >
          <a
            href="https://mitw.dicom.org.tw/pdf/mitw2023_DM.pdf"
            onClick={onButtonClick}
            style={{ color: "#fff" }}
          >
            MITW-DM 宣傳單下載 <AiOutlineDownload />
          </a>
        </div>
        <div
          style={{
            background: "#90a09f",
            border: "solid",
            borderRadius: "5rem 5rem",
            margin: " 10rem 10rem 0 10rem",
            padding: "3rem 5rem",
          }}
        >
          <div className="p1">
            <h2>{NewsInform.title.p1}</h2>
            <ul>
              <p>{NewsInform.p1.hash1}</p>
              <p>{NewsInform.p1.hash2}</p>
              {NewsInform.p1.context.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>

          <div className="p2">
            <Traks />
          </div>

          <div className="p3">
            <h2>{NewsInform.title.p3}</h2>
            <div style={{ display: "flex",justifyContent: "center", }}>
              <img src={Title} style={{ width: "30%" }}></img>
              <ul >
                {NewsInform.p3.context.map((item) => {
                  return <li style={{margin:"0.5rem"}}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
