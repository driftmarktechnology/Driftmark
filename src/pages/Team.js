import React,{useEffect} from "react";
import Confetti from "react-confetti";
import Sectionheader from "../components/Sectionheader"
import { v4 as uuidv4 } from 'uuid';
import { trackEvent, identifyUser } from '../utils/mixpanelUtil';


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
                      src="/assets/img/team/director.jpg"
                      width={"100%"}
                      alt=""
                      style={{ objectFit: "cover" }}
                      height="313"
                    />
                    <h4>Kesavan Sujitha</h4>
                    <h6>Director</h6>
                    <p>
                      Voluptas necessitatibus occaecati quia. Earum totam
                      consequuntur qui porro et laborum toro des clara
                    </p>
                    <div class="social">
                      <a href="">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="member">
                    <img src="/assets/img/team/naveen.jpg" alt="" />
                    <h4>Murugesan Naveen</h4>
                    <h6>Director</h6>
                    <p>
                      Magni qui quod omnis unde et eos fuga et exercitationem.
                      Odio veritatis perspiciatis quaerat qui aut aut aut
                    </p>
                    <div class="social">
                      <a href="">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="member">
                    <img src="assets/img/team/profile.jpg" alt="" />
                    <h4>Member</h4>
                    <span>Designation</span>
                    <p>
                      Voluptas necessitatibus occaecati quia. Earum totam
                      consequuntur qui porro et laborum toro des clara
                    </p>
                    <div class="social">
                      <a href="">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 d-flex align-items-stretch">
                  <div class="member">
                    <img src="assets/img/team/profile.jpg" alt="" />
                    <h4>Member</h4>
                    <span>Designation</span>
                    <p>
                      Voluptas necessitatibus occaecati quia. Earum totam
                      consequuntur qui porro et laborum toro des clara
                    </p>
                    <div class="social">
                      <a href="">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
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
