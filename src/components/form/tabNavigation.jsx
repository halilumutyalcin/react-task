import React from "react";
import '../../styles/mainForm.css';
export default function TabNavigation({ activeTab, setActiveTab }) {
  return (
    <ul className="nav nav-tabs w-100 d-flex border-bottom">
      {["general", "skills", "achievements"].map((tab) => (
        <li key={tab} className="nav-item text-center flex-fill d-flex align-items-center justify-content-center">
          <button
            className={`nav-link w-100 ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "general" ? "Genel" : tab === "skills" ? "Yetenekler" : "Kazanımlar"}
          </button>
        </li>
      ))}
    </ul>
  );
}