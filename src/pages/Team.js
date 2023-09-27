import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Sectionheader from "../components/Sectionheader";
import { v4 as uuidv4 } from "uuid";
import { trackEvent, identifyUser } from "../utils/mixpanelUtil";
import RenderTeamMember from "../components/RenderTeamMember";

function Team() {
  let width = window.innerWidth;
  let height = window.innerHeight;

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
    trackEvent("Team Page Visited");
    /* eslint-disable */
  }, []);
  /* eslint-enable */

  return (
    <>
      <Confetti width={width} height={height} />
      <section id="team" class="team section-bg">
        <div class="container">
          <Sectionheader
            title={"Team"}
            subtitle={"Transforming Business Concepts into Reality"}
          />
          <div>
            <p>
              At Driftmark, we've honed our expertise in transforming innovative
              concepts into impactful products for our partners. Many of the
              projects we're most proud of began as budding ideas and evolved
              into thriving businesses from scratch. Witnessing our partners
              dominate their market segments with our digital solutions fills us
              with immense pride.
            </p>
            <p>
              While we typically adhere to a structured process to ensure every
              concept is nurtured to evolve into a unique product, we recognize
              the distinctiveness of each project at Driftmark. We're flexible
              in our approach, understanding that not all projects fit a mold.
              We're always open to refining our methods and are ready to revisit
              the foundational stages whenever necessary.
            </p>
          </div>

          <div class="container">
            <div class="section-title">
              <span>Meet Our Experts for You</span>
              <h2>Meet Our Experts for You</h2>
              <div class="row">
                <RenderTeamMember
                  name="Kesavan Sujitha"
                  role="Director"
                  description="Kesavan Sujitha is the Director of our company, bringing extensive expertise and leadership to our team. With a background in software development and a deep understanding of the industry, Sujitha is dedicated to driving our company's success. Sujitha's strategic vision and commitment to excellence have been instrumental in guiding our projects to success. Under her leadership, our team consistently delivers high-quality digital solutions that meet and exceed client expectations."
                  imageSrc="/assets/img/team/director1.jpeg"
                />

                <RenderTeamMember
                  name="Murugesan Naveen"
                  role="Director"
                  description="Murugesan Naveen is a Director at our company and plays a pivotal role in our success. With a wealth of experience and a strong passion for technology, Naveen is committed to driving innovation and excellence in our projects. Naveen's leadership has been instrumental in steering our team towards delivering cutting-edge digital solutions. His dedication to quality and client satisfaction ensures that our projects consistently meet the highest standards."
                  imageSrc="/assets/img/team/naveen2.jpeg"
                />

                <RenderTeamMember
                  name="Sathish"
                  role="Project Manager"
                  description="Sathish is our accomplished Project Manager, responsible for orchestrating successful project deliveries. With a wealth of experience, Sathish leads our teams with precision, ensuring projects are completed on time and within scope. His dedication to quality and effective communication plays a vital role in our project successes."
                  imageSrc="assets/img/team/profile.jpg"
                />

                <RenderTeamMember
                  name="Srija"
                  role="Dev Ops"
                  description="Srija is our proficient DevOps specialist, driving efficiency and reliability in our development processes. With a deep understanding of DevOps tools and practices, Srija streamlines our workflows, automates tasks, and ensures seamless collaboration between development and operations teams. Her expertise ensures that our software deployments are smooth, secure, and optimized for performance."
                  imageSrc="assets/img/team/profile.jpg"
                />

                <RenderTeamMember
                  name="Sentamizh"
                  role="QA"
                  description="Sentamizh is our meticulous QA expert, dedicated to ensuring the quality and reliability of our digital solutions. With a keen eye for detail, Sentamizh rigorously tests and evaluates our projects to guarantee they meet the highest standards. Their commitment to quality assurance plays a critical role in delivering error-free and top-notch software products to our clients."
                  imageSrc="assets/img/team/profile.jpg"
                />

                <RenderTeamMember
                  name="Yaathirai"
                  role="Team Lead"
                  description="Yaathirai is our dedicated Team Lead, guiding our talented team towards project success. With exceptional leadership skills and technical prowess, Yaathirai ensures that our projects are executed seamlessly. Their commitment to excellence and effective communication fosters a collaborative environment that consistently delivers high-quality solutions."
                  imageSrc="assets/img/team/profile.jpg"
                />

                <RenderTeamMember
                  name="Suriya S"
                  role="Frontend Developer"
                  description="Suriya is our skilled Frontend Developer, responsible for bringing our web projects to life with creativity and precision. With a passion for crafting user-friendly and visually appealing interfaces, Suriya is at the forefront of turning design concepts into interactive and responsive web applications."
                  imageSrc="assets/img/team/profile.jpg"
                />

                <RenderTeamMember
                  name="Sree Balaji"
                  role="Backend Developer"
                  description="Sree Balaji is our proficient Backend Developer, leading the way in developing robust server-side solutions. With a deep understanding of backend technologies, Sree Balaji is instrumental in creating the backbone of our web applications. Their expertise ensures that our projects run smoothly, efficiently, and securely, providing a strong foundation for our clients' digital success."
                  imageSrc="assets/img/team/profile.jpg"
                />

                <RenderTeamMember
                  name="Avilash"
                  role="Wordpress Developer"
                  description="Avilash is our dedicated WordPress Developer, specializing in crafting exceptional websites on the WordPress platform. With a strong command of WordPress's capabilities, Avilash transforms design concepts into polished, user-friendly websites. Their attention to detail and commitment to excellence ensure that every WordPress project delivers a seamless and engaging digital experience."
                  imageSrc="assets/img/team/profile.jpg"
                />

                <RenderTeamMember
                  name="Preethi"
                  role="UI/UX Designer"
                  description="Preethi is our talented UI/UX Designer, with a passion for crafting user-centric digital experiences. With a keen eye for aesthetics and usability, Preethi transforms ideas into visually appealing and highly intuitive interfaces. Their creative expertise ensures that our projects not only look stunning but also provide an exceptional user journey."
                  imageSrc="assets/img/team/profile.jpg"
                />

                <RenderTeamMember
                  name="Kowsalya"
                  role="HR"
                  description="Kowsalya is our HR Representative, dedicated to fostering a positive and inclusive workplace environment. With a passion for people and strong communication skills, Kowsalya plays a crucial role in our company's success. Kowsalya is responsible for recruitment, employee relations, and ensuring that our team members have the support they need to thrive. His commitment to employee satisfaction and well-being makes our workplace a great place to grow."
                  imageSrc="assets/img/team/hr1.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
