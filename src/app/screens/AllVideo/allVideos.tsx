import React, { useState, useEffect } from "react";
import "swiper/swiper-bundle.css";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";

const videos = [
  "https://www.youtube.com/embed/kMyMr-moEjs",
  "https://www.youtube.com/embed/QvDDqyvFh-U",
  "https://www.youtube.com/embed/rk1oE6ZXFL4",
  "https://www.youtube.com/embed/AHnUJtFqNYI",
  "https://www.youtube.com/embed/_j0aGqxOW4g",
  "https://www.youtube.com/embed/916aAI9kYy8",
  "https://www.youtube.com/embed/yJ6pfcwtQTE",
  "https://www.youtube.com/embed/-vjG02BbVKM",
  "https://www.youtube.com/embed/wBe4O-6yaes",
  "https://www.youtube.com/embed/TK_xGcVkVUM",
  "https://www.youtube.com/embed/TK_xGcVkVUM",
  "https://www.youtube.com/embed/TK_xGcVkVUM",
  "https://www.youtube.com/embed/TK_xGcVkVUM",
  "https://www.youtube.com/embed/TK_xGcVkVUM",
];

export default function AllMain() {
  const [showLinks, setShowLinks] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const navigate = useNavigate();

  const handleVideoClick = (url: string) => {
    const videoFrame = document.getElementById(
      "vid_frame"
    ) as HTMLIFrameElement;
    if (videoFrame) {
      videoFrame.src = url;
    }
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVideos = videos.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div
      style={{
        width: "100%",
        height: "1900px",
        background: "rgba(255, 255, 255, 1)",
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "1150px",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            paddingTop: "90px",
          }}
        >
          <iframe
            id="vid_frame"
            src={"https://www.youtube.com/embed/QvDDqyvFh-U"}
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: "657px",
            }}
            allowFullScreen
            scrolling="no"
            allow="encrypted-media; accelerometer; gyroscope; picture-in-picture"
          ></iframe>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "42%",
              paddingTop: "30px",
            }}
          >
            <div>
              <img src="./Icons/School.png" alt="" />
              <img src="./Icons/School2.png" alt="" />
            </div>
            <div className={"Cinput2"}>
              <input type="text" placeholder="검색" />
              <SearchIcon
                style={{
                  position: "absolute",
                  right: "25px",
                  top: "20px",
                  color: "rgba(47, 150, 253, 1)",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              justifyContent: "center",
            }}
          >
            {currentVideos.map((url, index) => (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
                key={index}
              >
                <section id="extra-wrapper">
                  <div className={"thumbVid2"}>
                    <a
                      style={{ textDecoration: "none" }}
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        handleVideoClick(url);
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          className="vid-thumb"
                          style={{
                            width: "250px",
                            height: "145px",
                            backgroundImage: `url(./youtube/${index + 1}.png)`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100%",
                            borderRadius: "20px 20px 0px 0px",
                          }}
                        ></div>
                        <div className={"secondST"}>
                          <p
                            style={{
                              position: "absolute",
                              fontSize: "15px",
                              fontWeight: "600",
                              color: "rgba(114, 114, 114, 1)",
                              top: 0,
                            }}
                          >
                            [초등저학년/대상]
                          </p>
                          <p
                            style={{
                              color: "rgba(0, 0, 0, 1)",
                              marginTop: "20px",
                            }}
                          >
                            <b style={{ fontSize: "20px" }}>김★린학생</b> 작품
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </section>
              </div>
            ))}
            <div className={"Cpag"}>
              <Pagination
                count={Math.ceil(videos.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "rgba(0, 0, 0, 0.87)", // Change text color
                    backgroundColor: "rgba(255, 255, 255, 1)", // Change background color
                    "&:hover": {
                      backgroundColor: "none", // Change background color on hover
                    },
                    "&.Mui-selected": {
                      backgroundColor: "rgba(255, 255, 255, 1)", // Change background color for selected item
                      color: "rgba(47, 150, 253, 1)", // Change text color for selected item
                      fontSize: "20px",
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: "none", // Change background color for selected item on hover
                      },
                    },
                  },
                  "& .MuiPaginationItem-previousNext": {
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    color: "rgba(47, 150, 253, 1)", // Change arrow color
                    border: "1px solid rgba(217, 217, 217, 1)",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      backgroundColor: "none", // Change background color on hover for arrows
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
