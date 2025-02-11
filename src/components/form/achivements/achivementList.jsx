import React from "react";
import AchievementItem from "./achivementItem";

export default function AchievementList({ achievements }) {
  return (
    <ul className="list-group mt-2">
      {achievements.map((achievement, index) => (
        <AchievementItem key={index} achievement={achievement} />
      ))}
    </ul>
  );
}
