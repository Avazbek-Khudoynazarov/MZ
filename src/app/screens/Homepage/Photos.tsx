import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "30px",
  p: 4,
};

const images = [
  { id: 1, src: "/School/1.png", alt: "Image 1" },
  { id: 2, src: "/School/2.png", alt: "Image 2" },
  { id: 3, src: "/School/3.png", alt: "Image 3" },
  { id: 4, src: "/School/4.png", alt: "Image 4" },
  { id: 5, src: "/School/5.png", alt: "Image 5" },
  { id: 6, src: "/School/6.png", alt: "Image 6" },
  { id: 7, src: "/School/7.png", alt: "Image 7" },
  { id: 8, src: "/School/8.png", alt: "Image 8" },
  { id: 9, src: "/School/9.png", alt: "Image 9" },
  { id: 10, src: "/School/10.png", alt: "Image 10" },
];
const images2 = [
  { id: 1, src: "/1/1.jpg", alt: "Image 1" },
  { id: 1, src: "/1/2.jpg", alt: "Image 1" },
  { id: 1, src: "/1/3.jpg", alt: "Image 1" },
  { id: 1, src: "/1/4.jpg", alt: "Image 1" },
  { id: 1, src: "/1/5.jpg", alt: "Image 1" },
  { id: 1, src: "/1/6.jpg", alt: "Image 1" },
  { id: 1, src: "/1/7.jpg", alt: "Image 1" },
  { id: 1, src: "/1/8.jpg", alt: "Image 1" },
  { id: 1, src: "/1/9.jpg", alt: "Image 1" },
];

const imagesMap: { [key: number]: { id: number; src: string; alt: string }[] } =
  {
    1: [
      { id: 1, src: "/1/1.jpg", alt: "Image 1" },
      { id: 1, src: "/1/2.jpg", alt: "Image 1" },
      { id: 1, src: "/1/3.jpg", alt: "Image 1" },
      { id: 1, src: "/1/4.jpg", alt: "Image 1" },
      { id: 1, src: "/1/5.jpg", alt: "Image 1" },
      { id: 1, src: "/1/6.jpg", alt: "Image 1" },
      { id: 1, src: "/1/7.jpg", alt: "Image 1" },
      { id: 1, src: "/1/8.jpg", alt: "Image 1" },
      { id: 1, src: "/1/9.jpg", alt: "Image 1" },
    ],
    2: [
      { id: 2, src: "/2/1.jpg", alt: "Image 1" },
      { id: 2, src: "/2/2.jpg", alt: "Image 1" },
      { id: 2, src: "/2/3.jpg", alt: "Image 1" },
      { id: 2, src: "/2/4.jpg", alt: "Image 1" },
      { id: 2, src: "/2/5.jpg", alt: "Image 1" },
      { id: 2, src: "/2/6.jpg", alt: "Image 1" },
      { id: 2, src: "/2/7.jpg", alt: "Image 1" },
      { id: 2, src: "/2/8.jpg", alt: "Image 1" },
      { id: 2, src: "/2/9.jpg", alt: "Image 1" },
    ],
    3: [
      { id: 3, src: "/3/9.jpg", alt: "Image 1" },
      { id: 3, src: "/3/2.jpg", alt: "Image 1" },
      { id: 3, src: "/3/3.jpg", alt: "Image 1" },
      { id: 3, src: "/3/4.jpg", alt: "Image 1" },
      { id: 3, src: "/3/5.jpg", alt: "Image 1" },
      { id: 3, src: "/3/6.jpg", alt: "Image 1" },
      { id: 3, src: "/3/7.jpg", alt: "Image 1" },
      { id: 3, src: "/3/8.jpg", alt: "Image 1" },
      { id: 3, src: "/3/1.jpg", alt: "Image 1" },
    ],
    4: [
      { id: 4, src: "/4/1.jpg", alt: "Image 1" },
      { id: 4, src: "/4/2.jpg", alt: "Image 1" },
      { id: 4, src: "/4/3.jpg", alt: "Image 1" },
      { id: 4, src: "/4/4.jpg", alt: "Image 1" },
      { id: 4, src: "/4/5.jpg", alt: "Image 1" },
      { id: 4, src: "/4/6.jpg", alt: "Image 1" },
      { id: 4, src: "/4/7.jpg", alt: "Image 1" },
      { id: 4, src: "/4/8.jpg", alt: "Image 1" },
      { id: 4, src: "/4/9.jpg", alt: "Image 1" },
      { id: 4, src: "/4/10.jpg", alt: "Image 1" },
      { id: 4, src: "/4/11.jpg", alt: "Image 1" },
      { id: 4, src: "/4/12.jpg", alt: "Image 1" },
    ],
    5: [
      { id: 5, src: "/5/1.jpg", alt: "Image 1" },
      { id: 5, src: "/5/2.jpg", alt: "Image 1" },
      { id: 5, src: "/5/3.jpg", alt: "Image 1" },
      { id: 5, src: "/5/4.jpg", alt: "Image 1" },
      { id: 5, src: "/5/5.jpg", alt: "Image 1" },
      { id: 5, src: "/5/6.jpg", alt: "Image 1" },
      { id: 5, src: "/5/7.jpg", alt: "Image 1" },
      { id: 5, src: "/5/8.jpg", alt: "Image 1" },
      { id: 5, src: "/5/9.jpg", alt: "Image 1" },
      { id: 5, src: "/5/10.jpg", alt: "Image 1" },
      { id: 5, src: "/5/11.jpg", alt: "Image 1" },
      { id: 5, src: "/5/12.jpg", alt: "Image 1" },
    ],
    6: [
      { id: 6, src: "/6/1.jpg", alt: "Image 1" },
      { id: 6, src: "/6/2.jpg", alt: "Image 1" },
      { id: 6, src: "/6/3.jpg", alt: "Image 1" },
      { id: 6, src: "/6/4.jpg", alt: "Image 1" },
      { id: 6, src: "/6/5.jpg", alt: "Image 1" },
      { id: 6, src: "/6/6.jpg", alt: "Image 1" },
      { id: 6, src: "/6/7.jpg", alt: "Image 1" },
      { id: 6, src: "/6/8.jpg", alt: "Image 1" },
      { id: 6, src: "/6/9.jpg", alt: "Image 1" },
      { id: 6, src: "/6/10.jpg", alt: "Image 1" },
      { id: 6, src: "/6/11.jpg", alt: "Image 1" },
      { id: 6, src: "/6/12.jpg", alt: "Image 1" },
    ],
    7: [
      { id: 7, src: "/7/1.jpg", alt: "Image 1" },
      { id: 7, src: "/7/2.jpg", alt: "Image 1" },
      { id: 7, src: "/7/3.jpg", alt: "Image 1" },
      { id: 7, src: "/7/4.jpg", alt: "Image 1" },
      { id: 7, src: "/7/5.jpg", alt: "Image 1" },
      { id: 7, src: "/7/6.jpg", alt: "Image 1" },
      { id: 7, src: "/7/7.jpg", alt: "Image 1" },
      { id: 7, src: "/7/8.jpg", alt: "Image 1" },
      { id: 7, src: "/7/9.jpg", alt: "Image 1" },
      { id: 7, src: "/7/10.jpg", alt: "Image 1" },
      { id: 7, src: "/7/11.jpg", alt: "Image 1" },
      { id: 7, src: "/7/12.jpg", alt: "Image 1" },
    ],
    8: [
      { id: 8, src: "/8/1.jpg", alt: "Image 1" },
      { id: 8, src: "/8/2.jpg", alt: "Image 1" },
      { id: 8, src: "/8/3.jpg", alt: "Image 1" },
      { id: 8, src: "/8/4.jpg", alt: "Image 1" },
      { id: 8, src: "/8/5.jpg", alt: "Image 1" },
      { id: 8, src: "/8/6.jpg", alt: "Image 1" },
      { id: 8, src: "/8/7.jpg", alt: "Image 1" },
      { id: 8, src: "/8/8.jpg", alt: "Image 1" },
      { id: 8, src: "/8/9.jpg", alt: "Image 1" },
    ],
    9: [
      { id: 9, src: "/9/1.jpg", alt: "Image 1" },
      { id: 9, src: "/9/2.jpg", alt: "Image 1" },
      { id: 9, src: "/9/3.jpg", alt: "Image 1" },
      { id: 9, src: "/9/4.jpg", alt: "Image 1" },
      { id: 9, src: "/9/5.jpg", alt: "Image 1" },
      { id: 9, src: "/9/6.jpg", alt: "Image 1" },
      { id: 9, src: "/9/7.jpg", alt: "Image 1" },
    ],
    10: [
      { id: 10, src: "/10/1.jpg", alt: "Image 1" },
      { id: 10, src: "/10/2.jpg", alt: "Image 1" },
      { id: 10, src: "/10/3.jpg", alt: "Image 1" },
      { id: 10, src: "/10/4.jpg", alt: "Image 1" },
      { id: 10, src: "/10/5.jpg", alt: "Image 1" },
      { id: 10, src: "/10/6.jpg", alt: "Image 1" },
      { id: 10, src: "/10/7.jpg", alt: "Image 1" },
      { id: 10, src: "/10/8.jpg", alt: "Image 1" },
      { id: 10, src: "/10/9.jpg", alt: "Image 1" },
      { id: 10, src: "/10/10.jpg", alt: "Image 1" },
      { id: 10, src: "/10/11.jpg", alt: "Image 1" },
      { id: 10, src: "/10/12.jpg", alt: "Image 1" },
    ],
  };

const titles = [
  "호산초등학교",
  "와룡초등학교",
  "범일초등학교",
  "율원초등학교",
  "입석초등학교",
  "아양초등학교",
  "산격초등학교",
  "효동초등학교",
  "반송초등학교",
  "대구하이텍고등학교",
];

export function Photos() {
  const [open, setOpen] = useState(false);
  const [mainImage, setMainImage] = useState(images2[0]); // Default to first image of images2
  const [currentImages, setCurrentImages] = useState(images2); // Default to images2

  const handleOpen = (image: { id: number; src: string; alt: string }) => {
    if (imagesMap[image.id]) {
      setCurrentImages(imagesMap[image.id]); // Set images according to the clicked image id
      setMainImage(imagesMap[image.id][0]); // Set the main image to the first image of the corresponding set
    } else {
      setCurrentImages(images); // Set default images
      setMainImage(image);
    }
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="pho-config">
      <img
        style={{ position: "absolute", left: "0", bottom: "250px" }}
        src="./Icons/paint.png"
        alt=""
      />
      <img
        style={{ position: "absolute", right: "0", bottom: "30px" }}
        src="./Icons/paint2.png"
        alt=""
      />
      <div className="logotext">
        <div style={{ gap: "9px" }}>
          <img src="./Icons/Bag.png" alt="" />
          <img src="./Icons/text.png" alt="" />
        </div>
        <span>
          <b>MZ</b>새싹캠프에 참여한 학교들의 활동 사진을 볼 수 있어요!
        </span>
      </div>
      <div className="mainpho">
        <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
          {images.slice(0, 4).map((image, index) => (
            <div
              key={image.id}
              className="pho-btn"
              onClick={() => handleOpen(image)}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "center",
                border: "none",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: "100%",
                  borderRadius: "20px 20px 0 0",
                  height: "160px",
                }}
              />
              <div className="btnFoot">{titles[index]}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
          {images.slice(4, 8).map((image, index) => (
            <div
              key={image.id}
              className="pho-btn"
              onClick={() => handleOpen(image)}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "center",
                border: "none",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: "100%",
                  borderRadius: "20px 20px 0 0",
                  height: "160px",
                }}
              />
              <div className="btnFoot">{titles[index + 4]}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
          {images.slice(8).map((image, index) => (
            <div
              key={image.id}
              className="pho-btn"
              onClick={() => handleOpen(image)}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "center",
                border: "none",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: "100%",
                  borderRadius: "20px 20px 0 0",
                  height: "160px",
                }}
              />
              <div className="btnFoot">{titles[index + 8]}</div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={"vector"}>
            <img
              src="./Icons/Vector.png"
              alt=""
              onClick={handleClose}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="titCon">
            <span style={{ marginLeft: "10px" }}>
              [달서구]{" "}
              <b style={{ color: "rgba(0, 0, 0, 1)" }}> 호산초등학교</b>
            </span>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "1px",
                background: "rgba(158, 158, 158, 1)",
                marginTop: "8px",
              }}
            ></div>
            <div className="titdate">
              <p>
                <b style={{ color: "rgba(0, 214, 116, 1)" }}>교육날짜</b>{" "}
                2024-12-10
              </p>
              <p>
                <b style={{ color: "rgba(0, 214, 116, 1)" }}> 교육시간</b> 총
                8시간
              </p>
              <p>
                <b style={{ color: "rgba(0, 214, 116, 1)" }}>참여인원</b> 17명
              </p>
            </div>
          </div>
          <div className="thumbImg">
            <img
              src={mainImage.src}
              alt={mainImage.alt}
              style={{
                width: "75%",
                height: "450px",
              }}
            />
            <div
              style={{
                marginLeft: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                overflow: "scroll",
              }}
            >
              {currentImages.map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "199px",
                    height: "109px",
                    cursor: "pointer",
                  }}
                  onClick={() => setMainImage(image)}
                />
              ))}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
