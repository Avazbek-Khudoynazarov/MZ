import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

export default function Head() {
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
    <div className={"head-config"}>
      <img
        style={{ position: "absolute", right: 0, top: "10%" }}
        src="./Icons/coronaR.png"
        alt=""
      />
      <img style={{ position: "absolute" }} src="./Icons/coronaL.png" alt="" />

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
      <div style={{ paddingTop: "120px" }} className={"vidTitle"}>
        <img src="./Icons/tesang.png" alt="" />
        <span
          style={{ fontSize: "30px", fontWeight: "500", marginBottom: "9px" }}
        >
          뉴테크 공모전 수상자들의 영상을 볼 수 있어요!
        </span>
      </div>
      <div className={"HVideo"}>
        <div
          className={"HVideo2"}
          style={{
            left: 0,
            width: "75%",
            height: "719px",
            position: "relative",
          }}
        >
          <iframe
            id="vid_frame"
            src="https://www.youtube.com/embed/-vjG02BbVKM"
            style={{
              top: 0,
              left: 0,
              width: "95%",
              height: "657px",
            }}
            allowFullScreen
            scrolling="no"
            allow="encrypted-media; accelerometer; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
