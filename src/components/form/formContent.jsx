import React from "react";
import { useSelector } from "react-redux";
import GeneralInfo from "../../pages/staff/form/tabs/generalInfo";
import SkillsInfo from "../../pages/staff/form/tabs/skillsInfo";
import AchievementsInfo from "../../pages/staff/form/tabs/achievementsInfo";

export default function FormContent({ values, setFieldValue }) {
  const { activeTab } = useSelector((state) => state.tab);

  const tabComponents = {
    general: GeneralInfo,
    skills: SkillsInfo,
    achievements: AchievementsInfo,
  };

  const ActiveComponent = tabComponents[activeTab];

  return (
    <div className="tab-content mt-3">
      {ActiveComponent && <ActiveComponent values={values} setFieldValue={setFieldValue} />}
    </div>
  );
}
