import React from "react";

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
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
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
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
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
                <a href="#" class="twitter">
                  <i class="bx bxl-twitter"></i>
                </a>
                <a href="#" class="instagram">
                  <i class="bx bxl-instagram"></i>
                </a>
                <a href="#" class="google-plus">
                  <i class="bx bxl-skype"></i>
                </a>
                <a href="#" class="linkedin">
                  <i class="bx bxl-linkedin"></i>
                </a>
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
