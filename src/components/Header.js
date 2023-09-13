import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <Link to="/">
            <img
              src="assets/img/Logo_crop.png"
              alt="Driftmark Technology Logo"
              class="fas fa-2x"
            />
          </Link>
        </h1>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link
                className={`nav-link scrollto ${isActive("/about")}`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link scrollto ${isActive("/services")}`}
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link scrollto ${isActive("/team")}`}
                to="/team"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link scrollto ${isActive("/career")}`}
                to="/career"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link scrollto ${isActive("/contact")}`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
