import React, { useState } from "react";
import { TraksTabInform } from "./TraksTabInform";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { GrPrevious, GrNext } from "react-icons/gr";
import Slider from "react-slick";

import AutoSlider from "./AutoSlider";
function TraksTab() {
  const [onHandle, setOnHandle] = useState("1");
  const [Click, setClick] = useState("0");
  const handleClick = () => {};
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "15rem 0 5rem 0",
          width: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {TraksTabInform.map((item) => {
            return (
              <button
                onClick={() => setOnHandle(item.id)}
                style={{
                  background: onHandle === item.id ? "#7AACA9" : "#fff",
                  border: 0,
                  borderRadius: "50%",
                  padding: onHandle === item.id ? "1rem 1.5rem" : "0.5rem 1rem",
                  marginBottom: "2rem",
                  boxShadow: " 0px 3px 1px rgba(0, 0, 0, 0.5)",
                }}
              >
                <h2
                  style={{ color: onHandle === item.id ? "#fff" : "#7AACA9" }}
                >
                  {item.TabTitle}
                </h2>
              </button>
            );
          })}
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            padding: "2rem",
            marginBottom: "10px",
            borderRadius: "0px 0px 10px 10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h3
            style={{
              padding: 0,
              marginBottom: "3rem",
              justifyContent: "center",
            }}
          >
            {
              TraksTabInform.filter((item) => item.id === onHandle)[0]
                .ContentTitle
            }
          </h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* <AutoSlider/> */}

              {TraksTabInform.filter((item) => item.id === onHandle)[0].Img.map(
                (item) => {
                  return (
                    <img
                      className="card"
                      src={item.img}
                      key={item.id}
                      style={{ width: "5rem" }}
                    />

                    
                    // <Slider {...settings}>
                    //   <div className="wrap">
                    //   <img src={item.img} key={item.id}></img>
                    //   </div>
                    // </Slider>
                    
                  );
                }
              )}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <button
                style={{
                  backgroundColor: "#849E93",
                  border: "none",
                  margin: "0.5rem",
                }}
              >
                <GrPrevious />
              </button>
              <button
                style={{
                  backgroundColor: "#849C9E",
                  border: "none",
                  margin: "0.5rem",
                }}
              >
                <GrNext />
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {TraksTabInform.filter((item) => item.id === onHandle)[0].List.map(
              (item) => {
                return (
                  <div>
                    <div
                      style={{
                        height: "2rem",
                        borderRadius: "0.3rem",
                        background: "#7AACA9",
                        margin: "1rem",
                        padding: "0.3rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onClick={() => setClick(item.id)}
                      key={item.id}
                    >
                      {item.Sc}
                      {Click === item.id ? (
                        <GoTriangleDown />
                      ) : (
                        <GoTriangleUp />
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TraksTab;
