import { useNavigate } from "react-router-dom";
import "./../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">
       
        <div className="login-left">
          <div className="logo">
            <h2>FlowSync</h2>
          </div>

          <div className="left-content">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
              alt="lady"
              className="lady-image"
            />

            <h1>Welcome to FlowSync</h1>

            <p>
              A modern platform designed to manage employees,
              departments, and organizational workflows effortlessly.
            </p>

            <div className="stats">
              <div className="mini-box">
                <h3>250+</h3>
                <span>Employees</span>
              </div>

              <div className="mini-box">
                <h3>12+</h3>
                <span>Departments</span>
              </div>

              <div className="mini-box">
                <h3>99%</h3>
                <span>Secure</span>
              </div>
            </div>
          </div>

          <div className="circle"></div>
          <div className="circle2"></div>
        </div>

       
        <div className="login-right">
          <div className="form-container">
            <h2>Welcome Back 👋</h2>
            <p className="sub-text">
              Login to continue managing your workspace.
            </p>

            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;