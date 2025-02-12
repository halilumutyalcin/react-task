import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/header.css";
import { FaBuilding, FaRegBuilding, FaUserFriends } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { HiOutlineUsers, HiUsers } from "react-icons/hi2";
import { LiaProjectDiagramSolid, LiaCogsSolid } from "react-icons/lia";
import { MdOutlineEdit, MdEdit } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa";

function Header() {
  const location = useLocation(); // 🚀 Sayfa değiştiğinde URL'yi yakala
  const [activeStep, setActiveStep] = useState(4);

  const steps = [
    {
      id: 1,
      icons: { filled: FaGlobe, outlined: CiGlobe },
      label: "Global",
      path: "/global",
    },
    {
      id: 2,
      icons: { filled: FaBuilding, outlined: FaRegBuilding },
      label: "Company",
      path: "/company",
    },
    {
      id: 3,
      icons: { filled: HiUsers, outlined: HiOutlineUsers },
      label: "Teams",
      path: "/teams",
    },
    {
      id: 4,
      icons: { filled: FaUserFriends, outlined: FaUserFriends },
      label: "Personnels",
      path: "/staff",
    },
    {
      id: 5,
      icons: {
        filled: LiaProjectDiagramSolid,
        outlined: LiaProjectDiagramSolid,
      },
      label: "Projects",
      path: "/projects",
    },
    {
      id: 6,
      icons: { filled: LiaCogsSolid, outlined: LiaCogsSolid },
      label: "Settings",
      path: "/settings",
    },
    {
      id: 7,
      icons: { filled: MdEdit, outlined: MdOutlineEdit },
      label: "Edit",
      path: "/edit",
    },
    {
      id: 8,
      icons: { filled: LuCalendarDays, outlined: LuCalendarDays },
      label: "Schedule",
      path: "/schedule",
    },
  ];

  // 🌟 Sayfa değiştiğinde activeStep'i güncelle
  useEffect(() => {
    const currentStep = steps.find((step) =>
      location.pathname.startsWith(step.path)
    );
    if (currentStep) {
      setActiveStep(currentStep.id);
    }
  }, [location.pathname]); // 🔄 URL değiştiğinde çalıştır

  return (
    <div className="header-container">
      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <Link
              to={step.path}
              style={{ textDecoration: "none" }}
              className="step-link"
            >
              <div
                className={`step-box ${
                  activeStep === step.id ? "active" : "inactive"
                } ${step.id <= activeStep ? "completed" : ""}`}
              >
                <div
                  className={`step-icon-container ${
                    activeStep === step.id ? "active" : "inactive"
                  }`}
                >
                  {React.createElement(
                    activeStep === step.id
                      ? step.icons.filled
                      : step.icons.outlined,
                    {
                      size: 24,
                      color: activeStep === step.id ? "white" : "#7F56D9",
                    }
                  )}
                </div>
                {activeStep === step.id && (
                  <div className="step-details">
                    <span>Step {step.id}/8</span>
                    <span>{step.label}</span>
                  </div>
                )}
              </div>
            </Link>

            {index < steps.length - 1 && (
              <hr
                className="step-divider"
                style={{
                  display: "block",
                  visibility: "visible",
                  backgroundColor: "#E4E7EC",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Header;
