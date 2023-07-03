import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>Make memes your own</p>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <p>Email: Giorgimaisuradze762@gmail.com</p>
            <p>Phone: 595-40-92-27</p>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-media-icons">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
