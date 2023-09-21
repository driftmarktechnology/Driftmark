import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Sectionheader from "../components/Sectionheader";
import { v4 as uuidv4 } from "uuid";
import { trackEvent, identifyUser } from "../utils/mixpanelUtil";

function Team() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  const [isExpandedSujitha, setIsExpandedSujitha] = useState(false);
  const [isExpandedNaveen, setIsExpandedNaveen] = useState(false);
  const [isExpandedKowsalya, setIsExpandedKowsalya] = useState(false);
  const [isExpandedSuriya, setIsExpandedSuriya] = useState(false);

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
  }, []);

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
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="member">
                    <img
                      src="/assets/img/team/director1.jpeg"
                      alt=""
                      className="image-fluid"
                    />
                    <h4>Kesavan Sujitha</h4>
                    <h6>Director</h6>
                    <p>
                      Kesavan Sujitha is the Director of our company, bringing
                      extensive expertise and leadership to our team.
                      {!isExpandedSujitha && (
                        <>
                          With a background in software development...{" "}
                          <p
                            onClick={() => setIsExpandedSujitha(true)}
                            class="read-more"
                          >
                            Show more
                          </p>
                        </>
                      )}
                      {isExpandedSujitha && (
                        <>
                          With a background in software development and a deep
                          understanding of the industry, Sujitha is dedicated to
                          driving our company's success. Sujitha's strategic
                          vision and commitment to excellence have been
                          instrumental in guiding our projects to success. Under
                          her leadership, our team consistently delivers
                          high-quality digital solutions that meet and exceed
                          client expectations.
                          <p
                            onClick={() => setIsExpandedSujitha(false)}
                            class="read-more"
                          >
                            Show less
                          </p>
                        </>
                      )}
                    </p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="member">
                    <img
                      src="/assets/img/team/naveen2.jpeg"
                      alt=""
                      className="image-fluid"
                    />
                    <h4>Murugesan Naveen</h4>
                    <h6>Director</h6>
                    <p>
                      Murugesan Naveen is a Director at our company and plays a
                      pivotal role in our success.
                      {!isExpandedNaveen && (
                        <>
                          With a wealth of experience...{" "}
                          <p
                            onClick={() => setIsExpandedNaveen(true)}
                            class="read-more"
                          >
                            Show more
                          </p>
                        </>
                      )}
                      {isExpandedNaveen && (
                        <>
                          With a wealth of experience and a strong passion for
                          technology, Naveen is committed to driving innovation
                          and excellence in our projects. Naveen's leadership
                          has been instrumental in steering our team towards
                          delivering cutting-edge digital solutions. His
                          dedication to quality and client satisfaction ensures
                          that our projects consistently meet the highest
                          standards.
                          <p
                            onClick={() => setIsExpandedNaveen(false)}
                            class="read-more"
                          >
                            Show less
                          </p>
                        </>
                      )}
                    </p>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="member">
                    <img src="assets/img/team/hr3.jpeg" alt="" />
                    <h4>Kowsalya</h4>
                    <h6>HR</h6>
                    <p>
                      Kowsalya is our HR Representative, dedicated to fostering
                      a positive and inclusive workplace environment.
                      {!isExpandedKowsalya && (
                        <>
                          With a passion for people and strong communication...{" "}
                          <p
                            onClick={() => setIsExpandedKowsalya(true)}
                            class="read-more"
                          >
                            Show more
                          </p>
                        </>
                      )}
                      {isExpandedKowsalya && (
                        <>
                          With a passion for people and strong communication
                          skills, Kowsalya plays a crucial role in our company's
                          success. Kowsalya is responsible for recruitment,
                          employee relations, and ensuring that our team members
                          have the support they need to thrive. His commitment
                          to employee satisfaction and well-being makes our
                          workplace a great place to grow.
                          <p
                            onClick={() => setIsExpandedKowsalya(false)}
                            class="read-more"
                          >
                            Show less
                          </p>
                        </>
                      )}
                    </p>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="member">
                    <img src="assets/img/team/profile.jpg" alt="" />
                    <h4>Suriya</h4>
                    <h6>Frontend Developer</h6>
                    <p>
                      Suriya is our skilled Frontend Developer, responsible for
                      bringing our web projects to life with creativity and
                      precision.
                      {!isExpandedSuriya && (
                        <>
                          With a passion for crafting user-friendly...{" "}
                          <p
                            onClick={() => setIsExpandedSuriya(true)}
                            class="read-more"
                          >
                            Show more
                          </p>
                        </>
                      )}
                      {isExpandedSuriya && (
                        <>
                          With a passion for crafting user-friendly and visually
                          appealing interfaces, Suriya is at the forefront of
                          turning design concepts into interactive and
                          responsive web applications.
                          <p
                            onClick={() => setIsExpandedSuriya(false)}
                            class="read-more"
                          >
                            Show less
                          </p>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
