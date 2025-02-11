import React from "react";
import { FaTrash } from "react-icons/fa6";

export default function SkillList({ skills, setFieldValue }) {
  const handleDeleteSkill = (skillName) => {
    setFieldValue("skills", skills.filter((s) => s.name !== skillName));
  };

  return (
    <ul className="list-group mt-2">
      {skills.map((s, index) => (
        <li key={index} className="d-flex justify-content-between align-items-center py-2">
          <div>
            <strong>{s.name}</strong>
            <div className="text-muted">Başarı Düzeyi: {s.level}/10</div>
          </div>
          <button className="btn btn-sm btn-outline-danger ms-2" onClick={() => handleDeleteSkill(s.name)}>
            <FaTrash size={16} />
          </button>
        </li>
      ))}
    </ul>
  );
}
