import { Link } from "react-router-dom";
import graphicImage from "../../assets/images/6495319.jpg";
function MissionAndVal() {
  return (
    <>
      <div className="py-12">
        <div className="container col-11 col-12-sm mx-auto py-12 bg-1 rounded shadow">
          <div className="d-flex flex-wrap md:flex-nowrap align-items-stretch">
            <div className="md:col-6">
              <div className="p-3">
                {/* missions */}
                <div>
                  <div className="h1 fw-bold">
                    Our Missions
                    <span
                      className="d-block bg-light-blue rounded ms-2 mt-1 mb-3"
                      style={{ width: "65px", height: "3px" }}
                    ></span>
                  </div>
                  <p className="fs-lg">
                    To empower students with modern technology skills through
                    practical, industry-focused training that prepares them for
                    meaningful careers and lifelong growth in the digital world.
                  </p>
                </div>

                {/* vision */}
                <div>
                  <div className="h1 fw-bold">
                    Our Vision
                    <span
                      className="d-block bg-light-blue rounded ms-2 mt-1 mb-3"
                      style={{ width: "65px", height: "3px" }}
                    ></span>
                  </div>
                  <p className="fs-lg">
                    To become the leading technology training institution in
                    Abeokuta and beyond, raising a generation of confident
                    innovators, developers, and problem-solvers who create
                    positive impact through technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="vr mx-3 d-none md:d-block"></div>
            <div className="align-self-center text-center">
              <img
                src={graphicImage}
                className="img-fluid rounded w-75 shadow-lg"
                alt="image"
              />
            </div>
          </div>
          <div className="text-center mt-9">
            <Link
              className="px-6 py-5 nav-acct-links rounded-pill bg-vibrant-yellow"
              to="/contact"
            >
              Contact Us
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MissionAndVal;
