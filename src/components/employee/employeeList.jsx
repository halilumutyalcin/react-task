import React from "react";
import EmployeeItem from "./employeeItem";

export default function EmployeeListC({ employees, onEdit, onDelete }) {
  return (
    <ul className="personnel-list list-unstyled">
      {employees.map((person) => (
        <EmployeeItem
          key={person.id} // 🟢 index yerine id kullanıldı
          person={person}
          onEdit={() => onEdit(person)}
          onDelete={() => onDelete(person)}
        />
      ))}
    </ul>
  );
}
