import React from "react";
import AchievementItem from "./achivementItem";

export default function AchievementList({ achievements, onEdit, onDelete }) {
  return (
    <ul className="list-group mt-2">
      {achievements.map((achievement, index) => (
        <AchievementItem
          key={index}
          index={index} // ✅ index prop'unu geçir
          achievement={achievement}
          onEdit={onEdit} // ✅ index zaten AchievementItem içinde kullanılacak
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
