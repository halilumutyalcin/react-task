import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../../redux/tabSlice";
import NavItem from "./navItem"; 
import "../../styles/mainForm.css";

export default function TabNavigation() {
  const { activeTab, tabs, tabLabels } = useSelector((state) => state.tab);
  const dispatch = useDispatch();

  return (
    <ul className="nav nav-tabs w-100 d-flex border-bottom">
      {tabs.map((tab) => (
        <NavItem
          key={tab}
          tab={tab}
          isActive={activeTab === tab}
          onClick={(selectedTab) => dispatch(setActiveTab(selectedTab))}
          label={tabLabels[tab]}
        />
      ))}
    </ul>
  );
}
