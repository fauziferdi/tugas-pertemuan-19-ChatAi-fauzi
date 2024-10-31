import React from "react";

export default function Navbar({ onLogout }) {
  return (
    <nav className="navbar bg-primary border-bottom shadow">
      <div className="container">
        <a className="navbar-brand text-white fw-bold m-0" href="#">
          <i className="bi bi-robot"></i> LumoshiveAI
        </a>
        <button className="btn btn-danger" onClick={onLogout}>
          <i className="bi bi-box-arrow-right me-2"></i> Logout
        </button>
      </div>
    </nav>
  );
}
