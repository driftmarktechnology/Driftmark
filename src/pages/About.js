import React, { useState, useEffect } from "react";
import Sectionheader from "../components/Sectionheader";
import { v4 as uuidv4 } from "uuid";
import { trackEvent, identifyUser } from "../utils/mixpanelUtil";
import { motion, useAnimation } from "framer-motion";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Function to handle scrolling
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollThreshold = 200; // Adjust this value as needed

      // Check if the scroll position is past the threshold
      setIsVisible(scrollY > scrollThreshold);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 }, // Initial state (invisible)
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Animation state (visible)
  };

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

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
    trackEvent("About Us Page Visited");
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }} // Initial state (invisible)
          animate={{ opacity: 1 }} // Animation state (visible)
          transition={{ duration: 1 }} // Transition settings
        >
          <Sectionheader
            title={"About"}
            subtitle={
              "We bridge the gap between your great idea and your resources"
            }
          />
          <div className="section-title">
            <div className="contents mt-4 mb-5">
              <h3>Who We Are</h3>
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="assets/img/about/who-we-are2.png"
                    className="img-fluid animated"
                    alt=""
                  />
                </div>
                <div className="col-lg-6">
                  <p>
                    <br />
                    <br />
                    Introducing Driftmark Technologies, a premier bespoke
                    software development firm in India. Our expertise lies in
                    crafting cost-effective, innovative web and mobile
                    applications, as well as data analytics and cloud solutions.
                    These tools not only refine the business processes but also
                    pave the way for new revenue opportunities, be it for
                    budding startups or well-established enterprises. Since our
                    inception in 2023, we've successfully garnered the trust of
                    over 10 clients in a remarkably short time.
                  </p>
                  <br />
                  <p>
                    Our tailored solutions have become pivotal in the success
                    stories of our clients. Leveraging our deep technological
                    knowledge and vast industry experience, we've consistently
                    partnered with our clients to produce sophisticated
                    solutions, ensuring timely delivery within budget
                    constraints.
                  </p>
                </div>
              </div>
            </div>
            <div className="contents mt-4 mb-5">
              <h3>What We Offer</h3>
              <div className="row">
                <div className="col-lg-6">
                  <br />
                  <br />
                  <p>
                    We specialize in crafting cost-effective custom software
                    tailored for businesses, regardless of size. With a keen
                    emphasis on contemporary design standards and the latest
                    advancements in cloud, mobile, and desktop platforms, we
                    develop bespoke solutions. These tools foster better team
                    collaboration, enhance customer engagement, streamline
                    operations, and ultimately drive down expenses.
                  </p>
                  <br />
                  <p>
                    At Dritmark, our clients benefit from a rich reservoir of
                    technical and business acumen. Whether it's web or mobile
                    platforms, we have the prowess to devise multifaceted
                    solutions suited to diverse business requirements.
                  </p>
                </div>
                <div className="col-lg-6">
                  <img
                    src="assets/img/about/what-we-offer.jpeg"
                    className="img-fluid animated"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="contents mt-4 mb-5">
              <h3>Our Mission</h3>
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="assets/img/about/mission.jpeg"
                    className="img-fluid animated"
                    alt=""
                  />
                </div>
                <div className="col-lg-6">
                  <br />
                  <br />
                  <p>
                    Evolving beyond the confines of mere mobile and web
                    development, we've set clear objectives. Our primary aim is
                    to empower you to expand your business, navigating any
                    technological hurdles along the way.
                  </p>
                  <br />
                  <p>
                    Our commitment lies in offering unparalleled value to our
                    clientele, achieved through persistent R&D efforts and
                    forging meaningful industry collaborations. While pursuing
                    our vision, we emphasize a fulfilling and collaborative
                    workspace for every team member. In collaboration with all
                    our partners, both within and outside the organization, we
                    strive to introduce innovative, top-notch, and
                    cost-efficient solutions and services.
                  </p>
                </div>
              </div>
            </div>
            <div className="contents mt-4 mb-5">
              <h3>Our Vision</h3>
              <div className="row">
                <div className="col-lg-6">
                  <br />
                  <br />
                  <p>
                    The digital age is teeming with untapped potential and fresh
                    inspirations. Milestones that once took half a decade to
                    realize can now be achieved in merely two years with the
                    right digital strategies.
                  </p>
                  <br />
                  <p>
                    This profound insight drives us. Through our endeavors, we
                    not only demonstrate the advantages of an uplifting digital
                    journey but also pave the way for our clientele to
                    experience swifter, more straightforward, and enhanced
                    business operations. In doing so, we foster the inception of
                    innovative and transformative initiatives.
                  </p>
                </div>
                <div className="col-lg-6">
                  <img
                    src="assets/img/about/vision.jpeg"
                    className="img-fluid animated"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
