import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <div>
                <img
                  src="assets/img/Footer_image2.png"
                  alt=""
                  className="img-fluid"
                  style={{ width: "90%" }}
                />
              </div>
              <p>
                Kadirimangalam <br />
                Tirupathur, Tamil Nadu 635653
                <br />
                India <br />
                <strong>Phone:</strong> +91 6381475573
                <br />
                <strong>Email:</strong> contact@driftmarktechnology.com
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/career">Career</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <Link to="/web-design">Web Design</Link>
                </li>
                <li>
                  <Link to="/web-development">Web Development</Link>
                </li>
                <li>
                  <Link to="/testing-qa">Testing & QA</Link>
                </li>
                <li>
                  <Link to="/marketing">Marketing</Link>
                </li>
                <li>
                  <Link to="/graphic-design">Graphic Design</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>
                Follow us, like our content, and join our community on these
                platforms:
              </p>
              <div className="social-links mt-3">
                <Link
                  to="https://twitter.com/DriftmarkTech"
                  className="twitter"
                  target="_blank"
                >
                  <i className="bx bxl-twitter"></i>
                </Link>
                <Link
                  to="https://www.instagram.com/driftmarktechnology/"
                  className="instagram"
                  target="_blank"
                >
                  <i className="bx bxl-instagram"></i>
                </Link>
                <Link to="#" className="google-plus" target="_blank">
                  <i className="bx bxl-skype"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/company/driftmark-technology/"
                  className="linkedin"
                  target="_blank"
                >
                  <i className="bx bxl-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom clearfix">
        <div className="container copyright-section pt-2 d-flex justify-content-between flex-wrap">
          <p className="copyright">
            © Copyright {currentYear}
            <strong>
              <span> Driftmark</span>
            </strong>
            <span> All rights reserved.</span>
          </p>
          <p className="copyright">
            <Link to="/privacy-policy">Privacy Policy </Link>
            <span> | </span>
            <Link to="/terms">Terms of Use </Link>
            <span> | </span>
            <Link to="sitemap">Site Map</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
