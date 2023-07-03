import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img src="images/doge_meme_PNG7.png" className="header--img" alt="!!" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Project</h4>
    </header>
  );
}
