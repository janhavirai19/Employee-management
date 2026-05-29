// Employees.jsx

import React, { useEffect, useState } from "react";
import {
  FiPlus,
  FiTrash2,
  FiSearch,
  FiMail,
  FiBriefcase,
} from "react-icons/fi";

import "../styles/Employees.css";

const Employees = () => {
  const [showForm, setShowForm] = useState(false);

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul.sharma@company.com",
      department: "Engineering",
      role: "Senior Developer",
      salary: "850000",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya.patel@company.com",
      department: "Design",
      role: "UI/UX Designer",
      salary: "650000",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Amit Kumar",
      email: "amit.kumar@company.com",
      department: "Marketing",
      role: "Marketing Manager",
      salary: "720000",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha.reddy@company.com",
      department: "Engineering",
      role: "Full Stack Developer",
      salary: "780000",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram.singh@company.com",
      department: "Finance",
      role: "Financial Analyst",
      salary: "690000",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Ananya Iyer",
      email: "ananya.iyer@company.com",
      department: "HR",
      role: "HR Coordinator",
      salary: "580000",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    },
  ]);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    role: "",
    salary: "",
    image: "",
  });

  // Load Local Storage (only if empty)
  useEffect(() => {
    const savedEmployees = localStorage.getItem("employees");

    if (savedEmployees) {
      setEmployees(JSON.parse(savedEmployees));
    }
    // If localStorage is empty, the initial 6 employees will show
  }, []);

  // Save Local Storage
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add Employee
  const addEmployee = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.department ||
      !formData.role
    ) {
      alert("Please Fill All Fields");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      ...formData,
    };

    setEmployees([newEmployee, ...employees]);

    setFormData({
      name: "",
      email: "",
      department: "",
      role: "",
      salary: "",
      image: "",
    });

    setShowForm(false);
  };

  // Delete Employee
  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
  };

  // Search Employee
  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.department.toLowerCase().includes(search.toLowerCase()) ||
      emp.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="employee-page">
      {/* HEADER */}
      <div className="employee-header">
        <div>
          <h1>Employees</h1>
          <p>Manage all employee records professionally</p>
        </div>

        <button
          className="add-btn"
          onClick={() => setShowForm(!showForm)}
        >
          <FiPlus />
          Add Employee
        </button>
      </div>

      {/* SEARCH */}
      <div className="search-box">
        <FiSearch />
        <input
          type="text"
          placeholder="Search employees by name, department, or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* FORM */}
      {showForm && (
        <div className="form-container">
          <h2>Add Employee Details</h2>

          <form onSubmit={addEmployee} className="employee-form">
            <input
              type="text"
              name="name"
              placeholder="Employee Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
            />

            <input
              type="text"
              name="role"
              placeholder="Job Role"
              value={formData.role}
              onChange={handleChange}
            />

            <input
              type="number"
              name="salary"
              placeholder="Salary (₹)"
              value={formData.salary}
              onChange={handleChange}
            />

            <input
              type="text"
              name="image"
              placeholder="Paste Image URL (optional)"
              value={formData.image}
              onChange={handleChange}
            />

            <button type="submit">Save Employee</button>
          </form>
        </div>
      )}

      {/* EMPLOYEE CARDS */}
      <div className="employee-grid">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((emp) => (
            <div className="employee-card" key={emp.id}>
              <div className="card-top">
                <img
                  src={
                    emp.image
                      ? emp.image
                      : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                  alt={emp.name}
                />

                <button onClick={() => deleteEmployee(emp.id)}>
                  <FiTrash2 />
                </button>
              </div>

              <h3>{emp.name}</h3>

              <div className="employee-detail">
                <FiMail />
                <span>{emp.email}</span>
              </div>

              <div className="employee-detail">
                <FiBriefcase />
                <span>{emp.role}</span>
              </div>

              <div className="tags">
                <span>{emp.department}</span>

                <span className="salary">
                  ₹ {emp.salary ? parseInt(emp.salary).toLocaleString('en-IN') : "0"}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-box">
            <h2>No Employees Found</h2>
            <p>Try adjusting your search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employees;