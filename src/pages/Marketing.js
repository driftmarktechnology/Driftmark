import React from "react";
import Sectionheader from "../components/Sectionheader"


function Services() {
  return (
    <section id="services" class="services section-bg">
      <div class="container">
      <Sectionheader
            title={"Marketing"}
            subtitle={"Connecting People, Creating Success"}
          />
        <div class="section-title">
          <section>
            <h3>Social Media Marketing at Its Best</h3>

            <div class="row">
              <div class="col-lg-6">
                <img
                  src="assets/img/marketing/marketing-social-media.png"
                  class="img-fluid animated"
                  alt=""
                />
              </div>
              <div class="col-lg-6">
                <p>
                  <br />
                  <br />
                  Social media marketing is a strategic approach to promoting
                  products, services, or brands through various social media
                  platforms and channels. It involves creating and sharing
                  content, engaging with the target audience, and analyzing data
                  to optimize marketing efforts. Social media marketing aims to
                  build brand awareness, drive website traffic, generate leads,
                  and foster customer engagement and loyalty.
                </p>
              </div>
            </div>
          </section>
          <section>
            <h3>E-Commerce Marketing</h3>
            <div class="row">
              <div class="col-lg-6">
                <p>
                  <br />
                  <br />
                  E-commerce marketing refers to the strategies and techniques
                  used to promote and sell products or services through online
                  stores or e-commerce platforms. It encompasses various digital
                  marketing approaches aimed at attracting customers, driving
                  sales, and optimizing the overall shopping experience.
                </p>
              </div>
              <div class="col-lg-6">
                <img
                  src="assets/img/marketing/marketing-ecommerce.jpg"
                  class="img-fluid animated"
                  alt=""
                />
              </div>
            </div>
          </section>
          <section>
            <h3>Search Engine Optimization(SEO)</h3>
            <div class="row">
              <div class="col-lg-6">
                <img
                  src="assets/img/marketing/marketing-seo.png"
                  class="img-fluid animated"
                  alt=""
                />
              </div>
              <div class="col-lg-6">
                <p>
                  <br />
                  Search Engine Optimization (SEO) is a set of strategies,
                  techniques, and practices aimed at improving a website's
                  visibility and ranking in search engine results pages (SERPs).
                  The primary goal of SEO is to increase organic (non-paid)
                  traffic to a website by making it more appealing and relevant
                  to search engines like Google, Bing, and Yahoo.
                </p>
              </div>
            </div>
          </section>
          <section>
            <h3>Content Writing</h3>
            <div class="row">
              <div class="col-lg-6">
                <p>
                  <br />
                  <br />
                  <br />
                  Content writing is the process of creating written material
                  for various digital and print platforms, including websites,
                  blogs, social media, marketing materials, and publications.
                  The primary goal of content writing is to engage, inform,
                  entertain, or persuade a target audience while effectively
                  conveying a message or information.
                </p>
              </div>
              <div class="col-lg-6">
                <img
                  src="assets/img/marketing/marketing-content-writing.png"
                  class="img-fluid animated"
                  alt=""
                />
              </div>
            </div>
          </section>
          <section>
            <h3>Email Marketing</h3>
            <div class="row">
              <div class="col-lg-6">
                <img
                  src="assets/img/marketing/marketing-email.png"
                  class="img-fluid animated"
                  alt=""
                />
              </div>
              <div class="col-lg-6">
                <p>
                  <br />
                  <br />
                  <br />
                  Email marketing is a digital marketing strategy that involves
                  sending targeted email messages to a group of recipients with
                  the goal of promoting products, services, events, or building
                  relationships with customers and prospects. Email marketing is
                  used by businesses and organizations to engage their audience,
                  nurture leads, drive sales, and deliver valuable content.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Services;
