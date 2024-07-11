import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import "swiper/swiper-bundle.css";

export default function MainHead() {
  const [showLinks, setShowLinks] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowLinks(false);
    } else {
      setShowLinks(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className={"conHead2"}>
      <div>
        <motion.div
          className="config-navbar"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: showLinks ? 1 : 0, y: showLinks ? 0 : -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="con-icon">
            <Link to="/" smooth>
              <img src="../Icons/mz.png" alt="" />
            </Link>
          </div>
          <div className="con-link">
            <Link className="main-link" to="/" smooth>
              소개
            </Link>
            <Link className="main-link" to="/other-page">
              학생작품
            </Link>
            <Link className="main-link" to="#section1">
              수상작품
            </Link>
          </div>
        </motion.div>
      </div>
      <div style={{ background: "none" }} className={"wrapPic"}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "100px",
          }}
        >
          <div>
            <img src="./Icons/mztable.png" alt="" />
            <img src="./Icons/mztitle.png" alt="" />
          </div>
          <div>
            <span>
              <b>MZ</b>새싹캠프에 참여한 학생들의 멋진 작품을 볼 수 있어요!
            </span>
          </div>
        </div>
        <div className={"wrap1"}>
          <img src="./Image/vid6.png" alt="" />
          <img src="./Image/vid7.png" alt="" />
          <img src="./Image/vid5.png" alt="" />
          <img src="./Image/vid8.png" alt="" />
          <img src="./Image/vid9.png" alt="" />
          <img src="./Image/vid6.png" alt="" />
          <img src="./Image/vid6.png" alt="" />
        </div>
        <div className={"wrap2"}>
          <img src="./Image/wrap.png" alt="" />
          <img src="./Image/wrap2.png" alt="" />
          <img src="./Image/wrap3.png" alt="" />
          <img src="./Image/wrap2.png" alt="" />
          <img src="./Image/wrap.png" alt="" />
          <img src="./Image/wrap3.png" alt="" />
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}
