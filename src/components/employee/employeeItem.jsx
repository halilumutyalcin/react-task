import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { LuTrash2 } from "react-icons/lu";
const EmployeeItem = ({ person, onEdit, onDelete }) => {
  return (
    <li
      className="d-flex align-items-center"
      style={{
        width: "100%",
        marginBottom: "10px",
        height: "64px",
        justifyContent: "space-between",
        borderRadius: "8px",
        padding: "12px 16px 12px 24px",
        borderTopWidth: "1px",
        borderRightWidth: "1px",
        borderBottomWidth: "1px",
        borderLeftWidth: "8px",
        borderStyle: "solid",
        borderColor: "var(--Colors-Border-border-primary, #D0D5DD)",
        background: "var(--Colors-Background-bg-primary_alt, #FFFFFF)",
        boxShadow: "0px 1px 2px 0px #1018280D",
        display: "flex",
      }}
    >
      <div className="d-flex align-items-center">
        <img
          src={person.img}
          alt={person.name}
          width="40"
          height="40"
          className="rounded-circle me-3 border"
        />
        <div className="mt-4">
          <p className="mb-0 fw-bold">
            {person.name} {person.surname}
          </p>
          <p className="mb-0 text-muted small">{person.role}</p>
        </div>
      </div>
      <div className="d-flex gap-3">
        <button
          className="border-0 bg-transparent p-1"
          onClick={onEdit}
          style={{ color: "#667085", fontSize: "18px" }}
        >
          <FiEdit2 />
        </button>
        <button
          className="border-0 bg-transparent p-1"
          onClick={onDelete}
          style={{ color: "#D92D20", fontSize: "18px" }}
        >
          <LuTrash2 />
        </button>
      </div>
    </li>
  );
};

export default EmployeeItem;
