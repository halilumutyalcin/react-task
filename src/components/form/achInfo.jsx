import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaPencil, FaTrash } from "react-icons/fa6";
import CustomModal from "./customModal";

export default function AchievementsInfo({ formData, setFormData }) {
  const [showModal, setShowModal] = useState(false);
  const [achievement, setAchievement] = useState("");

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleAddAchievement = () => {
    if (achievement) {
      setFormData({ ...formData, achievements: [...formData.achievements, achievement] });
      setAchievement("");
      handleClose();
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5>
          Kazanılmış Eğitim - Başarı <span className="badge bg-light text-dark">{formData.achievements.length} adet</span>
        </h5>
        <Button variant="primary" onClick={handleShow} style={{ backgroundColor: "white", color: "#7F56D9", border: "none", fontWeight: "bold" }}>
          + Başarı Ekle
        </Button>
      </div>

      <ul className="list-group mt-2">
        {formData.achievements.map((achievement, index) => (
          <li key={index} className="d-flex justify-content-between align-items-center py-2">
            <div>
              <strong>{achievement}</strong>
              <div className="text-muted">Approved by Çağatay Cangüloğlu</div>
            </div>
            <div>
              <button className="btn btn-sm btn-outline-secondary">
                <FaPencil size={16} />
              </button>
              <button className="btn btn-sm btn-outline-danger ms-2">
                <FaTrash size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <CustomModal
        show={showModal}
        handleClose={handleClose}
        title="Yeni Başarı Ekle"
        fields={[
          { label: "Başarı Adı", type: "text", value: achievement, onChange: (e) => setAchievement(e.target.value) },
        ]}
        onSave={handleAddAchievement}
      />
    </>
  );
}
