import React from "react";
import { Link } from "react-router-dom";

const StepItem = ({ step, activeStep, setActiveStep }) => {
  return (
    <Link
      to={step.path}
      style={{ textDecoration: "none" }}
      className="step-link"
      onClick={() => setActiveStep(step.id)}
    >
      <div className={`step-box ${activeStep === step.id ? "active" : "inactive"} ${step.id <= activeStep ? "completed" : ""}`}>
        <div className={`step-icon-container ${activeStep === step.id ? "active" : "inactive"}`}>
          {React.createElement(activeStep === step.id ? step.icons.filled : step.icons.outlined, {
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
    </Link>
  );
};

export default StepItem;
