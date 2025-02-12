import React from "react";

function BlankContainer({ children }) {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{
        minHeight: "678px", 
        padding: "20px",
      }}
    >
      {children}
    </div>
  );
}

export default BlankContainer;
