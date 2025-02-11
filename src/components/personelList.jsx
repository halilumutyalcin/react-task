import React from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
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
  {
    name: "Enes Kolçak",
    role: "Front-end Developer",
    img: "https://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png",
  },
];

export default function PersonelList({ goToForm, goToHome }) {
  return (
    <>
      {/* Dikey Hizalama için Parent Container */}
      <div
        className="d-flex flex-column align-items-center"
        style={{ width: 736, zIndex: 1, height: "1050px" }}
      >
        {/* Kart İçeriği */}
        <Card className="card-container w-100 mb-3">
          <div className="header">
            <h2 className="h5">Personeller</h2>
            <div className="status-badge">
              <span className="badge">4/56 Personel Kredisi</span>
            </div>
          </div>

          <InputGroup className="search-box">
            <Form.Control placeholder="Search" />
          </InputGroup>

          <ul className="personnel-list">
            {personnel.map((person, index) => (
              <li key={index} className="personnel-item">
                <div className="personnel-info">
                  <img
                    src={person.img}
                    alt={person.name}
                    width="40"
                    height="40"
                  />
                  <div>
                    <p className="mb-0 fw-semibold">{person.name}</p>
                    <p className="mb-0 text-muted small">{person.role}</p>
                  </div>
                </div>
                <div className="actions">
                  <button className="edit-btn">
                    <FaEdit />
                  </button>
                  <button className="delete-btn">
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <Button className="add-button w-100 my-3" onClick={goToForm}>
            + Yeni Personel Ekle
          </Button>
        </Card>

        <div className="d-flex w-100 gap-2">
          <Button id="prev" className="flex-fill" onClick={goToHome}>
            Önceki
          </Button>
          <Button id="next" className="flex-fill">
            Sonraki
          </Button>
        </div>
      </div>
    </>
  );
}
