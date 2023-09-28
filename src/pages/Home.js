import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Accordion from "../components/Accordion";
import { v4 as uuidv4 } from "uuid";
import { trackEvent, identifyUser } from "../utils/mixpanelUtil";
import Sectionheader from "../components/Sectionheader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faUsers,
  faFileAlt,
  faShoppingCart,
  faUserTie,
  faMobile,
  faCloud,
  faChartBar,
  faShieldAlt,
  faMoneyBill,
  faCubes,
  faClinicMedical,
  faGraduationCap,
  faGamepad,
  faBrain,
  faLink,
  faMicrochip,
  faServer,
  faCloudDownloadAlt,
  faHdd,
} from "@fortawesome/free-solid-svg-icons";


function Home() {
  function getUniqueUserId() {
    let userId = localStorage.getItem("userId");
    if (!userId) {
      userId = generateUUID();
      localStorage.setItem("userId", userId);
    }
    return userId;
  }

  function generateUUID() {
    return uuidv4();
  }

  useEffect(() => {
    const uniqueUserId = getUniqueUserId();

    identifyUser(uniqueUserId);
    trackEvent("Team Page Visited");
  /* eslint-disable */
}, []);
/* eslint-enable */

  return (
    <div className="home-page">
      <section id="hero" className="d-flex mb-4 mt-5 align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 className="mb-4 ms-1 mt-lg-5">
                Shift your <p className="theme-color-word">business</p> into the <p className="theme-color-word">digital</p> realm
              </h1>
              <h6 className="mb-4 ms-1">
                We help businesses adapt for the digital age, ensuring safe tech
                use and easy customer access to online services.
              </h6>
              <div className="d-flex ms-1">
                <Link to="/contact" className="btn-get-started scrollto">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img text-end text-center">
              <img
                src="assets/img/banner.gif"
                className="img-fluid animated text-end"
                alt=""
                style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="featured-services" className="featured-services mb-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="icon-box ms-1">
                  <div className="icon">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <h4 className="title">
                    <Link to="">Managed Products</Link>
                  </h4>
                  <p className="description">
                    Web and mobile apps, MVPs. Small, medium and large projects.
                    Fixed scope or agile development.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-card-checklist"></i>
                  </div>
                  <h4 className="title">
                    <Link to="">Dedicated Teams</Link>
                  </h4>
                  <p className="description">
                    Long-term development. Direct collaboration or managed teams
                    of different sizes and expertise.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-clipboard-data"></i>
                  </div>
                  <h4 className="title">
                    <Link to="">On-Demand Services</Link>
                  </h4>
                  <p className="description">
                    Hourly and monthly based professional support for your
                    business. Everything you need to grow fast.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src="assets/img/about_new.jpeg"
                  className="img-fluid"
                  alt=""
                  style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
                />
              </div>
              <div className="col-lg-6 pe-2 pt-4 pt-lg-0 content">
                <h3>About <p className="theme-color-word">Driftmark Technology</p></h3>
                <p className="fst-italic">
                  Our team of full-stack developers and agile professionals
                  specialize in rapidly delivering web, mobile, and software
                  applications. We are not just grounded in current technologies
                  like Hadoop, Cloud Computing, and BigData analytics, but we
                  are also pioneering in the emerging realm of analytics. We are
                  keenly focused on the predictive side of analytics, offering
                  unprecedented insights to our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="solution mb-4">
          <div class="container">
            <Sectionheader title={"Solutions"} />
            <div class="section-title">
              <div class="row">
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faCogs} />
                    </h1>
                    <h6>Enterprise Resource Planning (ERP)</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faUsers} />
                    </h1>
                    <h6>Customer Relationship Management (CRM)</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faFileAlt} />
                    </h1>
                    <h6>Content Management System (CMS)</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </h1>
                    <h6>E-commerce Platforms</h6>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faUserTie} />
                    </h1>
                    <h6>Human Resources Management System (HRMS)</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faMobile} />
                    </h1>
                    <h6>Mobile Applications</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faCloud} />
                    </h1>
                    <h6>Cloud Solutions</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faChartBar} />
                    </h1>
                    <h6>Business Intelligence (BI) & Analytics</h6>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faShieldAlt} />
                    </h1>
                    <h6>Cybersecurity Solutions</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faMoneyBill} />
                    </h1>
                    <h6>Financial Software</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faCubes} />
                    </h1>
                    <h6>Supply Chain Management Software</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faClinicMedical} />
                    </h1>
                    <h6>Healthcare Solutions</h6>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faGraduationCap} />
                    </h1>
                    <h6>Education & E-Learning Platforms</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faGamepad} />
                    </h1>
                    <h6>Gaming Software</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faBrain} />
                    </h1>
                    <h6>Artificial Intelligence & Machine Learning</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faLink} />
                    </h1>
                    <h6>Blockchain Solutions</h6>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faMicrochip} />
                    </h1>
                    <h6>IoT Solutions</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faServer} />
                    </h1>
                    <h6>Software as a Service (SaaS)</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faCloudDownloadAlt} />
                    </h1>
                    <h6>Platform as a Service (PaaS)</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="solution-input mb-3 pb-3">
                    <h1 className="solution-icon">
                      <FontAwesomeIcon icon={faHdd} />
                    </h1>
                    <h6>Infrastructure as a Service (IaaS)</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials mb-4 section-bg">
          <div className="container">
            <div className="section-title">
              <span>Testimonials</span>
              <h2>Testimonials</h2>
            </div>

            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={false}>
              <div>
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Driftmark and I have a deep-rooted professional bond, and
                    I'm delighted to express that together we've savored the
                    taste of success. The team of specialists at Driftmark has
                    consistently pursued excellence, regardless of the
                    challenges they faced. Their innovative mindset and
                    unwavering dedication ensure a stable and efficient
                    workflow. At first, I felt their pricing was on the higher
                    side, but seeing the exceptional quality they delivered, I
                    found the value justified the cost.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>

                  <h3>Kit</h3>
                  <h4>Web Designer</h4>
                </div>
              </div>
              <div>
                <div className="testimonial-item mx-0">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Driftmark and I have a deep-rooted professional bond, and
                    I'm delighted to express that together we've savored the
                    taste of success. The team of specialists at Driftmark has
                    consistently pursued excellence, regardless of the
                    challenges they faced. Their innovative mindset and
                    unwavering dedication ensure a stable and efficient
                    workflow. At first, I felt their pricing was on the higher
                    side, but seeing the exceptional quality they delivered, I
                    found the value justified the cost.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>

                  <h3>Saul Goodman</h3>
                  <h4>Devops</h4>
                </div>
              </div>
            </Carousel>
          </div>
        </section>
        <section class="cta section section-bg gradient--dark">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 text-start">
                <header class="section-header section-header__light">
                  <h2><span style={{color:"#fff"}}>Let us bring your product to life</span></h2>
                  <p class="text">
                    We work with all types of budgets. We love to work on
                    interesting projects and delivering high quality products
                    for both startups and enterprise clients. Let’s talk and see
                    what amazing products we can build together!
                  </p>
                  <div className="d-flex ms-1">
                    <Link to="/contact" className="btn-launch-proj scrollto">
                      LAUNCH A PROJECT
                    </Link>
                  </div>
                  {/* <div class="btn-holder">
                    <span>LAUNCH A PROJECT</span>
                  </div> */}
                </header>
              </div>
              <div className="col-lg-6">
                <div className="d-flex justify-content-center">
                  <img
                    src="assets/img/rocket-launch.png"
                    className="img-fluid animated mt-4"
                    alt=""
                    style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
                  />
                </div>
                {/* <figure class="img-holder text-end">
                  <img
                    className="img-fluid"
                    src="assets/img/rocket-launch.png"
                    alt=""
                  />
                </figure> */}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="">
          <Sectionheader title={"FAQ"} />
          <div className="container">
          <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <img
                  src="assets/img/faq1.png"
                  className="img-fluid "
                  alt=""
                
                />
              </div>
              <div className="col-lg-8 pe-2 pt-4 pt-lg-0 content">
                <Accordion />
              </div>
            </div>
          </div>
          </div>
          
        </section>

  
      </main>
    </div>
  );
}

export default Home;
