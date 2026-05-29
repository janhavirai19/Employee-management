import React, { useState, useEffect } from "react";
import {
  FiUser,
  FiMail,
  FiLock,
  FiBell,
  FiMoon,
  FiSun,
  FiShield,
  FiLogOut,
  FiSave,
  FiTrash2,
  FiCamera,
  FiGlobe,
} from "react-icons/fi";

import "../styles/Settings.css";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john.doe@company.com",
    phone: "+91 9876543210",
    bio: "Full Stack Developer passionate about building great applications.",
    location: "Mumbai, India",
    website: "https://johndoe.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  useEffect(() => {
    const savedSettings = localStorage.getItem("userSettings");
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setDarkMode(settings.darkMode !== undefined ? settings.darkMode : true);
      setNotifications(settings.notifications !== undefined ? settings.notifications : true);
      setEmailNotifications(settings.emailNotifications !== undefined ? settings.emailNotifications : true);
    }

    const savedUserData = localStorage.getItem("userData");
    if (savedUserData) {
      setFormData(JSON.parse(savedUserData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "userSettings",
      JSON.stringify({
        darkMode,
        notifications,
        emailNotifications,
      })
    );
  }, [darkMode, notifications, emailNotifications]);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(formData));
  }, [formData]);

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSave = (e) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

 
  const handleChangePassword = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (formData.newPassword.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
    setFormData({
      ...formData,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

 
  const tabs = [
    { id: "profile", label: "Profile", icon: FiUser },
    { id: "security", label: "Security", icon: FiShield },
    { id: "notifications", label: "Notifications", icon: FiBell },
    { id: "appearance", label: "Appearance", icon: FiMoon },
  ];

  return (
    <div className={`settings-page ${darkMode ? "dark-mode" : "light-mode"}`}>
   
      <aside className="settings-sidebar">
        <div className="sidebar-header">
          <h2>Settings</h2>
        </div>
        <nav className="sidebar-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`nav-item ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button className="logout-btn">
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="settings-main">
        {/* HEADER */}
        <header className="settings-header">
          <div>
            <h1>{tabs.find((t) => t.id === activeTab)?.label}</h1>
            <p>Manage your account settings and preferences</p>
          </div>
        </header>

        
        {saveSuccess && (
          <div className="success-message">
            <FiSave />
            <span>Settings saved successfully!</span>
          </div>
        )}

       
        {activeTab === "profile" && (
          <div className="settings-content">
            <div className="profile-section">
              <div className="profile-avatar">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                  alt="Profile"
                />
                <button className="change-photo-btn">
                  <FiCamera />
                  <span>Change Photo</span>
                </button>
              </div>

              <form onSubmit={handleSave} className="settings-form">
                <div className="form-group">
                  <label>
                    <FiUser />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label>
                    <FiMail />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label>
                    <FiUser />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter your location"
                  />
                </div>

                <div className="form-group">
                  <label>Website</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div className="form-group">
                  <label>Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Tell us about yourself..."
                    rows="4"
                  />
                </div>

                <button type="submit" className="save-btn">
                  <FiSave />
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        )}

       
        {activeTab === "security" && (
          <div className="settings-content">
            <div className="security-section">
              <h2>Change Password</h2>
              <form onSubmit={handleChangePassword} className="settings-form">
                <div className="form-group">
                  <label>
                    <FiLock />
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    placeholder="Enter current password"
                  />
                </div>

                <div className="form-group">
                  <label>
                    <FiLock />
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    placeholder="Enter new password"
                  />
                </div>

                <div className="form-group">
                  <label>
                    <FiLock />
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm new password"
                  />
                </div>

                <button type="submit" className="save-btn">
                  <FiSave />
                  Update Password
                </button>
              </form>

              <div className="security-divider">
                <span>Other Security Options</span>
              </div>

              <div className="security-options">
                <div className="security-item">
                  <div>
                    <h3>Two-Factor Authentication</h3>
                    <p>Add an extra layer of security to your account</p>
                  </div>
                  <button className="enable-btn">Enable</button>
                </div>

                <div className="security-item">
                  <div>
                    <h3>Active Sessions</h3>
                    <p>Manage devices where you're logged in</p>
                  </div>
                  <button className="view-btn">View</button>
                </div>

                <div className="security-item danger">
                  <div>
                    <h3>Delete Account</h3>
                    <p>Permanently delete your account and all data</p>
                  </div>
                  <button className="delete-btn">
                    <FiTrash2 />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

       
        {activeTab === "notifications" && (
          <div className="settings-content">
            <div className="notifications-section">
              <h2>Notification Preferences</h2>

              <div className="toggle-group">
                <div className="toggle-item">
                  <div className="toggle-info">
                    <FiBell />
                    <div>
                      <h3>Push Notifications</h3>
                      <p>Receive push notifications on your device</p>
                    </div>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={notifications}
                      onChange={() => setNotifications(!notifications)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="toggle-item">
                  <div className="toggle-info">
                    <FiMail />
                    <div>
                      <h3>Email Notifications</h3>
                      <p>Receive updates via email</p>
                    </div>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={emailNotifications}
                      onChange={() => setEmailNotifications(!emailNotifications)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="toggle-item">
                  <div className="toggle-info">
                    <FiUser />
                    <div>
                      <h3>Profile Updates</h3>
                      <p>Notify when someone views your profile</p>
                    </div>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="toggle-item">
                  <div className="toggle-info">
                    <FiShield />
                    <div>
                      <h3>Security Alerts</h3>
                      <p>Get notified about security events</p>
                    </div>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "appearance" && (
          <div className="settings-content">
            <div className="appearance-section">
              <h2>Theme Settings</h2>

              <div className="theme-options">
                <div className="theme-card dark">
                  <div className="theme-preview dark-preview"></div>
                  <h3>Dark Mode</h3>
                  <p>Low light, easy on eyes</p>
                  <button
                    className={`theme-select-btn ${darkMode ? "active" : ""}`}
                    onClick={() => setDarkMode(true)}
                  >
                    {darkMode ? "Selected" : "Select"}
                  </button>
                </div>

                <div className="theme-card light">
                  <div className="theme-preview light-preview"></div>
                  <h3>Light Mode</h3>
                  <p>Bright and clear</p>
                  <button
                    className={`theme-select-btn ${!darkMode ? "active" : ""}`}
                    onClick={() => setDarkMode(false)}
                  >
                    {!darkMode ? "Selected" : "Select"}
                  </button>
                </div>
              </div>

              <div className="appearance-options">
                <div className="appearance-item">
                  <div className="appearance-info">
                    <FiGlobe />
                    <div>
                      <h3>Language</h3>
                      <p>Choose your preferred language</p>
                    </div>
                  </div>
                  <select className="language-select">
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>

                <div className="appearance-item">
                  <div className="appearance-info">
                    <FiMoon />
                    <div>
                      <h3>Reduce Motion</h3>
                      <p>Minimize animations and transitions</p>
                    </div>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Settings;