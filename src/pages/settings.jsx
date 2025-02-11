import React from "react";
function Settings() {
    return (
        <div
        className="container d-flex justify-content-center align-items-center"
        style={{
          minHeight: "678px", // Header ve footer arasında boşluk bırak
          padding: "20px", // Container içindeki öğeler için padding
        }}
      >
        <div
          className="p-4 text-center"
          style={{
            width: "672px",
            height: "194px",
            backgroundColor: "#fff",
            borderRadius: "8px", // Hafif yuvarlatılmış köşeler
            padding: "20px", // İç padding
          }}
        >
          <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>Settings</h2>
       
        </div>
      </div>
    )
}
export default Settings;