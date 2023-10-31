import React from "react";
import Sectionheader from "../components/Sectionheader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function WebDesign() {
  return (
    <section id="services" className="services mt-5 section-bg">
      <div className="container">
        <Sectionheader
          title={"Web Design"}
          subtitle={"Approaches we employ for website design"}
        />
        <div>
          <div className="contents mt-4 mb-5">
            <h3 className="section-title">
              <p className="theme-color-word">Identifying Goals</p> and Defining
              Scope
            </h3>

            <div className="row">
              <div className="col-lg-6">
                <LazyLoadImage
                  alt=""
                  src="/assets/img/web-design/web-design-goal.png"
                  effect="blur"
                  className="img-fluid animated"
                />
              </div>
              <div className="col-lg-6">
                <p>
                  <br />
                  <br />
                  Determining the project's objectives and its scope are pivotal
                  factors influencing the ultimate impact of the end results. In
                  preparation for our collaboration on your projects, our
                  commitment is to thoroughly comprehend the fundamental
                  purpose, encompassing the vision and mission, that drives your
                  business.
                </p>
                <br />
                <p>
                  It becomes absolutely critical in these initial discussions
                  for you to share as much information as possible about your
                  business. Your provision of ample information significantly
                  enhances our ability to better assist you and deliver an
                  enhanced level of service.
                </p>
              </div>
            </div>
          </div>
          <div className="contents mt-4 mb-5">
            <h3 className="section-title">
              Crafting <p className="theme-color-word">Sitemaps</p> and{" "}
              <p className="theme-color-word">Wireframes</p>
            </h3>
            <div className="row">
              <div className="col-lg-6">
                <p>
                  <br />
                  <br />
                  Following this, our team of website developers initiates the
                  creation of sitemap and wireframe structures tailored to your
                  web design needs. As a premier website design firm, we
                  persistently work until your website's design aligns precisely
                  with your requirements and expectations.
                </p>
              </div>
              <div className="col-lg-6">
                <LazyLoadImage
                  alt=""
                  src="/assets/img/web-design/web-design-sitemap.png"
                  effect="blur"
                  className="img-fluid animated"
                />
              </div>
            </div>
          </div>
          <div className="contents mt-4 mb-5">
            <h3 className="section-title">
              <p className="theme-color-word">Digital</p> Design
            </h3>
            <div className="row">
              <div className="col-lg-6">
                <LazyLoadImage
                  alt=""
                  src="/assets/img/web-design/web-design-digital-design.png"
                  effect="blur"
                  className="img-fluid animated"
                />
              </div>
              <div className="col-lg-6">
                <p>
                  <br />
                  Driftmark Technology adheres to a comprehensive design process
                  aimed at delivering tailored, high-quality websites aligned
                  with your precise business requirements. Our process initiates
                  with a meticulous examination of your business and its target
                  audience, enabling us to grasp their distinct requirements
                  fully.
                </p>
                <br />
                <p>
                  Subsequently, we formulate a personalized design strategy,
                  which we present to you for your approval. Once you give the
                  green light, we proceed with the design phase. This approach
                  guarantees your active involvement at every stage, thus
                  ensuring the final product aligns seamlessly with your
                  expectations.
                </p>
              </div>
            </div>
          </div>
          <div className="contents mt-4 mb-5">
            <h3 className="section-title">
              Developing Your <p className="theme-color-word">Goals</p>
            </h3>
            <div className="row">
              <div className="col-lg-6">
                <p>
                  <br />
                  <br />
                  <br />
                  While developing, we encompass a range of vital components,
                  including coding, the integration of UI (User Interface) and
                  UX (User Experience) elements, and the creation of engaging
                  content, among other key elements. Moreover, we specialize in
                  crafting Search Engine Optimized Content, commonly referred to
                  as SEO Content, tailored to showcase your products and/or
                  services.
                </p>
              </div>
              <div className="col-lg-6">
                <LazyLoadImage
                  alt=""
                  src="/assets/img/web-design/web-design-developing-goals.png"
                  effect="blur"
                  className="img-fluid animated"
                />
              </div>
            </div>
          </div>
          <div className="contents mt-4 mb-5">
            <h3 className="section-title">
              Testing. <p className="theme-color-word">Going Live.</p> Support.
            </h3>
            <div className="row">
              <div className="col-lg-6">
                <LazyLoadImage
                  alt=""
                  src="/assets/img/web-design/web-design-testing-support.png"
                  effect="blur"
                  className="img-fluid animated"
                />
              </div>
              <div className="col-lg-6">
                <p>
                  <br />
                  <br />
                  <br />
                  Upon meticulous integration and completion of all requisite
                  elements, our team conducts rigorous testing to assess your
                  website's user experience. After you express satisfaction with
                  the navigation, overall feel, and experience, we proceed to
                  launch your website, making it live for your audience to
                  access and engage with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebDesign;
