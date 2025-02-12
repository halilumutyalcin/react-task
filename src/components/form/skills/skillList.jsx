import React from "react";
import SkillItem from "./skillItem";

export default function SkillList({ skills, onEdit, onDelete }) {
  return (
    <ul className="list-group mt-2">
      {skills.map((skill, index) => (
        <SkillItem
          key={index}
          skill={skill}
          index={index}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
}
