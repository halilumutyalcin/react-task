import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CustomModal from "../../../../components/form/customModal";
import SkillList from "../../../../components/form/skills/skillList";

export default function SkillsInfo({ values, setFieldValue }) {
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [skill, setSkill] = useState({ operation: "", date: "", level: "" });

  const handleShow = () => {
    setEditIndex(null);
    setSkill({ operation: "", date: "", level: "" });
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

  const handleSaveSkill = () => {
    if (skill.operation && skill.date && skill.level) {
      let updatedSkills = [...values.skills];
      if (editIndex !== null) {
        updatedSkills[editIndex] = skill;
      } else {
        updatedSkills.push(skill);
      }
      setFieldValue("skills", updatedSkills, true);
      handleClose();
    }
  };

  const handleEditSkill = (index) => {
    setSkill(values.skills[index]);
    setEditIndex(index);
    setShowModal(true);
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = values.skills.filter((_, i) => i !== index);
    setFieldValue("skills", updatedSkills, true);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5>
          Yetenekler{" "}
          <span
            className="badge"
            stye={{
              backgroundColor: "white",
              color: "#6941C6",
              border: "1px solid #E9D7FE",
              fontWeight: "bold",
            }}
          >
            {values.skills.length} adet
          </span>
        </h5>
        <Button
          variant="primary"
          onClick={handleShow}
          style={{
            backgroundColor: "white",
            color: "#7F56D9",
            border: "none",
            fontWeight: "bold",
          }}
        >
          + Yetenek Ekle
        </Button>
      </div>

      <SkillList
        skills={values.skills}
        onEdit={handleEditSkill}
        onDelete={handleDeleteSkill}
      />

      <CustomModal
        show={showModal}
        handleClose={handleClose}
        title={editIndex !== null ? "Yetenek Düzenle" : "Yeni Yetenek Ekle"}
        onSave={handleSaveSkill}
      >
        <div className="mb-3">
          <label className="form-label">Operasyon</label>
          <select
  className="form-select"
  name="operation"
  value={skill.operation}
  onChange={handleChange}
  required
>
  <option value="">Seçiniz</option>
  <option value="Frontend Development">Frontend Development</option>
  <option value="Backend Development">Backend Development</option>
  <option value="Full Stack Development">Full Stack Development</option>
  <option value="Database Management">Database Management</option>
  <option value="DevOps Engineering">DevOps Engineering</option>
  <option value="Mobile App Development">Mobile App Development</option>
  <option value="Cyber Security">Cyber Security</option>
  <option value="Machine Learning">Machine Learning</option>
  <option value="Cloud Computing">Cloud Computing</option>
  <option value="Embedded Systems">Embedded Systems</option>
  <option value="Game Development">Game Development</option>
  <option value="Software Testing & QA">Software Testing & QA</option>
</select>

        </div>
        <div className="mb-3">
          <label className="form-label">Tarih</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={skill.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Puan</label>
          <select
            className="form-select"
            name="level"
            value={skill.level}
            onChange={handleChange}
            required
          >
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
