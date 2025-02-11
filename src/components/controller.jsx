import React, { useState } from "react";
import Home from "../pages/home";
import PersonelList from "./personelList";
import NewPersonelForm from "./newPersonelForm";
import MainScreen from "./mainScreen";

export default function Contoller() {
  const [currentView, setCurrentView] = useState("home");

  return (
    <div className="container">
      {currentView === "home" && <MainScreen goToList={() => setCurrentView("list")} />}
      {currentView === "list" && <PersonelList goToForm={() => setCurrentView("form")} goToHome={() => setCurrentView("home")} />}
      {currentView === "form" && <NewPersonelForm goToList={() => setCurrentView("list")} />}
    </div>
  );
}
