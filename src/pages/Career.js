import React from "react";
import Accordion from "../components/Accordion";

function Team() {
  return (
    <section id="team" class="team section-bg">
      <div class="container">
        <div class="section-title">
          <span>Career</span>
          <h2>Career</h2>
          <p>
            Driftmark Technologies, an offshore tech enterprise, prides itself
            on crafting robust, enduring software and web solutions. Our biggest
            asset? Our personnel. We believe in the principle that quality
            output requires quality input, and thus, we've sourced the best
            talent available. Recognizing the importance of cutting-edge
            solutions and impeccable customer relations, our team is a blend of
            dedication, expertise, and passion. Not only are our tech mavens
            well-versed with the latest global innovations, but they're also
            driven by a customer-first ethos, always willing to exceed
            expectations. To maintain our competitive edge, we prioritize
            ongoing professional development and regular performance assessments
            for our team. Thinking of a fulfilling and dynamic career path?
            Consider Driftmark Technologies. We're always open to discussions
            with prospective talents eager to be a part of our journey.
          </p>
          <div className="mt-5">
            <h2>Current Openings</h2>
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
