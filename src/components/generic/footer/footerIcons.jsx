import React from "react";
import { CiGlobe } from "react-icons/ci";
import { RxExit } from "react-icons/rx";
import "../../../styles/footer.css";
const FooterIcons = () => {
  return (
    <div className="footer-icons">
      <div className="icon-container">
        <CiGlobe size={24} color="black" />
      </div>

      <div className="exit-container" style={{ transform: "rotate(180deg)" }}>
        <RxExit size={24} color="white" />
      </div>
    </div>
  );
};

export default FooterIcons;
