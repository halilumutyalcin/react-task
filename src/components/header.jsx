import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.css"; //
import { FaRegBuilding, FaUserFriends } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { LiaProjectDiagramSolid, LiaCogsSolid } from "react-icons/lia";
import { MdOutlineEdit } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";

function Header() {
  const [activeStep, setActiveStep] = useState(4);

  const steps = [
    { id: 1, icon: CiGlobe, label: "Global" },
    { id: 2, icon: FaRegBuilding, label: "Company" },
    { id: 3, icon: HiOutlineUsers, label: "Teams" },
    { id: 4, icon: FaUserFriends, label: "Personnels" },
    { id: 5, icon: LiaProjectDiagramSolid, label: "Projects" },
    { id: 6, icon: LiaCogsSolid, label: "Settings" },
    { id: 7, icon: MdOutlineEdit, label: "Edit" },
    { id: 8, icon: LuCalendarDays, label: "Schedule" },
  ];

  return (
    <div className="header-container">
      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className={`step-box ${activeStep === step.id ? "active" : "inactive"}`}>
              <div className={`step-icon-container ${activeStep === step.id ? "active" : "inactive"}`}>
                {React.createElement(step.icon, {
                  size: 24,
                  color: activeStep === step.id ? "white" : "#7F56D9",
                })}
              </div>

              {activeStep === step.id && (
                <div className="step-details">
                  <span>Step {step.id}/8</span>
                  <span>{step.label}</span>
                </div>
              )}
            </div>
            {index < steps.length - 1 && <hr className="step-divider" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Header;
