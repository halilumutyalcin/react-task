import React from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";

export default function AchievementItem({ achievement }) {
  return (
    <li className="d-flex justify-content-between align-items-center py-2">
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
  );
}
