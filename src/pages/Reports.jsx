import React from "react";
import {
  FiUsers,
  FiUserCheck,
  FiUserX,
  FiTrendingUp,
  FiDownload,
  FiActivity,
  FiCalendar,
  FiAward,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import "../styles/Reports.css";

const Reports = () => {

  const navigate = useNavigate();

  const reportData = [
    {
      title: "Total Employees",
      value: "1,248",
      icon: <FiUsers />,
      className: "purple-card",
    },

    {
      title: "Present Today",
      value: "1,102",
      icon: <FiUserCheck />,
      className: "green-card",
    },

    {
      title: "Absent Today",
      value: "146",
      icon: <FiUserX />,
      className: "red-card",
    },

    {
      title: "Performance",
      value: "89%",
      icon: <FiTrendingUp />,
      className: "blue-card",
    },
  ];

  const employees = [
    {
      id: 1,
      name: "Janhavi Rai",
      role: "Frontend Developer",
      department: "Development",
      attendance: "96%",
      performance: "Excellent",
      status: "Active",
      image:
        "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
    },

    {
      id: 2,
      name: "Rahul Sharma",
      role: "UI Designer",
      department: "Design",
      attendance: "89%",
      performance: "Good",
      status: "Pending",
      image:
        "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },

    {
      id: 3,
      name: "Aman Verma",
      role: "Marketing Lead",
      department: "Marketing",
      attendance: "91%",
      performance: "Very Good",
      status: "Active",
      image:
        "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
    },

    {
      id: 4,
      name: "Priya Singh",
      role: "HR Manager",
      department: "Human Resources",
      attendance: "94%",
      performance: "Excellent",
      status: "Active",
      image:
        "https://cdn-icons-png.flaticon.com/512/6997/6997665.png",
    },
  ];

  /* ===== DOWNLOAD REPORT ===== */

  const handleDownloadReport = () => {

    const headers = [
      "Name",
      "Role",
      "Department",
      "Attendance",
      "Performance",
      "Status",
    ];

    const rows = employees.map((emp) => [
      emp.name,
      emp.role,
      emp.department,
      emp.attendance,
      emp.performance,
      emp.status,
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows]
        .map((e) => e.join(","))
        .join("\n");

    const encodedUri = encodeURI(csvContent);

    const link = document.createElement("a");

    link.setAttribute("href", encodedUri);

    link.setAttribute(
      "download",
      "employee_reports.csv"
    );

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className="reports-page">

      <div className="reports-header">

        <div className="header-left">

          <button
            className="back-btn"
            onClick={() => navigate("/dashboard")}
          >
            ← Back
          </button>

          <div>
            <h1>Reports & Analytics</h1>

            <p>
              Employee performance, attendance and activity insights
            </p>
          </div>

        </div>

        <button
          className="download-btn"
          onClick={handleDownloadReport}
        >
          <FiDownload />
          Download Report
        </button>

      </div>

      <div className="report-cards">

        {reportData.map((card, index) => (
          <div
            className={`report-card ${card.className}`}
            key={index}
          >

            <div className="card-icon">
              {card.icon}
            </div>

            <div>
              <h2>{card.value}</h2>
              <p>{card.title}</p>
            </div>

          </div>
        ))}

      </div>

      <div className="analytics-grid">

        <div className="analytics-card">

          <div className="analytics-top">
            <FiActivity />
            <span>Monthly Activity</span>
          </div>

          <h2>87%</h2>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <p>
            Overall employee activity increased this month.
          </p>

        </div>

        <div className="analytics-card">

          <div className="analytics-top">
            <FiCalendar />
            <span>Attendance Rate</span>
          </div>

          <h2>94%</h2>

          <div className="progress-bar">
            <div className="progress-fill attendance-fill"></div>
          </div>

          <p>
            Attendance performance is better than last month.
          </p>

        </div>

        <div className="analytics-card">

          <div className="analytics-top">
            <FiAward />
            <span>Best Department</span>
          </div>

          <h2>Development</h2>

          <div className="department-badge">
            Top Performing Team
          </div>

          <p>
            Development department achieved highest productivity.
          </p>

        </div>

      </div>

      <div className="report-table-container">

        <div className="table-header">
          <h2>Monthly Employee Reports</h2>
        </div>

        <div className="report-table">

          <div className="table-head">
            <span>Employee</span>
            <span>Department</span>
            <span>Attendance</span>
            <span>Performance</span>
            <span>Status</span>
          </div>

          {employees.map((employee) => (
            <div className="table-row" key={employee.id}>

              <div className="employee-info">

                <img src={employee.image} alt="" />

                <div>
                  <h3>{employee.name}</h3>
                  <p>{employee.role}</p>
                </div>

              </div>

              <span>{employee.department}</span>

              <span>{employee.attendance}</span>

              <span>{employee.performance}</span>

              <div
                className={
                  employee.status === "Active"
                    ? "active-status"
                    : "pending-status"
                }
              >
                {employee.status}
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Reports;