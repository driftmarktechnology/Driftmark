import React, { useEffect, useState } from "react";
import Sectionheader from "../components/Sectionheader";
import { v4 as uuidv4 } from "uuid";
import { trackEvent, identifyUser } from "../utils/mixpanelUtil";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  // const validationSchema = Yup.object().shape({
  //   name: Yup.string().required("Name is required"),
  //   email: Yup.string().email("Invalid email").required("Email is required"),
  //   subject: Yup.string().required("Subject is required"),
  //   message: Yup.string().required("Message is required"),
  // });

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (!values.name) {
          toast.error("Please Enter Your Name..!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            bodyClassName: "toastify",
            transition: Zoom,
          });
          return;
        }

        if (!values.email) {
          toast.error("Please Enter Valid Email Id", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            bodyClassName: "toastify",
            transition: Zoom,
          });
          return;
        }

        if (!values.subject) {
          toast.error("Please Enter Subject", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            bodyClassName: "toastify",
            transition: Zoom,
          });
          return;
        }

        if (!values.message) {
          toast.error("Please Enter Message", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            bodyClassName: "toastify",
            transition: Zoom,
          });
          return;
        }

        const response = await axios.post("http://localhost:3001/send", values);
        toast.success("Message sent successfully!", {
          position: "top-right", // You can customize the toast position
          autoClose: 3000, // Close the toast after 3 seconds (adjust as needed)
          hideProgressBar: true,
          transition: Zoom,
        });
        console.log("Message sent successfully!", response.data);
        resetForm();
      } catch (error) {
        if(error.response && error.response.data && error.response.data.error){
          error.response.data.error.forEach((errMsg)=>{
            toast.error(errMsg.message, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              transition: Zoom,
            });
          })
        } else{
          toast.error("Failed to send the message. Please try again later.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            transition: Zoom,
          });
        }
      }
    },
  });

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
    trackEvent("Contact Page Visited");
 /* eslint-disable */
}, []);
/* eslint-enable */

// const [message, setMessage] = useState();
// const handleSubmit = () => {
//   axios
//   .post('http://localhost:3000/send', {message:message})
//   .then(result => console.log("Recieved message"))
//   .catch((err) => console.log(err))
// };

  return (
    <section id="contact" class="mt-5 contact">
      <div class="container">
        <Sectionheader
          title={"Contact"}
          subtitle={
            "Your trusted Solutions Partner for the digital transformation of you and your company."
          }
        />
        <div class="row">
          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Kadirimangalam, Tirupathur, Tamil Nadu 635653</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>
                  <Link
                    to="mailto:contact@driftmarktechnology.com"
                    onClick={(e) => {
                      window.location.href =
                        "mailto:contact@driftmarktechnology.com";
                      e.preventDefault();
                    }}
                  >
                    contact@driftmarktechnology.com
                  </Link>
                </p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p><Link to="tel:+91 6381 475 573">
                  +91 6381475573
                  </Link></p>
              </div>

              <iframe
                title="office-location"
                src="https://maps.google.com/maps?q=driftmark%20tech&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                frameborder="0"
                scrolling="no"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              onSubmit={formik.handleSubmit}
              className="php-email-form"
              id="contactFormid"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${
                      formik.touched.name && formik.errors.name
                        ? "is-invalid"
                        : ""
                    }`}
                    id="name"
                    {...formik.getFieldProps("name")}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="invalid-feedback">
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
                <div className="form-group col-md-6 mt-3 mt-md-0">
                  <label htmlFor="email">Your Email</label>
                  <input
                    // type="email"
                    className={`form-control ${
                      formik.touched.email && formik.errors.email
                        ? "is-invalid"
                        : ""
                    }`}
                    name="email"
                    id="email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.subject && formik.errors.subject
                      ? "is-invalid"
                      : ""
                  }`}
                  name="subject"
                  id="subject"
                  {...formik.getFieldProps("subject")}
                />
                {formik.touched.subject && formik.errors.subject ? (
                  <div className="invalid-feedback">
                    {formik.errors.subject}
                  </div>
                ) : null}
              </div>
              <div className="form-group mt-3">
                <label htmlFor="message">Message</label>
                <textarea
                  className={`form-control ${
                    formik.touched.message && formik.errors.message
                      ? "is-invalid"
                      : ""
                  }`}
                  name="message"
                  rows="10"
                  {...formik.getFieldProps("message")}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="invalid-feedback">
                    {formik.errors.message}
                  </div>
                ) : null}
              </div>
              <div className="my-3">
                {submissionStatus && submissionStatus.type === "error" && (
                  <div className="alert alert-danger">
                    {submissionStatus.message}
                  </div>
                )}
                {submissionStatus && submissionStatus.type === "success" && (
                  <div className="alert alert-success">
                    {submissionStatus.message}
                  </div>
                )}
              </div>
              <div id="error-message" class="error-message"></div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>

          {/* <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form class="php-email-form">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    required
                  />
                </div>
                <div class="form-group col-md-6 mt-3 mt-md-0">
                  <label for="name">Your Email</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div class="form-group mt-3">
                <label for="name">Subject</label>
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <label for="name">Message</label>
                <textarea
                  class="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div class="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Contact;
