import React from "react";
import Sectionheader from "../components/Sectionheader"


function About() {
  return (
    <section id="contact" class="contact">
      <div class="container">
      <Sectionheader
            title={"About"}
            subtitle={"We bridge the gap between your great idea and your resources"}
          />
        <div class="section-title">
          <section>
            <h3>Who We Are</h3>

            <div class="row">
              <div class="col-lg-6">
                <img
                  src="assets/img/about/who-we-are2.png"
                  class="img-fluid animated"
                  alt=""
                />
              </div>
              <div class="col-lg-6">
                <p>
                  <br />
                  <br />
                  Introducing Driftmark Technologies, a premier bespoke software
                  development firm in India. Our expertise lies in crafting
                  cost-effective, innovative web and mobile applications, as
                  well as data analytics and cloud solutions. These tools not
                  only refine the business processes but also pave the way for
                  new revenue opportunities, be it for budding startups or
                  well-established enterprises. Since our inception in 2023,
                  we've successfully garnered the trust of over 10 clients in a
                  remarkably short time.
                </p>
                <br />
                <p>
                  Our tailored solutions have become pivotal in the success
                  stories of our clients. Leveraging our deep technological
                  knowledge and vast industry experience, we've consistently
                  partnered with our clients to produce sophisticated solutions,
                  ensuring timely delivery within budget constraints.
                </p>
              </div>
            </div>
          </section>
          <section>
            <h3>What We Offer</h3>
            <div class="row">
              <div class="col-lg-6">
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
              <div class="col-lg-6">
                <img
                  src="assets/img/about/what-we-offer.jpeg"
                  class="img-fluid animated"
                  alt=""
                />
              </div>
            </div>
          </section>
          <section>
            <h3>Our Mission</h3>
            <div class="row">
              <div class="col-lg-6">
                <img
                  src="assets/img/about/mission.jpeg"
                  class="img-fluid animated"
                  alt=""
                />
              </div>
              <div class="col-lg-6">
                <p>
                  Evolving beyond the confines of mere mobile and web
                  development, we've set clear objectives. Our primary aim is to
                  empower you to expand your business, navigating any
                  technological hurdles along the way.
                </p>
                <br />
                <p>
                  Our commitment lies in offering unparalleled value to our
                  clientele, achieved through persistent R&D efforts and forging
                  meaningful industry collaborations. While pursuing our vision,
                  we emphasize a fulfilling and collaborative workspace for
                  every team member. In collaboration with all our partners,
                  both within and outside the organization, we strive to
                  introduce innovative, top-notch, and cost-efficient solutions
                  and services.
                </p>
              </div>
            </div>
          </section>
          <section>
            <h3>Our Vision</h3>
            <div class="row">
              <div class="col-lg-6">
                <p>
                  The digital age is teeming with untapped potential and fresh
                  inspirations. Milestones that once took half a decade to
                  realize can now be achieved in merely two years with the right
                  digital strategies.
                </p>
                <br />
                <p>
                  This profound insight drives us. Through our endeavors, we not
                  only demonstrate the advantages of an uplifting digital
                  journey but also pave the way for our clientele to experience
                  swifter, more straightforward, and enhanced business
                  operations. In doing so, we foster the inception of innovative
                  and transformative initiatives.
                </p>
              </div>
              <div class="col-lg-6">
                <img
                  src="assets/img/about/vision.jpeg"
                  class="img-fluid animated"
                  alt=""
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
