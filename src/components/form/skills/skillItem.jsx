import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { LuTrash2 } from "react-icons/lu";

export default function SkillItem({ skill, onEdit, onDelete, index }) {
  return (
    <li className="d-flex justify-content-between align-items-center py-2">
      <div>
        <strong>{skill.operation}</strong>
        <div className="text-muted">Başarı Düzeyi: {skill.level}/10</div>
      </div>
      <div className="d-flex gap-3">
        <button
          className="border-0 bg-transparent p-1"
          onClick={(event) => {
            event.preventDefault();
            onEdit(index);
          }}
          style={{ color: "#667085", fontSize: "18px" }}
        >
          <FiEdit2 />
        </button>
        <button
          className="border-0 bg-transparent p-1"
          onClick={() => onDelete(skill.operation)}
          style={{ color: "#D92D20", fontSize: "18px" }}
        >
          <LuTrash2 />
        </button>
      </div>
    </li>
  );
}
