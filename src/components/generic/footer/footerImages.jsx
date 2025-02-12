import React from "react";
import footerpng from "../../../assets/img.png";
import bacapng from "../../../assets/baca.png";
import "../../../styles/footer.css";
const FooterImages = () => {
  return (
    <div className="footer-images">
      <img src={footerpng} className="footer-image" alt="Footer" />
      <img src={bacapng} className="chimney-image" alt="Chimney" />
    </div>
  );
};

export default FooterImages;
