import React from "react";
import Sectionheader from "../components/Sectionheader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function WebDevelopment() {
  return (
    <section id="services" className="services mt-5 section-bg">
      <div className="container">
        <Sectionheader
          title={"Web Development"}
          subtitle={"Empowering Your Digital Success"}
        />
        <div>
          <div className="contents mt-4 mb-5">
            <h3 className="section-title">
              Identifying <p className="theme-color-word">Goals</p>
            </h3>

            <div className="row">
              <div className="col-lg-6">
                <LazyLoadImage
                  alt=""
                  src="/assets/img/web-development/web-development-1.png"
                  effect="blur"
                  className="img-fluid animated"
                />
              </div>
              <div className="col-lg-6">
                <p>
                  <br />
                  <br />
                  In the realm of technology development projects, discovery
                  stands as the foundational phase, and web development follows
                  a similar pattern. Within this initial stage, we engage in
                  requirements gathering, conduct thorough market research,
                  define the project's scope, identify the necessary resources,
                  and gain a comprehensive understanding of your business.
                  Furthermore, we set clear goals and objectives, meticulously
                  crafting a plan to ensure their realization.
                </p>
                <br />
                <p>
                  The significance of the discovery phase lies in its ability to
                  enhance comprehension of your needs, mitigating potential
                  confusion in the future. It serves as the cornerstone for a
                  triumphant project, harmonizing business aspirations with
                  technical prerequisites and objectives. Ultimately, this phase
                  refines your vision and positions us to aid you in its
                  achievement.
                </p>
              </div>
            </div>
          </div>
          <div className="contents mt-4 mb-5">
            <h3 className="section-title">
              <p className="theme-color-word">Development</p>
            </h3>
            <div className="row">
              <div className="col-lg-6">
                <p>
                  <br />
                  <br />
                  During the development phase, our front-end developers,
                  back-end developers, and other team members will work together
                  to build your website or web application based on your vision
                  and the roadmap we have outlined. We will create the product
                  according to your requirements and objectives and keep you
                  fully informed about our progress along the way. In addition
                  to coding, our development team will perform important actions
                  like unit testing to ensure the quality of your end product.
                </p>
              </div>
              <div className="col-lg-6">
                <LazyLoadImage
                  alt=""
                  src="/assets/img/web-development/web-development-2.png"
                  effect="blur"
                  className="img-fluid animated"
                />
              </div>
            </div>
          </div>
          <div className="contents mt-4 mb-5">
            <h3 className="section-title">
              <p className="theme-color-word">Designing</p> Your Website
            </h3>
            <div className="row">
              <div className="col-lg-6">
                <LazyLoadImage
                  alt=""
                  src="/assets/img/web-development/web-development-3.png"
                  effect="blur"
                  className="img-fluid animated"
                />
                {/* <img
                  src="assets/img/web-development/web-development-3.png"
                  className="img-fluid animated"
                  alt=""
                /> */}
              </div>
              <div className="col-lg-6">
                <p>
                  <br />
                  The web design and development phase extends beyond visual
                  components, encompassing the creation of the product's overall
                  aesthetic and user experience. Our UX/UI web designers
                  collaborate with you to grasp your design preferences,
                  crafting an attractive and multi-faceted design that attracts
                  both new and existing users to your website.
                </p>
                <br />
                <p>
                  Our objective is to enhance the overall user experience by
                  conducting comprehensive market research, leveraging data and
                  insights to support our designs, ensuring they align with
                  market desires and needs.
                </p>
              </div>
            </div>
          </div>
          <div className="contents mt-4 mb-5">
            <h3 className="section-title">
              Testing <p className="theme-color-word">and</p> Validating
            </h3>
            <div className="row">
              <div className="col-lg-6">
                <p>
                  <br />
                  <br />
                  <br />
                  Testing is an indispensable step in any website or web
                  application development process. Our dedicated quality
                  assurance (QA) engineers conduct comprehensive testing,
                  assessing various facets of your site, encompassing
                  performance, usability, functionality, load capacity, and
                  more, while diligently identifying and resolving any bugs or
                  defects. Only when our QA team ensures your website attains
                  the utmost quality will we deem it ready for launch.
                </p>
              </div>
              <div className="col-lg-6">
                <LazyLoadImage
                  alt=""
                  src="/assets/img/web-development/web-development-4.png"
                  effect="blur"
                  className="img-fluid animated"
                />
              </div>
            </div>
          </div>
          <div className="contents mt-4 mb-5">
            <h3 className="section-title">
              <p className="theme-color-word">Launch</p> and Maintainance
            </h3>
            <div className="row">
              <div className="col-lg-6">
                <LazyLoadImage
                  alt=""
                  src="/assets/img/web-development/web-development-5.png"
                  effect="blur"
                  className="img-fluid animated"
                />
              </div>
              <div className="col-lg-6">
                <p>
                  <br />
                  <br />
                  <br />
                  Upon meticulous examination, the moment has arrived to unveil
                  your website or web application. However, prior to launch, we
                  prioritize your complete satisfaction. Should you have any
                  concerns, we are committed to addressing them to your
                  contentment. The public debut of your website will transpire
                  only when both you, the client, and our team are fully
                  prepared.
                </p>
                <p>
                  To maintain a robust and attractive web presence, continuous
                  upkeep and updates are essential. Our team remains at your
                  disposal for any necessary maintenance to fortify your website
                  or application as your business expands and evolves, adapting
                  to the ever-changing landscape of emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebDevelopment;
