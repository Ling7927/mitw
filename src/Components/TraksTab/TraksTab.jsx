import React, { useEffect, useState } from "react";
import { TraksTabInform } from "./TraksTabInform";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import PhotoSlider from "../../Components/Slider/PhotoSlider";
function TraksTab() {
  const [onHandle, setOnHandle] = useState("1");
  const [Click, setClick] = useState("0");
  const handleClick = () => {};

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "5% 0 5% 0",
          width: "80%",
        }}
      >
        {/* 上面按鈕 */}
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
                  padding: onHandle === item.id ? "2rem 1.5rem" : "1.5rem 1rem",
                  marginBottom: "2rem",
                  boxShadow: " 0px 3px 1px rgba(0, 0, 0, 0.5)",
                }}
              >
                <p
                  style={{
                    fontSize:onHandle === item.id ? "2rem" : "1.5rem",
                    color: onHandle === item.id ? "#fff" : "#7AACA9",
                    margin: 0,
                  }}
                >
                  {item.TabTitle}
                </p>
              </button>
            );
          })}
        </div>
        {/* 內容 */}
        <div
          style={{
            backgroundColor: "#fff",
            padding: "2rem",
            marginBottom: "10px",
            borderRadius: "10px 10px 10px 10px",
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
          {/* 輪播照片 */}
          <div
            style={{
              width: "60%",
              margin: "2rem",
            }}
          >
            <PhotoSlider
              images={
                TraksTabInform.filter((item) => item.id === onHandle)[0].Img
              }
            />
          </div>
          {/* 內容選單 */}
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
                    <button
                      style={{
                        height: "2rem",
                        width:"100%",
                        border:"none",
                        borderRadius: "0.3rem",
                        background: "#7AACA9",
                        margin: "1rem",
                        padding: "0.3rem",
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
                    </button>
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
