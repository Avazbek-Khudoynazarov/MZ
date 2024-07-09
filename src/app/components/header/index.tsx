import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

export function NavbarHome() {
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
    <div id="home-navbar">
      <motion.div
        className="config-navbar"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: showLinks ? 1 : 0, y: showLinks ? 0 : -50 }}
        transition={{ duration: 0.3 }}
      >
        <div className="con-icon">
          <Link to="#home-navbar" smooth>
            <img src="../Icons/mz.png" alt="" />
          </Link>
        </div>
        <div className="con-link">
          <Link className="main-link" to="#home-navbar" smooth>
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
      <div className="headPage"></div>
    </div>
  );
}
