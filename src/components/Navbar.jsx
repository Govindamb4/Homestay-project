import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";

export default function Navbar() {
  const active = ({ isActive }) => isActive ? "nav-link text-info" : "nav-link";
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Homestay Explorer</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink className={active} to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className={active} to="/roles">Roles</NavLink></li>
            <li className="nav-item"><NavLink className={active} to="/search">Search</NavLink></li>
            <li className="nav-item"><NavLink className={active} to="/attractions">Attractions</NavLink></li>
            <li className="nav-item"><NavLink className={active} to="/map">Map</NavLink></li>
            <li className="nav-item"><NavLink className={active} to="/login">Login</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
