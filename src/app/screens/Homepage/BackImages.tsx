import React, { useRef, useState } from "react";
import { Button, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../css/backImages.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 5 }}>{children}</Box>}
    </div>
  );
}

export default function BackgroundImages() {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="img-config">
      <div className="mainImg">
        <img
          style={{ position: "absolute", left: 0, marginTop: "35%" }}
          src="./Icons/excoGirl.png"
          alt=""
        />
        <img
          style={{ position: "absolute", right: "5%", marginBottom: "5%" }}
          src="./Icons/exco.png"
          alt=""
        />
        <div className={"logotext"}>
          <div style={{ gap: "9px" }}>
            <img src="./Icons/tablogo2.png" alt="" />
            <img src="./Icons/tablogo.png" alt="" />
          </div>
          <span>뉴테크 공모전의 분위기를 볼 수 있어요!</span>
        </div>
        <Box
          sx={{
            borderBottom: "none",
            display: "flex",
            justifyContent: "center",
            marginBottom: 2,
          }}
        >
          <Button
            className={"tabButton"}
            onClick={() => handleChange(0)}
            style={{
              background:
                value === 0 ? "rgba(255, 198, 0, 1)" : "rgba(0, 184, 96, 1)",
              color:
                value === 0 ? "rgba(255, 255, 255, 1)" : "rgba(60, 60, 60, 1)",
              marginRight: 12,
              width: "166px",
              height: "50px",
              borderRadius: "40px",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            #부스
          </Button>
          <Button
            onClick={() => handleChange(1)}
            style={{
              background:
                value === 1 ? "rgba(255, 198, 0, 1)" : "rgba(0, 184, 96, 1)",
              color:
                value === 1 ? "rgba(255, 255, 255, 1)" : "rgba(60, 60, 60, 1)",
              marginRight: 12,
              width: "166px",
              height: "50px",
              borderRadius: "40px",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            #공모전
          </Button>
          <Button
            onClick={() => handleChange(2)}
            style={{
              background:
                value === 2 ? "rgba(255, 198, 0, 1)" : "rgba(0, 184, 96, 1)",
              color:
                value === 2 ? "rgba(255, 255, 255, 1)" : "rgba(60, 60, 60, 1)",
              marginRight: 12,
              width: "166px",
              height: "50px",
              borderRadius: "40px",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            #초등부
          </Button>
          <Button
            onClick={() => handleChange(3)}
            style={{
              background:
                value === 3 ? "rgba(255, 198, 0, 1)" : "rgba(0, 184, 96, 1)",
              color:
                value === 3 ? "rgba(255, 255, 255, 1)" : "rgba(60, 60, 60, 1)",
              marginRight: 12,
              width: "166px",
              height: "50px",
              borderRadius: "40px",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            #중고등
          </Button>
          <Button
            onClick={() => handleChange(4)}
            style={{
              background:
                value === 4 ? "rgba(255, 198, 0, 1)" : "rgba(0, 184, 96, 1)",
              color:
                value === 4 ? "rgba(255, 255, 255, 1)" : "rgba(60, 60, 60, 1)",
              width: "166px",
              height: "50px",
              borderRadius: "40px",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            #시상식
          </Button>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="./Boos/1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Boos/2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Boos/3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Boos/4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Boos/5.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="./Slide2/1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide2/2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide2/3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide2/4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide2/5.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide2/6.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide2/7.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="./Slide4/1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide4/2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide4/3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide4/4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide4/5.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide4/6.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide4/7.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide4/8.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide4/9.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide4/10.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="./Slide5/1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide5/2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide5/3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide5/4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide5/5.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide5/6.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide5/7.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide5/8.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide5/9.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide5/10.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="./Slide3/1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide3/2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide3/3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide3/4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide3/5.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide3/6.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide3/7.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide3/8.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide3/9.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./Slide3/10.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </CustomTabPanel>
      </div>
    </div>
  );
}
