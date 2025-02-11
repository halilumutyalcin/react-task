import React from "react";
import FooterIcons from "./footer/footerIcons";
import FooterImages from "./footer/footerImages";
import "../../styles/footer.css";

function Footer() {
  return (
    <div>
      <div className="phantom" />
      <div className="footer-container">
        <FooterIcons />
        <FooterImages />
      </div>
    </div>
  );
}

export default Footer;
