import React from "react";
import Sectionheader from "../components/Sectionheader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Marketing() {
  return (
    <section id="services" className="services mt-5 section-bg">
      <div className="container">
        <Sectionheader
          title={"Marketing"}
          subtitle={"Connecting People, Creating Success"}
        />
        <div>
          <div>
            <h3 className="section-title">
              <p className="theme-color-word">Social Media Marketing</p> at Its
              Best
            </h3>

            <div className="row">
              <div className="col-lg-6">
                <LazyLoadImage
                  src={"assets/img/marketing/marketing-social-media.png"}
                  alt=""
                  effect="blur"
                  className="img-fluid animated"
                />
              </div>
              <div className="col-lg-6">
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
          </div>
          <div className="contents mt-4 mb-5">
            <h3 className="section-title">
              E-Commerce<p className="theme-color-word"> Marketing</p>
            </h3>
            <div className="row">
              <div className="col-lg-6">
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
              <div className="col-lg-6">
                <LazyLoadImage
                  src={"assets/img/marketing/marketing-ecommerce.png"}
                  alt=""
                  effect="blur"
                  className="img-fluid animated"
                />
              </div>
            </div>
          </div>
          <div className="contents mt-4 mb-5">
            <h3 className="section-title">
              <p className="theme-color-word">Search Engine</p>{" "}
              Optimization(SEO)
            </h3>
            <div className="row">
              <div className="col-lg-6">
                <LazyLoadImage
                  src={"assets/img/marketing/marketing-seo.png"}
                  alt=""
                  effect="blur"
                  className="img-fluid animated"
                />
              </div>
              <div className="col-lg-6">
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
          </div>
          <div className="contents mt-4 mb-5">
            <h3 className="section-title">
              Content<p className="theme-color-word"> Writing</p>
            </h3>
            <div className="row">
              <div className="col-lg-6">
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
              <div className="col-lg-6">
                <LazyLoadImage
                  src={"assets/img/marketing/marketing-content-writing.png"}
                  alt=""
                  effect="blur"
                  className="img-fluid animated"
                />
              </div>
            </div>
          </div>
          <div className="contents mt-4 mb-5">
            <h3 className="section-title">
              <p className="theme-color-word">Email</p> Marketing
            </h3>
            <div className="row">
              <div className="col-lg-6">
                <LazyLoadImage
                  src={"assets/img/marketing/marketing-email.png"}
                  alt=""
                  effect="blur"
                  className="img-fluid animated"
                />
              </div>
              <div className="col-lg-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marketing;
