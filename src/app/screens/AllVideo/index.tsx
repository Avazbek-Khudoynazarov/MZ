import React, { useState } from "react";

import Footer from "../../components/footer";
import AllMain from "./allVideos";
import MainHead from "./mainHead";

const Others = () => {
  const [videoSrc, setVideoSrc] = useState(
    "https://www.youtube.com/embed/-vjG02BbVKM"
  );

  const handleVideoChange = (newSrc: string) => {
    setVideoSrc(newSrc);
  };

  return (
    <div>
      <MainHead />
      <AllMain />
      <Footer />
    </div>
  );
};

export default Others;
