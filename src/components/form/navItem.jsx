import React from "react";

export default function NavItem({ tab, isActive, onClick, label }) {
  return (
    <li className="nav-item text-center flex-fill d-flex align-items-center justify-content-center">
      <button
        type="button"
        className={`nav-link w-100 ${isActive ? "active" : ""}`}
        onClick={() => onClick(tab)}
      >
        {label}
      </button>
    </li>
  );
}
