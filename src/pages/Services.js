import React, {useEffect} from "react";
import Sectionheader from "../components/Sectionheader"
import { v4 as uuidv4 } from 'uuid';
import { trackEvent, identifyUser } from '../utils/mixpanelUtil';


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
  }, []);


  return (
    <section id="services" class="services section-bg">
      <div class="container">
      <Sectionheader
            title={"Services"}
            subtitle={"Turning Ideas into Digital Reality"}
          />
        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="icon">
                <i class="bx bxl-dribbble"></i>
              </div>
              <h4>
                <a href="">Web and Mobile App Development</a>
              </h4>
              <p>
                We build custom web and mobile applications that align with your
                specific needs. Our team utilizes cutting-edge technologies to
                create user-friendly and secure applications that drive your
                business goals.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="icon-box">
              <div class="icon">
                <i class="bx bx-file"></i>
              </div>
              <h4>
                <a href="">App Modernization</a>
              </h4>
              <p>
                ConcertIDC can upgrade and modernize your existing applications
                to enhance performance, security, and usability. We leverage the
                latest technologies to revitalize your applications and optimize
                their value.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="icon">
                <i class="bx bx-tachometer"></i>
              </div>
              <h4>
                <a href="">Transformation to Cloud</a>
              </h4>
              <p>
                We will help you efficiently and securely migrate your
                applications or data centers to the cloud to optimize existing
                infrastructure, preserve functionality, and reduce costs. Our
                deep knowledge of the various cloud providers allows us to
                select the most suitable solution for your needs.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon">
                <i class="bx bx-world"></i>
              </div>
              <h4>
                <a href="">Intelligent Automation</a>
              </h4>
              <p>
                Automate complex, repetitive, and mundane tasks using Robotic
                Process Automation (RPA) and AI tools. We'll help you liberate
                your workforce to focus on strategic initiatives, improving
                overall productivity.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon">
                <i class="bx bx-slideshow"></i>
              </div>
              <h4>
                <a href="">Integration Solutions</a>
              </h4>
              <p>
                We seamlessly integrate your applications and systems to achieve
                an effortless workflow. Our processes enhance efficiency, reduce
                errors, and unlock the full potential of your technology
                ecosystem.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon">
                <i class="bx bx-arch"></i>
              </div>
              <h4>
                <a href="">Staff Augmentation</a>
              </h4>
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
        <article class="services-cta section section-bg">
          <div class="section-header text-center">
            <h2 class="section-title">Let us help you launch your project</h2>
          </div>
          <figure class="img-holder text-center">
            <img src="assets/img/rocket-pulse.svg" />
            <figcaption>LAUNCH A PROJECT</figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}

export default Services;
