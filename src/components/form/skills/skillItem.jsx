import React from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";

export default function SkillItem({ skill, onEdit, onDelete }) {
  return (
    <li className="d-flex justify-content-between align-items-center py-2">
      <div>
        <strong>{skill.name}</strong>
        <div className="text-muted">Başarı Düzeyi: {skill.level}/10</div>
      </div>
      <div>
        <button className="btn btn-sm btn-outline-secondary" onClick={() => onEdit(skill)}>
          <FaPencil size={16} />
        </button>
        <button className="btn btn-sm btn-outline-danger ms-2" onClick={() => onDelete(skill.name)}>
          <FaTrash size={16} />
        </button>
      </div>
    </li>
  );
}
