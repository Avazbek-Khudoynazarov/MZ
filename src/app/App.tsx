import React from "react";
import "../css/App.css";
import "../css/navbar.css";
import "../css/photo.css";
import "../css/emoticon.css";
import "../css/videoYoutube.css";
import "../css/backImages.css";
import "../css/competition.css";
import "../css/footer.css";
import "../css/head.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./screens/Homepage";
import Others from "./screens/Others";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/other-page" element={<Others />} />
      </Routes>
    </Router>
  );
}

export default App;
