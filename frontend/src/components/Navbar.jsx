import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import '../css/ThemeContext.css'
const Navbar = () => {
  const token = localStorage.getItem("token");

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "glass");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">TBloger</h2>
        <select className="theme-selector" value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="glass">Glass</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>

        {token ? (
          <ul className="navbar-options">
            <li className="navbar-home">
              <Link to="/">Home</Link>
            </li>

            <li className="navbar-profile">
              <Link to="/profile">Profile</Link>
            </li>

            <li className="navbar-create">
              <Link to="/create">Create</Link>
            </li>

            <li className="navbar-blogs">
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        ) : (
          <ul className="navbar-options">
            <li className="navbar-home">
              <Link to="/">Home</Link>
            </li>

            <li className="navbar-login">
              <Link to="/login">Login</Link>
            </li>

            <li className="navbar-signup">
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
