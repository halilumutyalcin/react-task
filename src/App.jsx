import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/generic/header";
import Footer from "./components/generic/footer";
import Staff from "./pages/staff";
import NotFound from "./pages/not-found";
import { Routes, Route, Navigate } from "react-router-dom";
import Global from "./pages/global";
import Company from "./pages/company";
import Teams from "./pages/teams";
import Projects from "./pages/projects";
import Settings from "./pages/settings";
import Edit from "./pages/edit";
import Schedule from "./pages/schedule";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Staff />} />

        <Route path="/global" element={<Global />} />
        <Route path="/company" element={<Company />} />
        <Route path="/teams" element={<Teams />} />

        <Route path="/staff/*" element={<Staff />} />
        <Route path="*" element={<Navigate to="/staff" />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
