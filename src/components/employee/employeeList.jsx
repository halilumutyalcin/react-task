import React from "react";
import EmployeeItem from "./employeeItem";

export default function EmployeeListC({ employees, onEdit, onDelete }) {
  return (
    <div
      className="personnel-container"
      style={{
        maxHeight: "400px",
        overflowY: "auto",
      }}
    >
      <ul className="personnel-list list-unstyled mb-0">
        {employees.map((person) => (
          <EmployeeItem
            key={person.id}
            person={person}
            onEdit={() => onEdit(person)}
            onDelete={() => onDelete(person)}
          />
        ))}
      </ul>
    </div>
  );
}
