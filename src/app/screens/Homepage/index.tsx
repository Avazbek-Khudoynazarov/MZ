import React from "react";
import { Photos } from "./Photos";
import { Emoticon } from "./Emoticons";
import VideoGallery from "./YouTube";
import BackgroundImages from "./BackImages";
import Competition from "./Competition";
import Footer from "../../components/footer";
import { NavbarHome } from "../../components/header";

const HomePage = () => {
  return (
    <div>
      <NavbarHome />
      <Photos />
      <Emoticon />
      <VideoGallery />
      <BackgroundImages />
      <Competition />
      <Footer />
    </div>
  );
};

export default HomePage;
