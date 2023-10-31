import React, { useEffect } from "react";
import Sectionheader from "../components/Sectionheader";
import { v4 as uuidv4 } from "uuid";
import { trackEvent, identifyUser } from "../utils/mixpanelUtil";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Blogs() {
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
    trackEvent("Blogs Page Visited");
    /* eslint-disable */
  }, []);
  /* eslint-enable */

  return (
    <>
      <section id="contact" className="contact mt-5">
        <div className="container">
          <Sectionheader title={"Blogs"} />
          <div>
            <div>
              <div className="row">
                <p className="section-title">
                  <b>Startup Development Using Lean Startup Methodology</b>
                </p>
                <br />
                <br />
                <div className="col-lg-6">
                  <br />
                  <LazyLoadImage
                    src={"assets/img/blogs.jpeg"}
                    alt=""
                    effect="blur"
                    style={{ width: "100%", maxWidth: "500px", height: "auto" }}
                  />
                </div>
                <div className="col-lg-6">
                  <p>
                    While the term "startup" has grown in popularity recently,
                    many are still unclear about its exact definition. There are
                    various interpretations, but we'll focus on the one most
                    relevant to our discussion, without delving into extraneous
                    details. Why emphasize conditions of extreme uncertainty?
                    It's because the traditional approach to building startups
                    often relies heavily on assumptions (about product
                    functionality, the necessary budget, how the product will
                    operate, etc.).
                  </p>
                  <br />
                  <p>
                    These assumptions frequently miss the mark. The Lean Startup
                    methodology suggests a process for startup development,
                    visually represented as evolving product stages (starting
                    with a basic version like a scooter). At its core, the
                    methodology champions the concept of a minimum viable
                    product (MVP).This approach allows startups to progressively
                    refine their product by gathering user feedback, iterating
                    on features, and enhancing the product's capabilities. This
                    cycle continues until the product reaches its optimal
                    version.
                  </p>
                  <br />
                  <p>
                    The Lean Startup method addresses the challenges of startup
                    development by promoting incremental progress, allowing
                    startups to start small and expand gradually. This approach
                    avoids the pitfalls of attempting everything at once,
                    disregarding high costs or complexities. By continuously
                    integrating user feedback, we craft the perfect product for
                    our audience. Plus, this method ensures faster results at a
                    more affordable cost, greatly benefiting our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="section-title">
                <b>
                  Startup development using Lean Startup method has the
                  following stages:
                </b>
              </p>
              <br />
              <br />

              <div className="row">
                <div className="col-lg-6">
                  <p>
                    Using our company as an illustration, here's a breakdown of
                    the stages in app/startup development. When a client
                    approaches us with a concept, our journey begins. We engage
                    in a dialogue, assess their vision, and scrutinize their
                    specifications. This phase involves pinpointing the
                    project's primary goals, conceptualizing the idea, and
                    settling on the most fitting type of app for the initiative.
                    Subsequently, we craft design blueprints, utilizing tools
                    like Invision or Sketch, while also delineating the
                    impending app's structure. We then concentrate on the core
                    features of the product. Utilizing a tool called Backlog,
                    intrinsic to the Agile framework, we list out pivotal tasks
                    and app functionalities. Once these tasks are outlined, we
                    present them to our client who then ranks them based on
                    their priorities.
                  </p>
                  <br />
                  <p>
                    This not only determines the app's development sequence but
                    also takes the budget into consideration. The Backlog, after
                    being drafted, is finalized with the client's endorsement.
                    With the tasks in hand, we chalk out timelines for their
                    execution and determine the features that will constitute
                    the app's initial release (MVP).Just to reiterate, the MVP
                    is a central tenet of the Lean Startup methodology.
                    Typically, the developmental phase spans two months, given
                    that the prime aim of the Lean Startup technique is to get
                    the app to market swiftly, even if it means forgoing
                    exhaustive testing. Once this is accomplished, we allocate
                    about a month for the refinement of the MVP, which includes
                    identifying and rectifying glitches and prepping the app for
                    its launch.
                  </p>
                  <br />
                  <p>
                    Following its debut, we gather user feedback to discern its
                    strengths and areas for improvement. What makes our approach
                    stand out is our commitment to offering pre-launch marketing
                    assistance to our clients, and also setting up essential
                    data tracking mechanisms to analyze the project's
                    performance. In essence, adopting the Lean Startup
                    methodology, our developmental timeline typically spans
                    around four months: a fortnight to a month for preliminary
                    planning, design, and structural framework, a couple of
                    months for the actual app development, and a concluding
                    month for testing and refining. The Lean Startup
                    methodology, with its focus on efficient timelines,
                    budgeting, and product perfection, offers a significant
                    edge, particularly when juxtaposed against conventional
                    startup developmental practices.
                  </p>
                </div>
                <div className="col-lg-6">
                  <br />
                  <br />
                  <LazyLoadImage
                    src={"/assets/img/release2.png"}
                    alt=""
                    effect="blur"
                    style={{ width: "100%", maxWidth: "500px", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="how-we-work container mx-auto md:lg:mt-40 lg:mt-40 xl:mt-40 2xl:mt-40 mt-20">
                <p className="section-title text-center text-heading text-brandblue-dark px-20 mb-20 hide-desktop-items-block">
                  <b>How we work:</b>
                </p>
                <br />
                <LazyLoadImage
                  src={"assets/img/how-we-work.png"}
                  alt=""
                  effect="blur"
                  // style={{ width: "100%", maxWidth: "500px", height: "auto" }}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
