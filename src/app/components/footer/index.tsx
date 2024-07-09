import React from "react";

export default function Footer() {
  return (
    <div className={"config-footer"}>
      <div className={"posTit"}>
        <div className={"mainLogo"}>
          <span style={{ color: "rgba(140, 140, 140, 1)" }}>
            뉴테크 인재 양성 프로그램
          </span>
          <img src="./Icons/mzlogo.png" alt="" />
        </div>
        <div>
          <span
            style={{
              color: "rgba(140, 140, 140, 1)",
              fontSize: "15px",
            }}
          >
            <b>이용약관</b> | <b>개인정보취급방침</b> | <b>법적고지</b>
          </span>
          <div className={"lastTit"}>
            <span
              style={{
                color: "rgba(140, 140, 140, 1)",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              주소 | 대구광역시
            </span>
            <span
              style={{
                color: "rgba(140, 140, 140, 1)",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              이메일 |
            </span>
            <span
              style={{
                color: "rgba(140, 140, 140, 1)",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              대표전화 |
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
