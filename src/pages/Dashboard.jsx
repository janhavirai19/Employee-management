import React from "react";
import {
  FiHome,
  FiUsers,
  FiGrid,
  FiCalendar,
  FiBarChart2,
  FiSettings,
  FiSearch,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import { PiUsersThreeBold } from "react-icons/pi";
import { BsPersonCheck } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";

import "../styles/Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="dashboard-shell">

      <aside className="sidebar">

        <div className="brand">
          <div className="brand-icon">▣</div>

          <div>
            <h2>EMPLOYEE</h2>
            <p>MANAGEMENT</p>
          </div>
        </div>
        <nav className="sidebar-nav">

          <button
            className="nav-item active"
            onClick={() => navigate("/dashboard")}
          >
            <FiHome />
            <span>Dashboard</span>
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/employees")}
          >
            <FiUsers />
            <span>Employees</span>
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/departments")}
          >
            <FiGrid />
            <span>Departments</span>
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/attendance")}
          >
            <FiCalendar />
            <span>Attendance</span>
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/reports")}
          >
            <FiBarChart2 />
            <span>Reports</span>
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/settings")}
          >
            <FiSettings />
            <span>Settings</span>
          </button>

        </nav>

      </aside>

      <main className="main">
        <header className="topbar">

          <div className="search-bar">
            <FiSearch />

            <input
              type="text"
              placeholder="Search employees, departments..."
            />
          </div>

          <div className="topbar-right">

            <button className="icon-btn">
              <FiBell />
              <span className="badge">5</span>
            </button>

            <div className="profile">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                alt=""
              />

              <div>
                <h4>Admin User</h4>
                <p>Administrator</p>
              </div>

              <FiChevronDown />

            </div>

          </div>

        </header>
        <section className="welcome-row">

          <div>
            <h1>Welcome back, Admin! 👋</h1>

            <p>
              Here's what's happening with your organization today.
            </p>
          </div>

        </section>
        <section className="stats-grid">

          <div className="stat-card purple">

            <div className="stat-icon">
              <PiUsersThreeBold />
            </div>

            <div>
              <p>Total Employees</p>
              <h2>1,248</h2>

              <span className="up">
                ↑ 12.5% from last month
              </span>
            </div>

          </div>

          <div className="stat-card blue">

            <div className="stat-icon">
              <BsPersonCheck />
            </div>

            <div>
              <p>Present Today</p>
              <h2>1,102</h2>

              <span className="up">
                ↑ 8.3% from yesterday
              </span>
            </div>

          </div>

          <div className="stat-card green">

            <div className="stat-icon">
              <FaRegBuilding />
            </div>

            <div>
              <p>Departments</p>
              <h2>12</h2>

              <span>No change</span>
            </div>

          </div>

          <div className="stat-card orange">

            <div className="stat-icon">
              <FiCalendar />
            </div>

            <div>
              <p>Pending Requests</p>
              <h2>24</h2>

              <span className="down">
                ↓ 4 from yesterday
              </span>
            </div>

          </div>

        </section>
        <section className="cards-grid">


          <div className="panel">

            <div className="panel-header">

              <h3>Attendance Overview</h3>

              <button className="ghost-btn">
                This Week
              </button>

            </div>

            <div className="donut-wrap">

              <div className="donut">

                <div className="donut-center">
                  <strong>88%</strong>
                  <span>Present</span>
                </div>

              </div>

              <div className="legend">

                <div>
                  <span className="dot green-dot"></span>
                  Present
                  <b>1,102 (88%)</b>
                </div>

                <div>
                  <span className="dot yellow-dot"></span>
                  On Leave
                  <b>62 (5%)</b>
                </div>

                <div>
                  <span className="dot red-dot"></span>
                  Absent
                  <b>84 (7%)</b>
                </div>

              </div>

            </div>

          </div>
          <div className="panel">

            <div className="panel-header">

              <h3>Recent Activities</h3>

              <button className="link-btn">
                View All
              </button>

            </div>

            <div className="activity-list">

              <div className="activity-item">

                <div className="activity-icon purple">
                  👤
                </div>

                <div>
                  <strong>
                    New employee Janhavi Rai joined
                  </strong>

                  <p>Development Team</p>
                </div>

                <span>10:30 AM</span>

              </div>

              <div className="activity-item">

                <div className="activity-icon green">
                  📅
                </div>

                <div>
                  <strong>
                    Attendance updated successfully
                  </strong>

                  <p>For May 20, 2026</p>
                </div>

                <span>09:15 AM</span>

              </div>

              <div className="activity-item">

                <div className="activity-icon blue">
                  📄
                </div>

                <div>
                  <strong>
                    Monthly report generated
                  </strong>

                  <p>May 2026 Report</p>
                </div>

                <span>08:45 AM</span>

              </div>

              <div className="activity-item">

                <div className="activity-icon orange">
                  ✏️
                </div>

                <div>
                  <strong>
                    Employee profile edited
                  </strong>

                  <p>
                    Rahul Verma updated profile
                  </p>
                </div>

                <span>Yesterday</span>

              </div>

            </div>

          </div>

          <div className="panel">

            <div className="panel-header">

              <h3>Employee Statistics</h3>

              <button className="ghost-btn">
                This Month
              </button>

            </div>

            <div className="stat-mini">

              <div className="mini-left">

                <div className="mini-icon blue">
                  👤
                </div>

                <div>
                  <p>New employees</p>
                  <h4>1,180</h4>
                </div>

              </div>

              <span className="up">
                ↑ 10.2% from last month
              </span>

            </div>

            <div className="stat-mini">

              <div className="mini-left">

                <div className="mini-icon orange">
                  🧳
                </div>

                <div>
                  <p>On Leave</p>
                  <h4>42</h4>
                </div>

              </div>

              <span className="down">
                ↓ 2.1% from last month
              </span>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;