import { Link } from "react-router-dom";
import Accordion from "./accordion-module";

function FAQ() {
  return (
    <>
      {/* change bg later */}
      <div className="faq-bg bg-body-secondary">
        <div className="container py-5">
          {/* heading */}
          <div className="text-center">
            <h1 className="fw-bold libertinus-math-regular">
              Frequently Asked Questions
            </h1>
            <span
              className="d-block bg-light-blue rounded mx-auto mb-3"
              style={{ width: "75px", height: "3px" }}
            ></span>
            <i className="d-block text-body-secondary">
              Have questions? We've answered the ones we hear most from aspiring
              developers.
            </i>
          </div>

          {/* accordion start */}
          <div
            className="accordion col-12 col-sm-9 col-lg-8 mx-auto my-3"
            id="accordionExample"
            data-aos="flip-up"
          >
            <Accordion
              heading="Do I need any programming experience?"
              content="Not at all.
              Our beginner-friendly courses are designed for students with 
              little or no prior experience. We guide you step by step from 
              the fundamentals to building real-world projects."
              id="collapseOne"
            />
            <Accordion
              heading="What courses do you offer?"
              content="We offer training in HTML & CSS, JavaScript (ES6), React.js, 
              Node.js, Java, Bootstrap, and Data Structures & Algorithms, 
              helping students build strong full-stack development skills."
              id="collapseTwo"
            />
            <Accordion
              heading="Are the classes online or physical?"
              content="We offer both physical and online learning options, 
              allowing students to choose the format that best fits their schedule and location."
              id="collapseThree"
            />
            <Accordion
              heading="Will I build real projects?"
              content="Absolutely! Practical learning is at the heart of our 
              training. You'll work on real-world projects that strengthen your skills 
              and prepare you for interviews and professional work."
              id="collapseFour"
            />
            <Accordion
              heading="How do I enroll?"
              content="Getting started is simple. Contact us through our website or social media, 
              choose your preferred course, and our team will guide you through the registration process."
              id="collapseFive"
            />
          </div>
          {/* accordion end */}

          {/* button */}
          <div className="text-center">
            <div>
              <i className="d-block fw-bold">Still have questions?</i>
              <span className="d-block">
                We're happy to help! Reach out to us and our team will get back
                to you as soon as possible.
              </span>
            </div>
            <div className="pt-4" data-aos="fade-up">
              <Link
                className="px-4 py-3 fw-bold nav-acct-links rounded-pill bg-vibrant-yellow"
                to="/contact"
              >
                Contact Us
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
