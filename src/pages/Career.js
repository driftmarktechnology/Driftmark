import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sectionheader from "../components/Sectionheader";
import { v4 as uuidv4 } from "uuid";
import { trackEvent, identifyUser } from "../utils/mixpanelUtil";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

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
    /* eslint-disable */
  }, []);
  /* eslint-enable */

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);
  
  const validationSchema = Yup.object().shape({
    position: Yup.string().required("Position is required"),
    resume: Yup.mixed()
      .required("Resume is required")
      .test("type", "Only .pdf and .doc formats are accepted", (value) => {
        if (!value || !Array.isArray(value) || value.length === 0) return true;
        const fileName = value[0].name;
        const allowedExtensions = [".pdf", ".doc", ".docx"];
        const fileExtension = fileName.split(".").pop().toLowerCase();
        return allowedExtensions.includes("." + fileExtension);
        // (
        //   value &&
        //   (value[0].type === "application/pdf" ||
        //     value[0].type === "application/msword")
        // );
      }),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append("position", values.position);
    formData.append("resume", values.resume);

    axios
      .post("http://localhost:3001/career-form", formData) // Replace with your API endpoint
      .then((response) => {
        // Handle successful submission
        console.log("Form submitted successfully:", response.data);
        resetForm();
      })
      .catch((error) => {
        // Handle submission error
        console.error("Error submitting form:", error);
      })
      .finally(() => {
        setSubmitting(false);
        setIsModalOpen(false);
      });
  };

  const openModal = () => {
    setIsModalOpen(true);
    // Increment the formKey to reset the form
    setFormKey(formKey + 1);
  };

  return (
    <section id="team" className="team mt-5 career section-bg">
      <div className="container">
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
        <div className="mt-5">
          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <header className="section-header">
                    <h2>We need a normal superhero, obviously.</h2>
                    <p className="text">
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
                      onClick={openModal}
                    >
                      Apply now
                    </Link>
                  </header>
                </div>
                <div className="col-lg-6">
                  <img
                    className="img-fluid responsive-image d-block mx-auto w-100"
                    width={400}
                    height={400}
                    src="/assets/img/superhero.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="apply-now-popup">
            <div
              className={`modal fade ${isModalOpen ? "show" : ""}`}
              id="applyModal"
              tabIndex="-1"
              aria-labelledby="applyModalLabel"
              aria-hidden={!isModalOpen}
              style={{ display: isModalOpen ? "block" : "none" }}
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
                    <Formik
                      key={formKey}
                      initialValues={{ position: "", resume: null }}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {(
                        { isSubmitting, errors, touched } // Add errors and touched here
                      ) => (
                        <Form>
                          <div className="mb-3">
                            <label htmlFor="position" className="form-label">
                              Position You Apply For
                            </label>
                            <Field
                              as="select"
                              id="position"
                              name="position"
                              className={`form-select ${
                                errors.position && touched.position
                                  ? "is-invalid"
                                  : ""
                              }`}
                            >
                              <option value="">Select a Position</option>
                              <option value="Front-end Developer">
                                Front-end Developer
                              </option>
                              <option value="Back-end Developer">
                                Back-end Developer
                              </option>
                              <option value="UI/UX Designer">
                                Web Designer
                              </option>
                              <option value="Graphic Designer">
                                Graphic Designer
                              </option>
                              <option value="Accountant">Accountant</option>
                            </Field>
                            <ErrorMessage
                              name="position"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="resume" className="form-label">
                              Resume File Upload
                            </label>
                            <Field
                              type="file"
                              id="resume"
                              name="resume"
                              className={`form-control ${
                                errors.resume && touched.resume
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              name="resume"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="section section-bg">
            <div className="container">
              <div className="row ">
                <div className="col-12">
                  <header className="section-header">
                    <h2 className="section-title">
                      We know many companies have been asking you to do this
                    </h2>
                    <h3>But come work with us.</h3>
                    <p className="text">
                      Everything is completely negotiable - benefits, remote
                      work, salary, Slack memes... 🐈
                    </p>
                    <p className="text">
                      Oh, and feel free to apply even if you don't work with our
                      tech stack. We often have inquiries for projects we need
                      an additional pair of hands (and programming languages)
                      for.
                    </p>
                    <p className="text">
                      Send your resume and a little bit about yourself to{" "}
                      <Link to="mailto:hr@driftmarktechnology.com">
                        hr@driftmarktechnology.com
                      </Link>
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
