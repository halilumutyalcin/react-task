import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaPencil, FaTrash } from "react-icons/fa6";
import CustomModal from "../../../../components/form/customModal";


export default function SkillsInfo({ values, setFieldValue }) {
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // Düzenleme için indeks
  const [skill, setSkill] = useState({
    operation: "",
    date: "",
    level: "",
  });

  const handleShow = () => {
    setEditIndex(null); // Yeni ekleme modu
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSkill({ operation: "", date: "", level: "" });
    setEditIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkill((prev) => ({ ...prev, [name]: value }));
  };

  // **Yetenek Ekleme / Düzenleme**
  const handleSaveSkill = () => {
    if (skill.operation && skill.date && skill.level) {
      let updatedSkills = [...values.skills];

      if (editIndex !== null) {
        // **Düzenleme modunda: var olan kaydı güncelle**
        updatedSkills[editIndex] = skill;
      } else {
        // **Yeni yetenek ekleme modu**
        updatedSkills.push(skill);
      }

      setFieldValue("skills", updatedSkills);
      handleClose();
    }
  };

  // **Yetenek Düzenleme**
  const handleEditSkill = (index) => {
    setSkill(values.skills[index]); // Mevcut yeteneği modal içine yükle
    setEditIndex(index);
    setShowModal(true);
  };

  // **Yetenek Silme**
  const handleDeleteSkill = (index) => {
    const updatedSkills = values.skills.filter((_, i) => i !== index);
    setFieldValue("skills", updatedSkills);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5>
          Yetenekler{" "}
          <span className="badge bg-light text-dark">{values.skills.length} adet</span>
        </h5>
        <Button
          variant="primary"
          onClick={handleShow}
          style={{ backgroundColor: "white", color: "#7F56D9", border: "none", fontWeight: "bold" }}
        >
          + Yetenek Ekle
        </Button>
      </div>

      {/* Yetenek Listesi */}
      <ul className="list-group mt-2">
        {values.skills.map((skill, index) => (
          <li key={index} className="d-flex justify-content-between align-items-center py-2">
            <div>
              <strong>{skill.operation}</strong> 
              <div className="text-muted">Puan: {skill.level}/10</div>
            </div>
            <div>
              <button className="btn btn-sm btn-outline-secondary" onClick={() => handleEditSkill(index)}>
                <FaPencil size={16} />
              </button>
              <button className="btn btn-sm btn-outline-danger ms-2" onClick={() => handleDeleteSkill(index)}>
                <FaTrash size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal - Yeni/Düzenleme */}
      <CustomModal show={showModal} handleClose={handleClose} title={editIndex !== null ? "Yetenek Düzenle" : "Yeni Yetenek Ekle"} onSave={handleSaveSkill}>
        <div className="mb-3">
          <label className="form-label">Operasyon</label>
          <select className="form-select" name="operation" value={skill.operation} onChange={handleChange} required>
            <option value="">Seçiniz</option>
            <option value="CNC Taşlama">CNC Taşlama</option>
            <option value="CNC Dişli">CNC Dişli</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Tarih</label>
          <input type="date" className="form-control" name="date" value={skill.date} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Puan</label>
          <select className="form-select" name="level" value={skill.level} onChange={handleChange} required>
            <option value="">Seçiniz</option>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </CustomModal>
    </>
  );
}
