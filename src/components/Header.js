import React from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <a href="/"><img src="assets/img/Logo_crop.png" alt="Driftmark Technology Logo" class="fas fa-2x"/></a>
        </h1>
        {/* <a href="/" className="logo">
          <img src="assets/img/logo.png" alt="" className="img-fluid" />
        </a> */}

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a
                className={`nav-link scrollto ${isActive("/about")}`}
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${isActive("/services")}`}
                href="/services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${isActive("/team")}`}
                href="/team"
              >
                Team
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${isActive("/career")}`}
                href="/career"
              >
                Career
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${isActive("/contact")}`}
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
