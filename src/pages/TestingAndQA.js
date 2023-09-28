import React from "react";
import Sectionheader from "../components/Sectionheader"


function Services() {
  return (
    <section id="services" class="services mt-5 section-bg">
      <div class="container">
      <Sectionheader
            title={"Testing & QA"}
            subtitle={"Precision in Quality Assurance: Crafting Bespoke Solutions for Your Success"}
          />
        <div class="section-title">
          <div className="contents mt-4 mb-5">
            <h3><p className="theme-color-word">Automation</p> Testing</h3>

            <div class="row">
              <div class="col-lg-6">
                <img
                  src="assets/img/testing/testing-1.png"
                  class="img-fluid animated"
                  alt=""
                />
              </div>
              <div class="col-lg-6">
                <p>
                  <br />
                  <br />
                  Automation testing service is a software testing approach that
                  uses automated scripts and tools to perform tests on software
                  applications. This service involves creating test scripts that
                  can simulate user interactions with the software, such as
                  clicking buttons, entering data, and navigating through the
                  application. These scripts are then executed by automation
                  testing tools to verify that the software behaves as expected.
                </p>
              </div>
            </div>
          </div>
          <div className="contents mt-4 mb-5">
            <h3>Manual <p className="theme-color-word">Testing</p></h3>
            <div class="row">
              <div class="col-lg-6">
                <p>
                  <br />
                  <br />
                  Manual testing is a software testing approach in which human
                  testers interact with a software application to identify
                  defects, evaluate its functionality, and ensure it meets
                  specified requirements. Unlike automated testing, manual
                  testing does not involve the use of automated scripts or
                  testing tools to perform test cases. Instead, human testers
                  follow test plans and execute test scenarios by hand,
                  simulating user interactions with the software.
                </p>
              </div>
              <div class="col-lg-6">
                <img
                  src="assets/img/testing/testing-2.png"
                  class="img-fluid animated"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="contents mt-4 mb-5">
            <h3><p className="theme-color-word">API</p> Testing</h3>
            <div class="row">
              <div class="col-lg-6">
                <img
                  src="assets/img/testing/testing-3.png"
                  class="img-fluid animated"
                  alt=""
                />
              </div>
              <div class="col-lg-6">
                <p>
                  <br />
                  API testing, or Application Programming Interface testing, is
                  a type of software testing that focuses on evaluating the
                  functionality, performance, security, and reliability of APIs
                  (Application Programming Interfaces). APIs are sets of rules
                  and protocols that allow different software applications to
                  communicate and interact with each other.
                </p>
              </div>
            </div>
          </div>
          <div className="contents mt-4 mb-5">
            <h3>Mobile <p className="theme-color-word">Testing</p></h3>
            <div class="row">
              <div class="col-lg-6">
                <p>
                  <br />
                  <br />
                  <br />
                  Mobile testing is a software testing process specifically
                  designed to evaluate the functionality, performance,
                  usability, and compatibility of mobile applications (apps)
                  across various devices and platforms. It aims to ensure that
                  mobile apps function correctly, provide a seamless user
                  experience, and meet the intended requirements and quality
                  standards.
                </p>
              </div>
              <div class="col-lg-6">
                <img
                  src="assets/img/testing/testing-4.jpg"
                  class="img-fluid animated"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="contents mt-4 mb-5">
            <h3><p className="theme-color-word">Security </p>Testing</h3>
            <div class="row">
              <div class="col-lg-6">
                <img
                  src="assets/img/testing/testing-5.png"
                  class="img-fluid animated"
                  alt=""
                />
              </div>
              <div class="col-lg-6">
                <p>
                  <br />
                  <br />
                  <br />
                  Security testing is a comprehensive and systematic evaluation
                  of a software application's security features and measures to
                  identify vulnerabilities, weaknesses, and potential threats.
                  The primary goal of security testing is to assess the
                  application's ability to protect data, maintain
                  confidentiality, ensure integrity, and prevent unauthorized
                  access and attacks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
