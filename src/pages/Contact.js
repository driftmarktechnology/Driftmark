import React , {useEffect} from "react";
import Sectionheader from "../components/Sectionheader"
import { v4 as uuidv4 } from 'uuid';
import { trackEvent, identifyUser } from '../utils/mixpanelUtil';

function Contact() {

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
  }, []);

  return (
    <section id="contact" class="contact">
      <div class="container">
      <Sectionheader
            title={"Contact"}
            subtitle={"Your trusted Solutions Partner for the digital transformation of you and your company."}
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
                <p>contact@driftmarktechnology.com </p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91 6381 475 573</p>
              </div>

              <iframe
                src="https://maps.google.com/maps?q=driftmark%20tech&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                frameborder="0"
                scrolling="no"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
