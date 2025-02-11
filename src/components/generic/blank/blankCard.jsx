import React from "react";

function BlankCard({ title }) {
  return (
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
      <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>{title}</h2>
    </div>
  );
}

export default BlankCard;
