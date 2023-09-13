import React from "react";
import { Link } from "react-router-dom";

function Sitemap() {
  return (
    <section id="team" class="team section-bg">
      <div class="container">
        <div class="section-title">
          <span>Sitemap</span>
          <h2>Sitemap</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">About us</Link>
              </li>
              <li>
                <Link to="#">Services</Link>
              </li>
              <li>
                <Link to="#">Career</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <Link to="#">Web Design</Link>
              </li>
              <li>
                <Link to="#">Web Development</Link>
              </li>
              <li>
                <Link to="#">Product Management</Link>
              </li>
              <li>
                <Link to="#">Marketing</Link>
              </li>
              <li>
                <Link to="#">Graphic Design</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sitemap;
