import React, { useEffect } from "react";
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
      <section id="team" className="team mt-5 section-bg">
        <div className="container">
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

          <div className="container">
            <div>
              <span>Meet Our Experts for You</span>
              <h2>Meet Our Experts for You</h2>
              <div className="row">
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
                  name="Bala Sakthi"
                  role="Full Stack Developer"
                  description="With a knack for seamless integration across front-end and back-end technologies, Bala excels in crafting dynamic web solutions. Proficient in multiple programming languages, Bala delivers user-centric experiences with an eye for detail."
                  imageSrc="assets/img/team/profile.jpg"
                />

                <RenderTeamMember
                  name="Ranjith Kumar"
                  role="Full Stack Developer"
                  description="A versatile Full Stack Developer, Ranjith expertly navigates both client-side and server-side frameworks, transforming design concepts into functional web applications. Ranjith's meticulous approach ensures robust and scalable solutions."
                  imageSrc="assets/img/team/profile.jpg"
                />

                <RenderTeamMember
                  name="Suriya"
                  role="Full Stack Developer"
                  description="Suriya brings a holistic approach to Full Stack Development, adeptly managing databases, server configurations, and responsive front-end designs. Their skill set includes a comprehensive understanding of modern tech stacks and a focus on efficient coding practices."
                  imageSrc="assets/img/team/suriya1.jpg"
                />

                <RenderTeamMember
                  name="Tamilselvan Padmanabhan"
                  role="Full Stack Developer"
                  description="Tamil, a seasoned Full Stack Developer, excels in building adaptable and user-friendly interfaces while seamlessly integrating complex backend functionalities. Their expertise spans various frameworks, enabling innovative and efficient solutions."
                  imageSrc="assets/img/team/profile.jpg"
                />

                <RenderTeamMember
                  name="Sindhuja"
                  role="Front End Developer"
                  description="Sindhuja, an adept Front-End Developer, specializes in crafting visually stunning and intuitive user interfaces. Her skill set includes leveraging modern design principles and implementing front-end technologies to create engaging and user-centric web experiences. Sindhuja's attention to detail ensures the delivery of captivating and seamless designs."
                  imageSrc="assets/img/team/profile.jpg"
                />

                <RenderTeamMember
                  name="Gokul Shankar"
                  role="Back End Developer"
                  description="Gokul Shankar is our proficient Backend Developer, leading the way in developing robust server-side solutions. With a deep understanding of backend technologies, Gokul Shankar is instrumental in creating the backbone of our web applications. Their expertise ensures that our projects run smoothly, efficiently, and securely, providing a strong foundation for our clients' digital success."
                  imageSrc="assets/img/team/profile.jpg"
                />

                <RenderTeamMember
                  name="Monika"
                  role="QA(Quality Assurance)"
                  description="Monika is our meticulous QA expert, dedicated to ensuring the quality and reliability of our digital solutions. With a keen eye for detail, Monika rigorously tests and evaluates our projects to guarantee they meet the highest standards. Their commitment to quality assurance plays a critical role in delivering error-free and top-notch software products to our clients."
                  imageSrc="assets/img/team/profile.jpg"
                />

                <RenderTeamMember
                  name="Priyadharshini"
                  role="Web Designer"
                  description="Priyadharshini, a skilled Web Designer, excels in curating visually compelling and user-centric web interfaces. Her designs reflect a harmonious blend of aesthetics and functionality, delivering engaging and intuitive digital experiences that captivate users. Priyadharshini's expertise ensures seamless navigation and visually striking designs across web platforms."
                  imageSrc="assets/img/team/profile.jpg"
                />

                <RenderTeamMember
                  name="Gaythri"
                  role="HR"
                  description="Gaythri is our HR Representative, dedicated to fostering a positive and inclusive workplace environment. With a passion for people and strong communication skills, Gaythri plays a crucial role in our company's success. Kowsalya is responsible for recruitment, employee relations, and ensuring that our team members have the support they need to thrive. His commitment to employee satisfaction and well-being makes our workplace a great place to grow."
                  imageSrc="assets/img/team/profile.jpg"
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
