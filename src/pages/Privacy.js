import React from "react";
import { Link } from "react-router-dom";
import Sectionheader from "../components/Sectionheader"


function Privacy() {
  return (
    <>
      <section className="mt-5">
        <div className="container">
        <Sectionheader
            title={"Privacy Policy"}
          />
          <div>
              <h3>1. Definitions</h3>
              <p>
                Driftmark Technology, seated in Kadirimangalam, Tirupathur,
                Tamil Nadu 635653,India (hereinafter referred to as: “Driftmark
                Technology”, “we”, “us”, “our”) refers to the legal entity
                governing the websites 
                <span>
                  <Link to="/" target="_blank">
                    www.driftmarktechnology.com
                  </Link>
                </span>{" "}
                Personal data – means data referring to private persons who can
                be identified at some point.
              </p>
              <h3>2. About us</h3>
              <p>
                This website is the property of Driftmark Technology web design
                and development agency, seated in Kadirimangalam, Tirupathur,
                Tamil Nadu 635653, India Driftmark Technology is a privately
                held company: E-mail:{" "}
                <Link
                  to="mailto:contact@driftmarktechnology.com"
                  onClick={(e) => {
                    window.location.href =
                      "mailto:contact@driftmarktechnology.com";
                    e.preventDefault();
                  }}
                >
                  contact@driftmarktechnology.com
                </Link>{" "}
              </p>
              <h3>3. Relevant legislation</h3>
              <p>
                This web page was designed with respect to the relevant
                international legislation as regards data protection and privacy
                of its users
              </p>
              <h3>4. Who collects and processes information</h3>
              <p>
                On the basis of GDPR, every website user can make a choice: to
                accept or decline the collection of their personal data by the
                website. Driftmark Technology collects and processes only the
                necessary data about users who have voluntarily accepted and
                given consent to such data processing, with a clearly stated
                purpose, in accordance with the procedures governed by
                legislation.
              </p>
              <h3>5. Data collection:</h3>
              <h5>5.1. Contact or order forms</h5>
              <p>
                When you contact us via the contact form, order form or email,
                your personal data will be collected only upon your written
                consent, by ticking the box which states that you have read and
                accepted or declined our Privacy Policy and our Cookie Policy,
                which is why we kindly ask you to read these two pages
                thoroughly. This data will be stored and processed only for the
                purpose of answering all your queries or getting in contact with
                you for business purposes and the related technical
                administration. Such data includes your name, email address
                (hereinafter referred to as: email), phone number, location,
                description of your needs and other information you choose to
                give us. Your data will be completely deleted upon your request,
                and we will not store or use them after we no longer need them.
                Upon your written request, we will send you the information
                about the data we have collected and stored about you until that
                moment, incorporated in an electronic form.
              </p>
              <h5>5.2. Website hosting servers.</h5>
              <p>
                This company and its data center/server are protected by the
                following: Fire protection Early warning system directly
                connected with a local fire brigade Special door lockdown
                systems 24/7 assistance of qualified personnel Electronic access
                terminal entry via a transponder key or access card Modern CCTV
                with 24/7 surveillance of access pathways DDOS protection DIN
                ISO/IEC 27001 certification Internationally approved information
                safety standard When you visit our web page, our web server
                stores usage data from your computer or general information
                about your visit but is not able to recognize or store any
                individual personal data. We cannot identify you personally
                unless you willingly give us your personal data. Personal data
                is gathered only if you voluntarily publish such data for
                agreement purposes or setting up a client account. The traffic
                (file transferring) between this web page and your search engine
                is encrypted and delivered entirely via HTTPS. HyperText
                Transfer Protocol Secure (HTTPS) refers to an internet protocol
                which combines HTTP and SSL/TLS protocols. This protocol enables
                an encrypted communication and safe identification of the
                Internet Service Provider (ISP). Cookie policy and data
                collection via cookies Whenever you browse a web location,
                mobile app or use any other Internet service, certain
                information is created and verified upon your approval, that is,
                having accepted the Terms of Use. This is also valid in case of
                visiting Driftmark Technology website. Here is a piece of
                information we gather: Similarly to the majority of websites, we
                use Google Analytics (GA) for user interaction tracking. We use
                this data to count the number of visits, that is the number of
                users who visit our website, and to understand their needs
                better so as to improve user experience (UX). For more
                information about these rules, please visit our Cookie
                Policy webpage.
              </p>
              <h3>6. What we know about you</h3>
              <p>
                We gather only data for which you have given us your consent.
                For example, we do not know your email address unless you send
                it to us via email or contact forms. This data is used only
                within our company and we do not sell it nor distribute it to
                third parties. If you have already given us your email but do
                not wish to receive any emails or newsletters in the future, you
                can contact us via{" "}
                <Link
                  to="mailto:contact@driftmarktechnology.com"
                  onClick={(e) => {
                    window.location.href =
                      "mailto:contact@driftmarktechnology.com";
                    e.preventDefault();
                  }}
                >
                  contact@driftmarktechnology.com
                </Link>{" "}
                email and ask for your personal data removal.
              </p>
              <h3>7. How long we keep your data</h3>
              <p>
                We keep your information no longer than it is necessary for us
                to provide you with the service and accomplish the purposes set
                out in this Policy. If the conditions for keeping your data are
                no longer applicable, we will completely remove and delete them
                from our databases.
              </p>
              <h3>8. Third party data processing</h3>
              <p>
                We collaborate with third party data processors who process data
                on our behalf. These third parties are carefully selected and
                act in accordance with the laws referred to in Section 3. Google
                (Privacy policy) MailChimp (Privacy policy) Facebook (Privacy
                policy) 9. Data breaches We will inform our users about any
                unlawful data breaches of this website’s database or databases
                of any of our third-party data processors and report such events
                to all relevant persons within our company and to the
                authorities within 72 hours of the breach if it is obvious to us
                that personal data stored in an identifiable manner has been
                stolen.
              </p>
              <h3>10. Amendments to this</h3>
              <p>
                Privacy policy Driftmark Technology can amend this Privacy
                Policy as needed. This Policy was drawn up and updated on August
                28, 2018. Driftmark Technology keeps the right to change this
                Privacy Policy when necessary, in order to align and act in
                accordance with amendments to relevant legislation and
                regulations. Should such amendments or changes occur, we will
                not explicitly inform our clients or website users thereof.
                Instead, we recommend you to visit this page occasionally to
                stay informed about the changes to this Policy. If you think
                that Driftmark Technology does not abide by this Privacy Policy,
                please contact us via our Contact page.
              </p>
            </div>
          </div>
      </section>
    </>
  );
}

export default Privacy;
