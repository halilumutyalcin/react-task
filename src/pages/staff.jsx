import { Routes, Route, Navigate } from "react-router-dom";
import NewPersonelForm from "./staff/form/mainForm";
import MainScreen from "../components/home/mainScreen";
import "../styles/home.css";
import EmployeeList from "./staff/employeeList";

export default function Staff() {
  return (
    <div className="staff-container">
      <Routes>
        <Route path="/" element={<Navigate to="welcome" />} />
        <Route path="welcome" element={<MainScreen />} />
        <Route path="list" element={<EmployeeList />} />
        <Route path="form" element={<NewPersonelForm />} />

        {/* 🔥 Edit route'u eklendi */}
        <Route path="edit/:id" element={<NewPersonelForm />} />
      </Routes>
    </div>
  );
}
