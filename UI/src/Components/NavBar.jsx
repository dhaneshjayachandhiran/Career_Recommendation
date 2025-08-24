import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Navbar() {

  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://imgs.search.brave.com/6SmqMH7CrZFBD6jWHNdO0YDQWfddOFttbqukE4-PCSk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5nbG9nby5jb20v/aW1hZ2VzLzE3MDE1/MjcxMDRia2FzaC1s/b2dvLXBuZy5wbmc"
          alt="Logo"
          className="logo"
        />
        <span className="app-name">CareerPath</span>
      </div>
      <div className="navbar-right">
  <NavLink className="nav-link" to="/">Home</NavLink>
  <a
    className="nav-link"
    href="https://akashh0.github.io/My-Portfolio/"
    target="_blank"
    rel="noopener noreferrer"
  >
    About
  </a>
</div>
    </nav>
  );
}

export default Navbar;
