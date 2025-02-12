import React from "react";
import { Button } from "react-bootstrap";

export default function FormActions({ navigate, submitForm }) {
  return (
    <div
      className="form-actions"
      style={{
        position: "absolute",
        bottom: "0",
        left: "0",
  right: "0",
        background: "white",
        width: "100%",
      }}
    >
      <Button
        id="prev"
        className="flex-fill"
        style={{ border: "1px solid #D0D5DD" }}
        onClick={() => navigate("/staff/list")}
      >
        Vazgeç
      </Button>
      <Button
  id="next"
  type="submit"
  className="flex-fill"
  style={{ border: "1px solid #D0D5DD" }}
  onClick={() => {
    console.log("Kaydet butonuna basıldı"); // ✅ Buton çalışıyor
    submitForm()
      .then(() => {
        console.log("submitForm çağrıldı ve tamamlandı ✅"); // 🟢 Bu gelmeli
      })
      .catch((err) => {
        console.error("submitForm hata verdi ❌", err);
      })
      .finally(() => {
        console.log("submitForm tamamlandı 🎯");
      });
  }}
>
  Kaydet
</Button>


    </div>
  );
}
