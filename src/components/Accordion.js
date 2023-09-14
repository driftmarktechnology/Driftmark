// Accordion.js
import React from "react";
import { Link } from "react-router-dom";

const Accordion = () => {
  return (
    <div className="accordion" id="accordionExample">
      <div
        className="modal fade"
        id="applyModal"
        tabindex="-1"
        aria-labelledby="applyModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="applyModalLabel">
                Apply for Position
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* You can put a form or any content here */}
              <p>Application content here...</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
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
            Frontend Developer
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
              <h4>Roles and Responsbility</h4>
              <ol>
                <li>Proven work experience as a Front-end developer</li>
                <li>Hands on experience with markup languages</li>
                <li>Experience with JavaScript, CSS and jQuery</li>
                <li>Familiarity with browser testing and debugging</li>
                <li>
                  In-depth understanding of the entire web development process
                  (design, development and deployment)
                </li>
                <li>Understanding of layout aesthetics</li>
                <li>Knowledge of SEO principles</li>
                <li>
                  Familiarity with software like Adobe Suite, Photoshop and
                  content management systems
                </li>
                <li>An ability to perform well in a fast-paced environment</li>
              </ol>
              <h4>Openings: 3</h4>
              <h4>Experience: 0 to 1yr</h4>
              <h4>
                Educational Qualification: BSc degree in Computer Science or
                relevant field
              </h4>
              <h4>
                <Link
                  to="#"
                  className="btn-get-started scrollto"
                  data-bs-toggle="modal"
                  data-bs-target="#applyModal"
                  style={{padding:"8px 30px 10px 30px", borderRadius: "4px", background: "#39c1eb", color: "#fff"}}
                >
                  Apply now
                </Link>
              </h4>
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
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Backend Developer
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
              <h4>Roles and Responsbility</h4>
              <ol>
                <li>
                  Communicate regularly with stakeholders, project managers,
                  quality assurance teams, and other developers regarding
                  progress on long-term technology roadmap
                </li>
                <li>
                  Create and maintain workflows with teams to provide visibility
                  and to ensure workload balance for consistent visual designs
                </li>
                <li>
                  Develop and oversee testing schedules in client server
                  environment, addressing various browsers and devices to ensure
                  that content is displayed as intended
                </li>
                <li>
                  Produce quality code, raising the bar for team performance and
                  speed
                </li>
                <li>
                  Recommend systems solutions by comparing advantages and
                  disadvantages of custom development and purchased alternatives
                </li>
                <li>
                  Write code and tests, build prototypes, resolve issues, and
                  profile and analyze bottlenecks
                </li>
                <li>
                  Design robust APIs to support mobile and desktop clients
                </li>
                <li>
                  Optimize web applications for performance and scalability
                </li>
                <li>
                  Develop automated tests to ensure business needs are met, and
                  allow for regression testing
                </li>
              </ol>
              <h4>Openings: 3</h4>
              <h4>Experience: 0 to 1yr</h4>
              <h4>
                Educational Qualification: BSc degree in Computer Science or
                relevant field
              </h4>
              <h4>
                <Link
                  to="#"
                  className="btn-get-started scrollto"
                  data-bs-toggle="modal"
                  data-bs-target="#applyModal"
                  style={{padding:"8px 30px 10px 30px", borderRadius: "4px", background: "#39c1eb", color: "#fff"}}
                >
                  Apply now
                </Link>
              </h4>
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
            Web Designer
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
              <h4>Roles and Responsbility</h4>
              <ol>
                <li>Designing engaging and responsive landing pages</li>
                <li>
                  Integrating client CMS programs and data feeds into websites
                </li>
                <li>Optimising sites for maximum speed and scalability</li>
                <li>
                  Employing industry and design best practice through website
                  build process
                </li>
                <li>Conducting website testing</li>
                <li>
                  Liaising with back-end developers to ensure web and app logic
                  is properly integrated
                </li>
                <li>
                  Ensuring website function and stability across devices i.e.
                  desktop, mobile, tablet
                </li>
                <li>
                  Working with marketing and research teams to incorporate brand
                  elements and relevant market research findings into website
                </li>
                <li>
                  Providing internal support and external customer service
                  throughout the build and launch process of the website
                </li>{" "}
              </ol>
              <h4>Openings: 3</h4>
              <h4>Experience: 0 to 1yr</h4>
              <h4>
                Educational Qualification: BSc degree in Computer Science or
                relevant field
              </h4>
              <h4>
                <Link
                  to="#"
                  className="btn-get-started scrollto"
                  data-bs-toggle="modal"
                  data-bs-target="#applyModal"
                  style={{padding:"8px 30px 10px 30px", borderRadius: "4px", background: "#39c1eb", color: "#fff"}}
                >
                  Apply now
                </Link>
              </h4>
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
            Graphic Designer
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
              <h4>Roles and Responsbility</h4>
              <ol>
                <li>
                  Liaising with clients to determine their requirements,
                  timescale and budget.
                </li>
                <li>
                  Managing client proposals from typesetting through to graphic
                  design, print and production.
                </li>
                <li>
                  Working with clients’ ideas and managing their expectations.
                </li>
                <li>
                  Developing concepts, graphics and layouts, including making
                  decisions about fonts, images, readability and readers’ needs.
                </li>
                <li>
                  Determining size and arrangement of copy and illustrative
                  material, as well as font style and size.
                </li>
                <li>
                  Preparing rough drafts of material based on an agreed brief.
                </li>
                <li>
                  Keeping clients up to date, listening to and acting on
                  feedback, and explaining the rationale behind graphic design
                  decisions.
                </li>
                <li>
                  Reviewing final layouts and suggesting improvements if
                  required.
                </li>
                <li>Keeping up to date with design and software trends.</li>
                <li>
                  Liaising with external printers or production teams to ensure
                  deadlines are met and material is printed or presented to the
                  highest quality.
                </li>
              </ol>
              <h4>Experience: 0 to 1yr</h4>
              <h4>Openings: 3</h4>
              <h4>
                Educational Qualification: BSc degree in Computer Science or
                relevant field
              </h4>
              <h4>
                <Link
                  to="#"
                  className="btn-get-started scrollto"
                  data-bs-toggle="modal"
                  data-bs-target="#applyModal"
                  style={{padding:"8px 30px 10px 30px", borderRadius: "4px", background: "#39c1eb", color: "#fff"}}
                >
                  Apply now
                </Link>
              </h4>
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Accountant
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p style={{ textAlign: "left" }}>
              <h4>Roles and Responsbility</h4>
              <ol>
                <li>Manage all accounting transactions.</li>
                <li>Prepare budget forecasts.</li>
                <li>Publish financial statements in time.</li>
                <li>Handle monthly, quarterly and annual closings.</li>
                <li>Reconcile accounts payable and receivable.</li>
                <li>Ensure timely bank payments.</li>
                <li>Compute taxes and prepare tax returns.</li>
                <li>Manage balance sheets and profit/loss statements.</li>
              </ol>
              <h4>Experience: 0 to 1yr</h4>
              <h4>Openings: 3</h4>
              <h4>
                Educational Qualification: Any Bachelor's degree in B.Com,
                B.Com(hons), BBA Finance and BBA Accountancy.
              </h4>
              <h4>
                <Link
                  to="#"
                  className="btn-get-started scrollto"
                  data-bs-toggle="modal"
                  data-bs-target="#applyModal"
                  style={{padding:"8px 30px 10px 30px", borderRadius: "4px", background: "#39c1eb", color: "#fff"}}
                >
                  Apply now
                </Link>
              </h4>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
