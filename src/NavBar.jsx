import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Pixifyy</h1>
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Log Out
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
