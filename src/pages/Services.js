import React, { useEffect } from "react";
import Sectionheader from "../components/Sectionheader";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { trackEvent, identifyUser } from "../utils/mixpanelUtil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faUsers,
  faGraduationCap,
  faClock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Services() {
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
    trackEvent("Services Page Visited");
    /* eslint-disable */
  }, []);
  /* eslint-enable */

  return (
    <section id="services" className="services mt-5 section-bg">
      <div className="container">
        <Sectionheader
          title={"Services"}
          subtitle={"Turning Ideas into Digital Reality"}
        />
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-dribbble"></i>
              </div>
              <h4 className="services-choose-sub">
                Web and Mobile App Development
              </h4>
              <p>
                We build custom web and mobile applications that align with your
                specific needs. Our team utilizes cutting-edge technologies to
                create user-friendly and secure applications that drive your
                business goals.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-file"></i>
              </div>
              <h4 className="services-choose-sub">App Modernization</h4>
              <p>
                ConcertIDC can upgrade and modernize your existing applications
                to enhance performance, security, and usability. We leverage the
                latest technologies to revitalize your applications and optimize
                their value.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-tachometer"></i>
              </div>
              <h4 className="services-choose-sub">Transformation to Cloud</h4>
              <p>
                We will help you efficiently and securely migrate your
                applications or data centers to the cloud to optimize existing
                infrastructure, preserve functionality, and reduce costs. Our
                deep knowledge of the various cloud providers allows us to
                select the most suitable solution for your needs.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-world"></i>
              </div>
              <h4 className="services-choose-sub">Intelligent Automation</h4>
              <p>
                Automate complex, repetitive, and mundane tasks using Robotic
                Process Automation (RPA) and AI tools. We'll help you liberate
                your workforce to focus on strategic initiatives, improving
                overall productivity.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-slideshow"></i>
              </div>
              <h4 className="services-choose-sub">Integration Solutions</h4>
              <p>
                We seamlessly integrate your applications and systems to achieve
                an effortless workflow. Our processes enhance efficiency, reduce
                errors, and unlock the full potential of your technology
                ecosystem.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-arch"></i>
              </div>
              <h4 className="services-choose-sub">Staff Augmentation</h4>
              <p>
                We can help you expand your team to fill gaps in your IT
                workforce. We provide tech talent globally and enable you with
                adept technical resources to satisfy your needs. By outsourcing
                to us, you cut costs, shorten timeframes, and save resources to
                execute better software development projects.
              </p>
            </div>
          </div>
        </div>
        <section className="services-choose">
          <div className="container">
            <Sectionheader
              title={"Why Driftmark"}
              subtitle={
                "We leverage our software experts to build powerful digital solutions that bring about meaningful change through strategic vision"
              }
            />
            <div className="">
              <div className="row">
                <div className="col-md-2 d-flex align-items-stretch">
                  <div className="services-choose-sub mb-3 pb-3">
                    <h3 className="services-choose-icon">
                      <FontAwesomeIcon icon={faGlobe} />
                    </h3>
                    <h6>Comprehensive approach</h6>
                  </div>
                </div>
                <div className="col-md-2 d-flex align-items-stretch">
                  <div className="services-choose-sub mb-3 pb-3">
                    <h3 className="services-choose-icon">
                      <FontAwesomeIcon icon={faUsers} />
                    </h3>
                    <h6>Client Priority</h6>
                  </div>
                </div>
                <div className="col-md-2 d-flex align-items-stretch">
                  <div className="services-choose-sub mb-3 pb-3">
                    <h3 className="services-choose-icon">
                      <FontAwesomeIcon icon={faGraduationCap} />
                    </h3>
                    <h6>Field Mastery</h6>
                  </div>
                </div>
                <div className="col-md-2 d-flex align-items-stretch">
                  <div className="services-choose-sub mb-3 pb-3">
                    <h3 className="services-choose-icon">
                      <FontAwesomeIcon icon={faClock} />
                    </h3>
                    <h6>Time Optimization</h6>
                  </div>
                </div>
                <div className="col-md-2 d-flex align-items-stretch">
                  <div className="services-choose-sub mb-3 pb-3">
                    <h3 className="services-choose-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </h3>
                    <h6>An exceptional team</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <article className="services-cta section section-bg">
            <div className="section-header text-center">
              <h2 className="section-title">
                Let us help you <p className="theme-color-word">launch</p> your
                project
              </h2>
            </div>
            <figure className="img-holder text-center">
              <LazyLoadImage
                src={"assets/img/rocket-pulse.svg"}
                alt=""
                effect="blur"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              />
              <figcaption>
                <br />
                <Link
                  to="/contact"
                  className="services-btn-launch-proj scrollto"
                >
                  LAUNCH A PROJECT
                </Link>
              </figcaption>
            </figure>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Services;
