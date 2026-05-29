import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Departments from "./pages/Departments";
import Attendance from "./pages/Attendance";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings"; // ✅ SETTINGS IMPORT

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* DASHBOARD */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* EMPLOYEES */}
        <Route path="/employees" element={<Employees />} />

        {/* DEPARTMENTS */}
        <Route path="/departments" element={<Departments />} />

        {/* ATTENDANCE */}
        <Route path="/attendance" element={<Attendance />} />

        {/* REPORTS */}
        <Route path="/reports" element={<Reports />} />

        {/* SETTINGS */}
        <Route path="/settings" element={<Settings />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;