import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import footerpng from "../assets/img.png";
import bacapng from "../assets/baca.png";
import { CiGlobe } from "react-icons/ci";
import { RxExit } from "react-icons/rx";
import "../styles/footer.css"; // CSS dosyasını import et

function Footer() {
  return (
    <div>
      <div className="phantom" />
      <div className="footer-container">
        <div className="footer-icons">
          <div className="icon-container">
            <CiGlobe size={24} color="black" />
          </div>
   
          <div className="exit-container" style={{  transform: "rotate(180deg)" }}>
            <RxExit size={24} color="white" />
          </div>
        </div>

        <img src={footerpng} className="footer-image" alt="Footer" />
        <img src={bacapng} className="chimney-image" alt="Chimney" />
      </div>
    </div>
  );
}

export default Footer;
