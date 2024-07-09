import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

const titles = [
  "[초등저학년/대상]",
  "[초등저학년/우수상]",
  "[초등저학년/우수상]",
  "[초등저학년/우수상]",
  "[초등저학년/최우수상]",
  "[초등저학년/최우수상]",
  "[초등고학년/대상]",
  "[초등고학년/우수상]",
  "[초등고학년/우수상]",
  "[초등고학년/우수상]",
  "[초등고학년/최우수상]",
  "[초등고학년/최우수상]",
];

const titles2 = [
  "김★린학생 작품",
  "정★민학생 작품",
  "이★윤학생 작품",
  "서★아학생 작품",
  "이★별학생 작품",
  "최★원학생 작품",
  "이★연학생 작품",
  "최★솔학생 작품",
  "정★린학생 작품",
  "이★윤학생 작품",
  "박★향학생 작품",
  "김★연학생 작품",
];

const Links = [
  { id: 1, src: "https://www.youtube.com/embed/kMyMr-moEjs", alt: "Video 1" },
  { id: 2, src: "https://www.youtube.com/embed/QvDDqyvFh-U", alt: "Video 2" },
  { id: 3, src: "https://www.youtube.com/embed/rk1oE6ZXFL4", alt: "Video 3" },
  { id: 4, src: "https://www.youtube.com/embed/AHnUJtFqNYI", alt: "Video 4" },
  { id: 5, src: "https://www.youtube.com/embed/_j0aGqxOW4g", alt: "Video 5" },
  { id: 6, src: "https://www.youtube.com/embed/916aAI9kYy8", alt: "Video 6" },
  { id: 7, src: "https://www.youtube.com/embed/yJ6pfcwtQTE", alt: "Video 7" },
  { id: 8, src: "https://www.youtube.com/embed/-vjG02BbVKM", alt: "Video 8" },
  { id: 9, src: "https://www.youtube.com/embed/wBe4O-6yaes", alt: "Video 9" },
  { id: 10, src: "https://www.youtube.com/embed/TK_xGcVkVUM", alt: "Video 10" },
  { id: 11, src: "https://www.youtube.com/embed/TK_xGcVkVUM", alt: "Video 11" },
  { id: 12, src: "https://www.youtube.com/embed/TK_xGcVkVUM", alt: "Video 12" },
];

const images = [
  { id: 1, src: "/youtube/1.png", alt: "Image 1" },
  { id: 2, src: "/youtube/2.png", alt: "Image 2" },
  { id: 3, src: "/youtube/3.png", alt: "Image 3" },
  { id: 4, src: "/youtube/4.png", alt: "Image 4" },
  { id: 5, src: "/youtube/5.png", alt: "Image 5" },
  { id: 6, src: "/youtube/6.png", alt: "Image 6" },
  { id: 7, src: "/youtube/7.png", alt: "Image 7" },
  { id: 8, src: "/youtube/8.png", alt: "Image 8" },
  { id: 9, src: "/youtube/9.png", alt: "Image 9" },
  { id: 10, src: "/youtube/10.png", alt: "Image 10" },
  { id: 10, src: "/youtube/11.png", alt: "Image 10" },
  { id: 10, src: "/youtube/12.png", alt: "Image 10" },
];

export default function AllVideos() {
  useEffect(() => {
    new Swiper(".swiper-container-videos", {
      loop: false,
      slidesPerView: "auto",
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-custom-next",
        prevEl: ".swiper-custom-prev",
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
    });

    $(".swiper-container-videos .swiper-wrapper .swiper-slide a").click(
      function (event) {
        event.preventDefault();
        $(this)
          .closest(".swiper-slide")
          .addClass("selected")
          .siblings()
          .removeClass("selected");
      }
    );

    $(".swiper-container-videos .swiper-slide").first().addClass("selected");
  }, []);

  const handleVideoClick = (url: string) => {
    const videoFrame = document.getElementById(
      "vid_frame"
    ) as HTMLIFrameElement;
    if (videoFrame) {
      videoFrame.src = url;
    }
  };

  return (
    <div className="config-all">
      <div className={"all-videos"}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <img src="./Icons/School.png" alt="" />
            <img src="./Icons/School2.png" alt="" />
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
        {Links.slice(0, 4).map((Links, index) => (
          <div className={"video-row"} key={Links.id}>
            <li className="swiper-slide">
              <a
                style={{ textDecoration: "none" }}
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  handleVideoClick("https://www.youtube.com/embed/QvDDqyvFh-U");
                }}
              >
                <div>
                  <img
                    style={{
                      borderRadius: "20px 20px 0px 0px",
                      width: "281px",
                      height: "156px",
                    }}
                    src="./Image/vid.png"
                    alt="Video 1 Thumbnail"
                  />
                </div>
                <div className={"all-tit"}>
                  <p className="desc2">[초등저학년/대상]</p>
                  <p
                    style={{
                      position: "absolute",
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "rgba(60, 60, 60, 1)",
                      paddingTop: "12px",
                    }}
                  >
                    <b
                      style={{
                        fontSize: "25px",
                        fontWeight: 500,
                        color: "black",
                      }}
                    >
                      김★린학생
                    </b>{" "}
                    작품
                  </p>
                </div>
              </a>
            </li>
          </div>
        ))}
        <div>
          <li className="swiper-slide">
            <a
              style={{ textDecoration: "none" }}
              href="#"
              onClick={(event) => {
                event.preventDefault();
                handleVideoClick("https://www.youtube.com/embed/QvDDqyvFh-U");
              }}
            >
              <div>
                <img
                  style={{
                    borderRadius: "20px 20px 0px 0px",
                    width: "281px",
                    height: "156px",
                  }}
                  src="./Image/vid.png"
                  alt="Video 1 Thumbnail"
                />
              </div>
              <div className={"all-tit"}>
                <p className="desc2">[초등저학년/대상]</p>
                <p
                  style={{
                    position: "absolute",
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "rgba(60, 60, 60, 1)",
                    paddingTop: "12px",
                  }}
                >
                  <b
                    style={{
                      fontSize: "25px",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    김★린학생
                  </b>{" "}
                  작품
                </p>
              </div>
            </a>
          </li>
        </div>
        <div>
          <li className="swiper-slide">
            <a
              style={{ textDecoration: "none" }}
              href="#"
              onClick={(event) => {
                event.preventDefault();
                handleVideoClick("https://www.youtube.com/embed/QvDDqyvFh-U");
              }}
            >
              <div>
                <img
                  style={{
                    borderRadius: "20px 20px 0px 0px",
                    width: "281px",
                    height: "156px",
                  }}
                  src="./Image/vid.png"
                  alt="Video 1 Thumbnail"
                />
              </div>
              <div className={"all-tit"}>
                <p className="desc2">[초등저학년/대상]</p>
                <p
                  style={{
                    position: "absolute",
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "rgba(60, 60, 60, 1)",
                    paddingTop: "12px",
                  }}
                >
                  <b
                    style={{
                      fontSize: "25px",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    김★린학생
                  </b>{" "}
                  작품
                </p>
              </div>
            </a>
          </li>
        </div>
        <div></div>
      </div>
    </div>
  );
}
