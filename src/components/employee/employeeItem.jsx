import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const EmployeeItem = ({ person, onEdit, onDelete }) => {
  return (
    <li className="d-flex justify-content-between align-items-center p-2 border-bottom">
      <div className="d-flex align-items-center">
        <img
          src={person.img}
          alt={person.name}
          width="40"
          height="40"
          className="rounded-circle me-3"
        />
        <div>
          <p className="mb-0 fw-semibold">{person.name}</p>
          <p className="mb-0 text-muted small">{person.role}</p>
        </div>
      </div>
      <div>
        <button className="btn btn-light me-2" onClick={onEdit}>
          <FaEdit />
        </button>
        <button className="btn btn-danger" onClick={onDelete}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default EmployeeItem;
