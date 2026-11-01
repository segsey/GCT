import { Link } from "react-router-dom";
import Accordion from "./accordionModule";
import AccordionArr from "./accordionArr";

function FAQ() {
  return (
    <>
      {/* change bg later */}
      <div className="faq-bg bg-body-secondary">
        <div className="container py-12">
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
          <div className="accordion theme-primary col-12 sm:col-9 lg:col-8 mx-auto my-6">
            {AccordionArr.map((item, index) => {
              return <Accordion key={index} item={item} />;
            })}
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
            <div className="pt-6" data-aos="fade-up">
              <Link
                className="px-7 py-5 fw-bold nav-acct-links rounded-pill bg-vibrant-yellow"
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
