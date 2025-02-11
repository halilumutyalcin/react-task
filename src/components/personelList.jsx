import React from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const personnel = [
  {
    name: "Beytullah Şimşek",
    role: "UI/UX Designer",
    img: "https://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png",
  },
  {
    name: "Özgür Çelebi",
    role: "Back-end Developer",
    img: "https://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png",
  },
  {
    name: "Enes Kolçak",
    role: "Front-end Developer",
    img: "https://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png",
  },
];

export default function PersonelList() {
  const navigate = useNavigate();

  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      <Card className="card-container w-100 mb-3">
        <div className="header d-flex justify-content-between align-items-center">
          <h2 className="h5">Personeller</h2>
          <div className="status-badge">
            <span className="badge">4/56 Personel Kredisi</span>
          </div>
        </div>

        <InputGroup className="mb-3">
          <Form.Control placeholder="Ara..." />
        </InputGroup>

        <ul className="personnel-list list-unstyled">
          {personnel.map((person, index) => (
            <li key={index} className="d-flex justify-content-between align-items-center p-2 border-bottom">
              <div className="d-flex align-items-center">
                <img src={person.img} alt={person.name} width="40" height="40" className="rounded-circle me-3" />
                <div>
                  <p className="mb-0 fw-semibold">{person.name}</p>
                  <p className="mb-0 text-muted small">{person.role}</p>
                </div>
              </div>
              <div>
                <button className="btn btn-light me-2">
                  <FaEdit />
                </button>
                <button className="btn btn-danger">
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>

        <Button className="w-100 my-3" 
        
        style={{
          backgroundColor: "#ffffff",
          color: "black",
          border: "1px solid rgb(208, 213, 221)",
          transition: "0.3s", // Geçiş efekti
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#7F56D9";
          e.target.style.color = "white";
          e.target.style.border = "1px solid #7F56D9";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#ffffff";
          e.target.style.color = "black";
          e.target.style.border = "1px solid rgb(208, 213, 221)";
        }}

         onClick={() => navigate("/staff/form")}>
          + Yeni Personel Ekle
        </Button>
      </Card>

      <div className="d-flex w-100 gap-2">
      <Button
  style={{
    backgroundColor: "#ffffff",
    color: "black",
    border: "1px solid rgb(208, 213, 221)",
    transition: "0.3s", // Geçiş efekti
  }}
  className="flex-fill"
  onMouseOver={(e) => {
    e.target.style.backgroundColor = "#7F56D9";
    e.target.style.color = "white";
    e.target.style.border = "1px solid #7F56D9";
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = "#ffffff";
    e.target.style.color = "black";
    e.target.style.border = "1px solid rgb(208, 213, 221)";
  }}
  onClick={() => navigate("/staff/welcome")}
>
  Önceki
</Button>

        <Button style={{backgroundColor: "#7F56D9",border:"1px solid rgb(208, 213, 221)"}} onClick={()=>{navigate('/projects')}} className="flex-fill">
          Sonraki
        </Button>
      </div>
    </div>
  );
}
