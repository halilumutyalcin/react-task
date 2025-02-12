import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../../redux/tabSlice";
import "../../styles/mainForm.css";

export default function TabNavigation() {
  const activeTab = useSelector((state) => state.tab.activeTab); 
  const tabs = useSelector((state) => state.tab.tabs); 
  const tabLabels = useSelector((state) => state.tab.tabLabels); 

  return (
    <ul className="nav nav-tabs w-100 d-flex border-bottom">
      {tabs.map((tab) => (
        <li
          key={tab}
          className="nav-item text-center flex-fill d-flex align-items-center justify-content-center"
        >
          <button
            type="button"
            className={`nav-link w-100 ${activeTab === tab ? "active" : ""}`}
            onClick={() => dispatch(setActiveTab(tab))}
          >
            {tabLabels[tab]} 
          </button>
        </li>
      ))}
    </ul>
  );
}
