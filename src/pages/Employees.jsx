import React, { useEffect, useState } from "react";
import {
  FiPlus,
  FiTrash2,
  FiSearch,
  FiMail,
  FiBriefcase,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import "../styles/Employees.css";

const Employees = () => {

  const navigate = useNavigate();

  const defaultEmployees = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul.sharma@company.com",
      department: "Engineering",
      role: "Senior Developer",
      salary: "850000",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },

    {
      id: 2,
      name: "Priya Patel",
      email: "priya.patel@company.com",
      department: "Design",
      role: "UI/UX Designer",
      salary: "650000",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    },

    {
      id: 3,
      name: "Amit Kumar",
      email: "amit.kumar@company.com",
      department: "Marketing",
      role: "Marketing Manager",
      salary: "720000",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },

    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha.reddy@company.com",
      department: "Engineering",
      role: "Full Stack Developer",
      salary: "780000",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    },
  ];

  const [showForm, setShowForm] = useState(false);

  const [employees, setEmployees] = useState(defaultEmployees);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    role: "",
    salary: "",
    image: "",
  });

  useEffect(() => {

    const savedEmployees =
      localStorage.getItem("employees");

    if (savedEmployees) {

      setEmployees(JSON.parse(savedEmployees));

    } else {

      localStorage.setItem(
        "employees",
        JSON.stringify(defaultEmployees)
      );
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );

  }, [employees]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

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

    const updatedEmployees = [
      newEmployee,
      ...employees,
    ];

    setEmployees(updatedEmployees);

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

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

  const deleteEmployee = (id) => {

    const confirmDelete = window.confirm(
      "Delete this employee?"
    );

    if (confirmDelete) {

      const updatedEmployees =
        employees.filter(
          (emp) => emp.id !== id
        );

      setEmployees(updatedEmployees);

      localStorage.setItem(
        "employees",
        JSON.stringify(updatedEmployees)
      );
    }
  };

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.department
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      emp.role
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (

    <div className="employee-page">

      <div className="employee-header">

        <div className="header-left">

          <button
            className="back-btn"
            onClick={() => navigate("/dashboard")}
          >
            ← Back
          </button>

          <div>
            <h1>Employees</h1>

            <p>
              Manage all employee records professionally
            </p>
          </div>

        </div>

        <button
          className="add-btn"
          onClick={() => setShowForm(!showForm)}
        >
          <FiPlus />
          Add Employee
        </button>

      </div>

      <div className="search-box">

        <FiSearch />

        <input
          type="text"
          placeholder="Search employees..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {showForm && (

        <div className="form-container">

          <h2>Add Employee Details</h2>

          <form
            onSubmit={addEmployee}
            className="employee-form"
          >

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
              placeholder="Salary"
              value={formData.salary}
              onChange={handleChange}
            />

            <input
              type="text"
              name="image"
              placeholder="Paste Image URL"
              value={formData.image}
              onChange={handleChange}
            />

            <button type="submit">
              Save Employee
            </button>

          </form>

        </div>
      )}

      <div className="employee-grid">

        {filteredEmployees.length > 0 ? (

          filteredEmployees.map((emp) => (

            <div
              className="employee-card"
              key={emp.id}
            >

              <div className="card-top">

                <img
                  src={
                    emp.image
                      ? emp.image
                      : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                  alt={emp.name}
                />

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteEmployee(emp.id)
                  }
                >
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
                  ₹{" "}
                  {emp.salary
                    ? parseInt(emp.salary).toLocaleString("en-IN")
                    : "0"}
                </span>

              </div>

            </div>
          ))

        ) : (

          <div className="empty-box">

            <h2>No Employees Found</h2>

            <p>
              Try adjusting your search term
            </p>

          </div>
        )}

      </div>

    </div>
  );
};

export default Employees;