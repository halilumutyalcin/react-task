import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MainScreen() {
  const navigate = useNavigate();

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{
        minHeight: "678px",
        padding: "20px",
      }}
    >
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
        <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>Personel Ekle</h2>
        <p style={{ fontSize: "18px", color: "#6c757d" }}>
        Firmanızda çalışan personellerinizi ekleyebilir, oluşturduğunuz departmanlara atayabilirsiniz.
        </p>
        <button
          className="btn"
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
          onClick={() => navigate("/staff/list")}
        >
          + Ekle
        </button>
      </div>
    </div>
  );
}
