import { Routes, Route, Navigate } from "react-router-dom";
import PersonelList from "../components/personelList";
import NewPersonelForm from "../components/newPersonelForm";
import MainScreen from "../components/mainScreen";
import '../styles/home.css';

export default function Staff() {
  return (
    <div className="staff-container">
      <Routes>
        <Route path="/" element={<Navigate to="welcome" />} />
        <Route path="welcome" element={<MainScreen />} />
        <Route path="list" element={<PersonelList />} />
        <Route path="form" element={<NewPersonelForm />} />
      </Routes>
    </div>
  );
}
