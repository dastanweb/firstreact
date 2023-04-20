import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">About</li>
          <li className="navbar-item">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
