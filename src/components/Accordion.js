// Accordion.js
import React from "react";
import { Link } from "react-router-dom";

const Accordion = () => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            A high-quality website is crucial for a company. Why?
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p style={{ textAlign: "left" }}>
              <p>
                Individuals turn to the internet to research companies,
                products, and services. Gone are the days when we depended on
                directories or phone books. When people need information, their
                first instinct is to browse online. When they hunt for something
                you provide or specifically for your brand, it's essential not
                only to be visible but also to make a striking impression. Your
                physical storefront and showroom are impressive, aren't they?
                Why do they stand out? Because you're aware that customers view
                them and shape perceptions about Driftmark based on them (along
                with aspects like customer service, quality, pricing, etc.).
                Consider your website as Driftmark's digital facade and display
                area. Viewers are evaluating it and building an impression about
                the enterprise based on its appearance and functionality. Hence,
                it's vital to ensure it's top-notch!
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What sets Driftmark apart from other software development entities?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p style={{ textAlign: "left" }}>
              <p>
                Our robust technical expertise, enhanced productivity, and
                superior communication distinguish us from other software
                development agencies. This ensures you receive premium quality,
                reduced hassles, and cost-effective solutions. Our genuine zeal
                for our work drives both our excitement and your achievement.
                Moreover, our unique initiative, the Driftmark Inc Hub, empowers
                software developers lacking resources or knowledge to bring
                their visions to life.
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What types of software development tasks do you undertake?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p style={{ textAlign: "left" }}>
              <p>
                Driftmark We assist in developing mobile apps, web platforms,
                tailored software solutions, and beyond. Additionally, we can
                collaborate with your internal software team on specialized IT
                endeavors. Should you have any inquiries, reach out, and we'll
                provide the clarity you seek.
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            I'm intrigued by the Driftmark. If I reach out, am I obligated to
            disclose my software concept?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p style={{ textAlign: "left" }}>
              <p>
                Absolutely not. We fully recognize the importance of protecting
                your innovative concepts. In our initial discussion, we'll
                explain the operations of the Inc Tank and its potential
                advantages for you. Should we choose to collaborate, we'll draft
                a non-disclosure agreement (NDA) to ensure the security of your
                idea and your interests.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
