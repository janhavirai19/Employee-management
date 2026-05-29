import React, { useEffect, useState } from "react";
import {
  FiSearch,
  FiCheckCircle,
  FiXCircle,
  FiClock,
} from "react-icons/fi";

import "../styles/Attendance.css";

const Attendance = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const savedData = localStorage.getItem("attendance");

    if (savedData) {
      setEmployees(JSON.parse(savedData));
    } else {
      const demoEmployees = [
        {
          id: 1,
          name: "Janhavi Rai",
          department: "Development",
          status: "Present",
          time: "09:10 AM",
          image:
            "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
        },

        {
          id: 2,
          name: "Rahul Sharma",
          department: "Design",
          status: "Absent",
          time: "--",
          image:
            "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
        },

        {
          id: 3,
          name: "Aman Verma",
          department: "Marketing",
          status: "Late",
          time: "10:45 AM",
          image:
            "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
        },
      ];

      setEmployees(demoEmployees);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("attendance", JSON.stringify(employees));
  }, [employees]);

  const updateStatus = (id, newStatus) => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === id
        ? {
            ...emp,
            status: newStatus,
          }
        : emp
    );

    setEmployees(updatedEmployees);
  };
  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="attendance-page">

      <div className="attendance-header">
        <div>
          <h1>Attendance Management</h1>
          <p>Track employee attendance professionally</p>
        </div>

        <div className="attendance-count">
          Total Employees : {employees.length}
        </div>
      </div>


      <div className="search-box">
        <FiSearch />

        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

    

      <div className="attendance-table">
        <div className="table-head">
          <span>Employee</span>
          <span>Department</span>
          <span>Check In</span>
          <span>Status</span>
          <span>Action</span>
        </div>

        {filteredEmployees.map((emp) => (
          <div className="table-row" key={emp.id}>
            

            <div className="employee-info">
              <img src={emp.image} alt="" />

              <div>
                <h3>{emp.name}</h3>
                <p>Employee ID : #{emp.id}</p>
              </div>
            </div>


            <div className="department">
              {emp.department}
            </div>

            <div className="time">
              <FiClock />
              {emp.time}
            </div>


            <div
              className={`status ${emp.status.toLowerCase()}`}
            >
              {emp.status}
            </div>

          

            <div className="action-buttons">
              <button
                className="present-btn"
                onClick={() =>
                  updateStatus(emp.id, "Present")
                }
              >
                <FiCheckCircle />
              </button>

              <button
                className="late-btn"
                onClick={() => updateStatus(emp.id, "Late")}
              >
                <FiClock />
              </button>

              <button
                className="absent-btn"
                onClick={() =>
                  updateStatus(emp.id, "Absent")
                }
              >
                <FiXCircle />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;