import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MainScreen({ goToList }) {
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
    <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>Ana Ekran</h2>
    <p style={{ fontSize: "18px", color: "#6c757d" }}>
      Personel işlemleri için aşağıdan devam edebilirsiniz.
    </p>
    <button
      className="btn"
      onClick={goToList}
      style={{
        width: "488px",
        height: "60px",
        border: "1px solid #D0D5DD",
        backgroundColor: "transparent",
        color: "#344054",
        fontSize: "18px",
        fontWeight: "600",
        transition: "0.3s",
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = "#7F56D9";
        e.target.style.color = "white";
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "#6c757d";
      }}
    >
     + Ekle
    </button>
  </div>
</div>


  );
}
