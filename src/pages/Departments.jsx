import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Departments.css";

function Departments() {

  const navigate = useNavigate();

  const [departments, setDepartments] = useState([
    {
      id: 1,
      icon: "💻",
      name: "Development",
      description: "Handles frontend, backend, APIs and architecture.",
      employees: 45,
      projects: 12,
      status: "Active",
      color: "blue"
    },

    {
      id: 2,
      icon: "🎨",
      name: "Design",
      description: "Creates UI/UX, branding and prototypes.",
      employees: 18,
      projects: 7,
      status: "Active",
      color: "purple"
    },

    {
      id: 3,
      icon: "📊",
      name: "Marketing",
      description: "Manages campaigns and promotions.",
      employees: 22,
      projects: 10,
      status: "Active",
      color: "green"
    },

    {
      id: 4,
      icon: "👥",
      name: "Human Resources",
      description: "Handles recruitment and employee management.",
      employees: 15,
      projects: 5,
      status: "Hiring",
      color: "orange"
    }
  ]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    employees: "",
    projects: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const addDepartment = (e) => {

    e.preventDefault();

    const newDept = {
      id: departments.length + 1,
      icon: "🏢",
      name: formData.name,
      description: formData.description,
      employees: formData.employees,
      projects: formData.projects,
      status: "Active",
      color: "blue"
    };

    setDepartments([...departments, newDept]);

    setFormData({
      name: "",
      description: "",
      employees: "",
      projects: ""
    });

    setShowForm(false);
  };

  const deleteDepartment = (id) => {

    const updatedDepartments =
      departments.filter((dept) => dept.id !== id);

    setDepartments(updatedDepartments);
  };

  return (

    <div className="departments-page">

      <div className="department-header">

        <div className="header-left">

          <button
            className="back-btn"
            onClick={() => navigate("/dashboard")}
          >
            ← Back
          </button>

          <div>

            <h1>Departments</h1>

            <p>
              Manage all company departments professionally
            </p>

          </div>

        </div>

        <button
          className="add-btn"
          onClick={() => setShowForm(true)}
        >
          + Add
        </button>

      </div>

      {showForm && (

        <div className="popup-overlay">

          <div className="popup-form">

            <div className="popup-top">

              <h2>Add Department</h2>

              <button
                className="close-btn"
                onClick={() => setShowForm(false)}
              >
                ✖
              </button>

            </div>

            <form onSubmit={addDepartment}>

              <div className="form-group">

                <label>Department Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter department name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>Description</label>

                <textarea
                  name="description"
                  placeholder="Enter department details"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>

              <div className="form-row">

                <div className="form-group">

                  <label>Employees</label>

                  <input
                    type="number"
                    name="employees"
                    placeholder="Employees"
                    value={formData.employees}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-group">

                  <label>Projects</label>

                  <input
                    type="number"
                    name="projects"
                    placeholder="Projects"
                    value={formData.projects}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              <button
                type="submit"
                className="submit-btn"
              >
                Add Department
              </button>

            </form>

          </div>

        </div>

      )}

      <div className="department-grid">

        {departments.map((dept) => (

          <div className="department-card" key={dept.id}>

            <div className="card-top">

              <div className={`dept-icon ${dept.color}`}>
                {dept.icon}
              </div>

              <span
                className={
                  dept.status === "Active"
                  ? "status active"
                  : "status pending"
                }
              >
                {dept.status}
              </span>

            </div>

            <h2>{dept.name}</h2>

            <p>{dept.description}</p>

            <div className="department-info">

              <div>
                <h3>{dept.employees}</h3>
                <span>Employees</span>
              </div>

              <div>
                <h3>{dept.projects}</h3>
                <span>Projects</span>
              </div>

            </div>

            <div className="card-buttons">

              <button className="view-btn">
                View
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteDepartment(dept.id)}
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Departments;