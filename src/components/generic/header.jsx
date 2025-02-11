import React, { useState } from "react";
import { FaBuilding, FaRegBuilding, FaUserFriends } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { HiOutlineUsers, HiUsers } from "react-icons/hi2";
import { LiaProjectDiagramSolid, LiaCogsSolid } from "react-icons/lia";
import { MdOutlineEdit, MdEdit } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa";
import StepItem from "./header/stepItem";
import StepDivider from "./header/stepDivider";
import "../../styles/header.css";

function Header() {
  const [activeStep, setActiveStep] = useState(4);

  const steps = [
    { id: 1, icons: { filled: FaGlobe, outlined: CiGlobe }, label: "Global", path: "/global" },
    { id: 2, icons: { filled: FaBuilding, outlined: FaRegBuilding }, label: "Company", path: "/company" },
    { id: 3, icons: { filled: HiUsers, outlined: HiOutlineUsers }, label: "Teams", path: "/teams" },
    { id: 4, icons: { filled: FaUserFriends, outlined: FaUserFriends }, label: "Personnels", path: "/staff" },
    { id: 5, icons: { filled: LiaProjectDiagramSolid, outlined: LiaProjectDiagramSolid }, label: "Projects", path: "/projects" },
    { id: 6, icons: { filled: LiaCogsSolid, outlined: LiaCogsSolid }, label: "Settings", path: "/settings" },
    { id: 7, icons: { filled: MdEdit, outlined: MdOutlineEdit }, label: "Edit", path: "/edit" },
    { id: 8, icons: { filled: LuCalendarDays, outlined: LuCalendarDays }, label: "Schedule", path: "/schedule" },
  ];

  return (
    <div className="header-container">
      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <StepItem step={step} activeStep={activeStep} setActiveStep={setActiveStep} />
            {index < steps.length - 1 && <StepDivider />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Header;
