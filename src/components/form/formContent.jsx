import React from "react";
import SkillsInfo from "../../pages/staff/form/tabs/SkillsInfo";
import AchievementsInfo from "../../pages/staff/form/tabs/AchievementsInfo";
import GeneralInfo from "../../pages/staff/form/tabs/GeneralInfo";



export default function FormContent({ activeTab, values, setFieldValue }) {
  return (
    <div className="tab-content mt-3">
  {activeTab === "general" && <GeneralInfo values={values} setFieldValue={setFieldValue} />}
      {activeTab === "skills" && <SkillsInfo values={values} setFieldValue={setFieldValue} />}
      {activeTab === "achievements" && <AchievementsInfo values={values} setFieldValue={setFieldValue} />}
       </div>
  );
}