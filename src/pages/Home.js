import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Accordion from "../components/Accordion";
import { v4 as uuidv4 } from 'uuid';
import { trackEvent, identifyUser } from '../utils/mixpanelUtil';

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
  }, []);



  return (
    <div className="home-page">
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 className="mb-4 ms-1 mt-lg-5">
                Shift your business into the digital realm
              </h1>
              <h6 className="mb-4 ms-1">
                We help businesses adapt for the digital age, ensuring safe tech
                use and easy customer access to online services.
              </h6>
              <div className="d-flex ms-1">
                <Link to="#about" className="btn-get-started scrollto">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img text-end">
              <img
                src="assets/img/banner.gif"
                className="img-fluid animated text-end"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="featured-services" className="featured-services">
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
                />
              </div>
              <div className="col-lg-6 pe-2 pt-4 pt-lg-0 content">
                <h3>About Driftmark Technology</h3>
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

        <section id="testimonials" className="testimonials section-bg">
          <div className="container">
            <div className="section-title">
              <span>Testimonials</span>
              <h2>Testimonials</h2>
            </div>

            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false}>
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
                  <h2>Let us bring your product to life</h2>
                  <p class="text">
                    We work with all types of budgets. We love to work on
                    interesting projects and delivering high quality products
                    for both startups and enterprise clients. Let’s talk and see
                    what amazing products we can build together!
                  </p>
                  <div class="btn-holder">
                    <span>LAUNCH A PROJECT</span>
                  </div>
                </header>
              </div>
              <div className="col-lg-6">
                <figure class="img-holder text-end">
                  <img
                    className="img-fluid"
                    src="assets/img/rocket-launch.svg"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-title">
              <span>FAQ</span>
              <h2>FAQ</h2>
            </div>
            <Accordion />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
