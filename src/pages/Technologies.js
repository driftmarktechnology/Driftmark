import React from "react";
import Sectionheader from "../components/Sectionheader";

function Technologies() {
  return (
    <>
      <section id="technologies-section" className="contact">
        <div className="container">
          <Sectionheader
            title={"Technologies"}
            subtitle={"Fueling Progress with Cutting-Edge Technologies"}
          />
          <div className="section-title">
            <section>
              <h3>Backend Architecture</h3>
              <div class="row">
                <div class="col-lg-6">
                  <br />
                  <img
                    alt=""
                    src="/assets/img/technologies/icons-backend.png"
                    class="img-fluid animated"
                  />
                </div>
                <div class="col-lg-6">
                  <br />
                  <p>
                    Our backend engineering encompasses a diverse array of
                    programming languages, including JVM, .NET, NodeJS, and
                    Python. These languages form the foundation for crafting
                    scalable, microservices-based backend platforms.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h3>Frontend Architecture</h3>
              <div class="row">
                <div class="col-lg-6">
                  <br />
                  <p>
                    The combination of JavaScript and HTML5 has brought about a
                    revolutionary transformation in the development of web and
                    mobile applications. We excel in implementing a diverse
                    range of JavaScript frameworks, leveraging their power to
                    the fullest extent.
                  </p>
                </div>
                <div class="col-lg-6">
                  <br />
                  <img
                    alt=""
                    src="/assets/img/technologies/icons-frontend.png"
                    class="img-fluid animated"
                  />
                </div>
              </div>
            </section>
            <section>
              <h3>Frameworks Architecture</h3>
              <div class="row">
                <div class="col-lg-6">
                  <br />
                  <img
                    alt=""
                    src="/assets/img/technologies/icons-framwork.png"
                    class="img-fluid animated"
                  />
                </div>
                <div class="col-lg-6">
                  <br />
                  <p>
                    Our extensive expertise lies in harnessing a broad spectrum
                    of frameworks, facilitating accelerated development and
                    streamlined maintenance processes.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h3>Data Storage Solutions</h3>
              <div class="row">
                <div class="col-lg-6">
                  <br />
                  <p>
                    Embracing the belief that there's no universal solution for
                    all, we employ various storage technologies to construct
                    high-performance, secure, and internet-scale applications.
                  </p>
                </div>
                <div class="col-lg-6">
                  <br />
                  <img
                    alt=""
                    src="/assets/img/technologies/icon-databases.png"
                    class="img-fluid animated"
                  />
                </div>
              </div>
            </section>
            <section>
              <h3>Quality Checks</h3>
              <div class="row">
                <div class="col-lg-6">
                  <br />
                  <img
                    alt=""
                    src="/assets/img/technologies/icon-quality-checks.png"
                    class="img-fluid animated"
                  />
                </div>
                <div class="col-lg-6">
                  <br />
                  <p>
                    Leveraging automation and agile methodologies, we aid in the
                    transition from Quality Assurance to Quality Engineering,
                    fostering a transformative process.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h3>RPA (Robotic Process Automation)</h3>
              <div class="row">
                <div class="col-lg-6">
                  <br />
                  <p>
                    Streamlining enterprise operations and cutting costs is
                    achieved through the automation of both front and back
                    office business processes.
                  </p>
                </div>
                <div class="col-lg-6">
                  <br />
                  <img
                    alt=""
                    src="/assets/img/technologies/icons-robotics.png"
                    class="img-fluid animated"
                  />
                </div>
              </div>
            </section>
            <section>
              <h3>Hybrid Technologies</h3>
              <div class="row">
                <div class="col-lg-6">
                  <br />
                  <img
                    alt=""
                    src="/assets/img/technologies/icons-hybrid-mobile.png"
                    class="img-fluid animated"
                  />
                </div>
                <div class="col-lg-6">
                  <br />
                  <p>
                    Our expertise lies in the development of immersive
                    applications for mobile, tablets, and connected devices,
                    using a combination of native and hybrid technologies.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h3>Cloud Support</h3>
              <div class="row">
                <div class="col-lg-6">
                  <br />
                  <p>
                    Drawing upon our extensive expertise across all major Public
                    Clouds, as well as hybrid and multi-cloud environments, we
                    offer invaluable support to our clients in devising
                    effective cloud strategies, executing seamless migrations,
                    and implementing ongoing DevOps automation.
                  </p>
                </div>
                <div class="col-lg-6">
                  <br />
                  <img
                    alt=""
                    src="/assets/img/technologies/icons-cloud-techs.png"
                    class="img-fluid animated"
                  />
                </div>
              </div>
            </section>
            <section>
              <h3>Data Insights</h3>
              <div class="row">
                <div class="col-lg-6">
                  <br />
                  <img
                    alt=""
                    src="/assets/img/technologies/icon-data-insights.png"
                    class="img-fluid animated"
                  />
                </div>
                <div class="col-lg-6">
                  <br />
                  <p>
                    Our comprehensive Data & Analytics services provide
                    customers with a complete solution to harness the potential
                    of data, enabling them to unlock valuable and actionable
                    business insights
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h3>Digital Commerce Platforms</h3>
              <div class="row">
                <div class="col-lg-6">
                  <br />
                  <p>
                    We specialize in designing, developing, integrating,
                    implementing, and maintaining e-commerce platforms, all
                    geared towards delivering a seamless end-customer
                    experience.
                  </p>
                </div>
                <div class="col-lg-6">
                  <br />
                  <img
                    alt=""
                    src="/assets/img/technologies/icon-ecommerce.png"
                    class="img-fluid animated"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Technologies;
