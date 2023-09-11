import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <h3>Driftmark</h3>
              <p>
                A108 Adam Street <br />
                New York, NY 535022
                <br />
                United States <br />
                <strong>Phone:</strong> +91 6381 475 573
                <br />
                <strong>Email:</strong> contact@driftmarktechnology.com
                <br />
              </p>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div class="social-links mt-3">
                <Link to="https://twitter.com/DriftmarkTech" class="twitter" target="_blank">
                <i class="bx bxl-twitter"></i>
                </Link>
                <Link to="https://www.instagram.com/driftmarktechnology/" class="instagram" target="_blank">
                <i class="bx bxl-instagram"></i>
                </Link>
                <Link to="#" class="google-plus" target="_blank">
                <i class="bx bxl-skype"></i>
                </Link>
                <Link to="https://www.linkedin.com/company/driftmark-technology/" class="linkedin" target="_blank">
                <i class="bx bxl-linkedin"></i>
                </Link>
                {/* <a href="https://twitter.com/DriftmarkTech" class="twitter">
                  <i class="bx bxl-twitter"></i>
                </a>
                <a href="https://www.instagram.com/driftmarktechnology/" class="instagram">
                  <i class="bx bxl-instagram"></i>
                </a>
                <a href="#" class="google-plus">
                  <i class="bx bxl-skype"></i>
                </a>
                <a href="https://www.linkedin.com/company/driftmark-technology/" class="linkedin">
                  <i class="bx bxl-linkedin"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container footer-bottom clearfix">
        <div class="container copyright-section pt-2 d-flex justify-content-between flex-wrap">
          <p class="copyright">
            © Copyright {currentYear}
            <strong>
              <span> Driftmark</span>
            </strong>
            <span> All rights reserved.</span>
          </p>
          <p class="copyright">
            <a href="legal/privacy-policy">Privacy Policy </a>
            <span> | </span>
            <a href="legal/terms-of-use">Terms of Use </a>
            <span> | </span>
            <a href="sitemap">Site Map</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
