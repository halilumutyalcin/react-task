import React from "react";
import BlankContainer from "./blankContainer"; // ✅ BlankContainer import edildi

function BlankCard({ title }) {
  return (
    <BlankContainer>
      <div
        className="p-4 text-center"
        style={{
          width: "672px",
          height: "194px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <h2 style={{ fontSize: "30px", fontWeight: "bold", margin: 0 }}>
          {title}
        </h2>
      </div>
    </BlankContainer>
  );
}

export default BlankCard;
