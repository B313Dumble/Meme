import React from "react";
import Header from "./components/Header/Header";
import Meme from "./components/Meme/Meme";
import Footer from "./components/Footer/Footer";
import "@fortawesome/fontawesome-free/css/all.css";

import "./style.css";

export default function App() {
  return (
    <div>
      <Header />
      <Meme />
      <Footer />
    </div>
  );
}
