import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const [showOffCanvas, setShowOffCanvas] = React.useState(false);

  const closeOffCanvas = () => {
    setShowOffCanvas(false);
  };

  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <Link to="/">
              <img
                src="assets/img/logo.png"
                alt="Driftmark Technology"
                className="fas fa-2x"
              />
            </Link>
          </h1>
          <nav id="navbar" className="navbar d-none d-lg-block">
            {" "}
            {/* Hide this on mobile */}
            <ul>
              <li>
                <Link
                  className={`nav-link scrollto ${isActive("/technologies")}`}
                  to="/technologies"
                >
                  Technologies
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
          </nav>

          <i
            className="bi bi-list mobile-nav-toggle d-lg-none"
            onClick={() => setShowOffCanvas(!showOffCanvas)}
          ></i>
        </div>
      </header>

      <div
        className={`offcanvas offcanvas-start ${showOffCanvas ? "show" : ""}`}
        style={{ width: "75vw" }}
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
        <span><img src="assets/img/logo.png" style={{ width: "40px", height: "auto" }} alt="" className="img-fluid animated"/></span>
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Driftmark
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={closeOffCanvas}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group">
            <li className={`list-group-item ${isActive("/")}`}>
              <Link
                className="nav-link scrollto"
                to="/"
                onClick={closeOffCanvas}
              >
                Home
              </Link>
            </li>
            <li className={`list-group-item ${isActive("/technologies")}`}>
              <Link
                className="nav-link scrollto"
                to="/technologies"
                onClick={closeOffCanvas}
              >
                Technologies
              </Link>
            </li>
            <li className={`list-group-item ${isActive("/services")}`}>
              <Link
                className="nav-link scrollto"
                to="/services"
                onClick={closeOffCanvas}
              >
                Services
              </Link>
            </li>
            <li className={`list-group-item ${isActive("/team")}`}>
              <Link
                className="nav-link scrollto"
                to="/team"
                onClick={closeOffCanvas}
              >
                Team
              </Link>
            </li>
            <li className={`list-group-item ${isActive("/career")}`}>
              <Link
                className="nav-link scrollto"
                to="/career"
                onClick={closeOffCanvas}
              >
                Career
              </Link>
            </li>
            <li className={`list-group-item ${isActive("/contact")}`}>
              <Link
                className="nav-link scrollto"
                to="/contact"
                onClick={closeOffCanvas}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
