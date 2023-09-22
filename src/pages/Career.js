import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Sectionheader from "../components/Sectionheader";
import { v4 as uuidv4 } from "uuid";
import { trackEvent, identifyUser } from "../utils/mixpanelUtil";

function Team() {
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
    trackEvent("Career Page Visited");
  }, []);

  return (
    <section id="team" class="team career section-bg">
      <div class="container">
        <Sectionheader
          title={"Career"}
          subtitle={
            <p>
              Driftmark Technologies, an offshore tech enterprise, prides itself
              on crafting robust, enduring software and web solutions. Our
              biggest asset? Our personnel. We believe in the principle that
              quality output requires quality input, and thus, we've sourced the
              best talent available. Recognizing the importance of cutting-edge
              solutions and impeccable customer relations, our team is a blend
              of dedication, expertise, and passion. Not only are our tech
              mavens well-versed with the latest global innovations, but they're
              also driven by a customer-first ethos, always willing to exceed
              expectations. To maintain our competitive edge, we prioritize
              ongoing professional development and regular performance
              assessments for our team. Thinking of a fulfilling and dynamic
              career path? Consider Driftmark Technologies. We're always open to
              discussions with prospective talents eager to be a part of our
              journey.
            </p>
          }
        />
        {/* <div class="section-title">
          <span>Career</span>
          <h2>Career</h2>
          <p>
            Driftmark Technologies, an offshore tech enterprise, prides itself
            on crafting robust, enduring software and web solutions. Our biggest
            asset? Our personnel. We believe in the principle that quality
            output requires quality input, and thus, we've sourced the best
            talent available. Recognizing the importance of cutting-edge
            solutions and impeccable customer relations, our team is a blend of
            dedication, expertise, and passion. Not only are our tech mavens
            well-versed with the latest global innovations, but they're also
            driven by a customer-first ethos, always willing to exceed
            expectations. To maintain our competitive edge, we prioritize
            ongoing professional development and regular performance assessments
            for our team. Thinking of a fulfilling and dynamic career path?
            Consider Driftmark Technologies. We're always open to discussions
            with prospective talents eager to be a part of our journey.
          </p>
          </div> */}
        <div className="mt-5">
          <section class="section">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <header class="section-header">
                    <h2>We need a normal superhero, obviously.</h2>
                    <p class="text">
                      You're polite and down to earth.
                      <br />
                      You love stability in life.
                      <br />
                      You're OK with processes and organization.
                      <br />
                      <strong>
                        Tech stack: HTML, CSS,React, Javascript, Node, PHP,
                        Wordpress, Java
                      </strong>
                      <br />
                    </p>
                    <Link
                      to="#"
                      className="btn-apply-now scrollto"
                      data-bs-toggle="modal"
                      data-bs-target="#applyModal"
                    >
                      Apply now
                    </Link>
                  </header>
                </div>
                <div class="col-lg-6">
                  <img
                    className="img-fluid text-center"
                    width={400}
                    height={400}
                    src="/assets/img/superhero.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="apply-now-popup">
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
                    <form>
                      <div className="mb-3">
                        <label htmlFor="position" className="form-label">
                          Position You Apply For
                        </label>
                        <select
                          className="form-select"
                          id="position"
                          name="position"
                          required
                        >
                          <option value="">Select a Position</option>
                          <option value="Front-end Developer">
                            Front-end Developer
                          </option>
                          <option value="Back-end Developer">
                            Back-end Developer
                          </option>
                          <option value="UI/UX Designer">Web Designer</option>
                          <option value="Graphic Designer">Graphic Designer</option>
                          <option value="Accountant">Accountant</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="resume" className="form-label">
                          Resume File Upload
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="resume"
                          name="resume"
                          accept=".pdf, .doc, .docx"
                          required
                        />
                      </div>
                    </form>
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
          </section>

          <section class="section section-bg">
            <div class="container">
              <div class="row ">
                <div class="col-12">
                  <header class="section-header">
                    <h2 class="section-title">
                      We know many companies have been asking you to do this
                    </h2>
                    <h3>But come work with us.</h3>
                    <p class="text">
                      Everything is completely negotiable - benefits, remote
                      work, salary, Slack memes... 🐈
                    </p>
                    <p class="text">
                      Oh, and feel free to apply even if you don't work with our
                      tech stack. We often have inquiries for projects we need
                      an additional pair of hands (and programming languages)
                      for.
                    </p>
                    <p class="text">
                      Send your resume and a little bit about yourself to{" "}
                      <a href="mailto:hr@driftmarktechnology.com">
                        hr@driftmarktechnology.com
                      </a>
                    </p>
                  </header>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Team;
