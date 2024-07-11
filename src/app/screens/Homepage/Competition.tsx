import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

const Competition: React.FC = () => {
  const navigate = useNavigate();

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

  const handleMoreButtonClick = () => {
    navigate("/other-page#headCon2");
  };

  return (
    <div className="com-config">
      <img
        style={{ position: "absolute", left: "5%", marginTop: "20%" }}
        src="./Icons/com.png"
        alt=""
      />
      <img
        style={{ position: "absolute", right: "5%", marginTop: "10%" }}
        src="./Icons/com2.png"
        alt=""
      />
      <div className={"comMain"}>
        <div className={"vidTitle"}>
          <div>
            <img src="./Icons/mztable.png" alt="" />
            <img src="./Icons/mztitle.png" alt="" />
          </div>
          <span
            style={{ fontSize: "20px", fontWeight: "500", marginBottom: "9px" }}
          >
            <b>MZ</b> 새싹캠프에 참여한 학생들의 멋진 작품을 볼 수 있어요!
          </span>
        </div>
        <div className="vid-main-wrapper clearfix">
          <div className="vid-container">
            <div
              style={{
                left: 0,
                width: "881px",
                height: "514px",
                position: "relative",
              }}
            >
              <iframe
                id="vid_frame"
                src="https://www.youtube.com/embed/-vjG02BbVKM"
                style={{
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                }}
                allowFullScreen
                scrolling="no"
                allow="encrypted-media; accelerometer; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>

        <section
          id="extra-wrapper"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingRight: "32px",
            paddingLeft: "32px",
          }}
        >
          <div className={"thumbVid"}>
            <button
              title="Prev"
              className="swiper-custom-prev"
              style={{
                width: "75px",
                height: "75px",
                zIndex: 100,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                background: "none",
                border: "none",
              }}
            >
              <img
                style={{
                  width: "75px",
                  height: "75px",
                  borderRadius: "50%",
                }}
                src="./Icons/left.png"
                alt=""
              />
            </button>
            <nav
              style={{
                marginLeft: "12px",
              }}
              className="swiper-container swiper-container-videos slider-produtos-destaque"
            >
              <ol
                className="swiper-wrapper"
                style={{ listStyleType: "none", padding: "0px" }}
              >
                <li className="swiper-slide">
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      handleVideoClick(
                        "https://www.youtube.com/embed/QvDDqyvFh-U"
                      );
                    }}
                  >
                    <span className="vid-thumb">
                      <img
                        style={{
                          borderRadius: "20px 20px 0px 0px",
                        }}
                        src="./Image/vid.png"
                        alt="Video 1 Thumbnail"
                      />
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        height: "22px",
                        borderRadius: "0px 0px 20px 20px",
                      }}
                    >
                      <p className="desc">[효동초등학교/4학년] </p>
                      <p>350</p>
                    </div>
                  </a>
                </li>
                <li className="swiper-slide">
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      handleVideoClick(
                        "https://www.youtube.com/embed/rk1oE6ZXFL4"
                      );
                    }}
                  >
                    <span className="vid-thumb">
                      <img
                        style={{
                          borderRadius: "20px 20px 0px 0px",
                        }}
                        src="./Image/vid2.png"
                        alt="Video 2 Thumbnail"
                      />
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        height: "22px",
                        borderRadius: "0px 0px 20px 20px",
                      }}
                    >
                      <p>[산격초등학교/5학년] </p>
                      <p className="desc">350</p>
                    </div>
                  </a>
                </li>

                <li className="swiper-slide">
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      handleVideoClick(
                        "https://www.youtube.com/embed/yJ6pfcwtQTE"
                      );
                    }}
                  >
                    <span className="vid-thumb">
                      <img
                        style={{ borderRadius: "20px 20px 0px 0px" }}
                        src="./Image/vid3.png"
                        alt="Video 4 Thumbnail"
                      />
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        height: "22px",
                        borderRadius: "0px 0px 20px 20px",
                      }}
                      className="desc"
                    >
                      <p>[율원초등학교/5학년]</p>
                      <p>350</p>
                    </div>
                  </a>
                </li>
                <li className="swiper-slide">
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      handleVideoClick(
                        "https://www.youtube.com/embed/yJ6pfcwtQTE"
                      );
                    }}
                  >
                    <span className="vid-thumb">
                      <img
                        style={{ borderRadius: "20px 20px 0px 0px" }}
                        src="./Image/vid4.png"
                        alt="Video 5 Thumbnail"
                      />
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        height: "22px",
                        borderRadius: "0px 0px 20px 20px",
                      }}
                      className="desc"
                    >
                      <p>[하이텍고등학교/1학년]</p>
                      <p>350</p>
                    </div>
                  </a>
                </li>
              </ol>
            </nav>
            <button
              title="Next"
              className="swiper-custom-next"
              style={{
                width: "75px",
                height: "75px",
                zIndex: 100,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                background: "none",
                border: "none",
              }}
            >
              <img
                style={{
                  width: "75px",
                  height: "75px",
                  borderRadius: "50%",
                }}
                src="./Icons/right.png"
                alt=""
              />
            </button>
          </div>
        </section>
        <div className={"btnCom"}>
          <button onClick={handleMoreButtonClick}>더 많은 작품 보기</button>
        </div>
      </div>
    </div>
  );
};

export default Competition;
