import React from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";

export default function SkillItem({ skill, onEdit, onDelete, index }) {
  return (
    <li className="d-flex justify-content-between align-items-center py-2">
      <div>
        <strong>{skill.operation}</strong>
        <div className="text-muted">Başarı Düzeyi: {skill.level}/10</div>
      </div>
      <div>
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={(event) => {
            event.preventDefault(); // 🛑 Formun submit olmasını engelle
            onEdit(index); // ✅ SkillItem'de olduğu gibi index parametresini geçir
          }}
        >
          <FaPencil size={16} />
        </button>
        <button
          className="btn btn-sm btn-outline-danger ms-2"
          onClick={() => onDelete(skill.operation)}
        >
          <FaTrash size={16} />
        </button>
      </div>
    </li>
  );
}
