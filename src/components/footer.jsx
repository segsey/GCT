import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={{ background: "#0b0b1f", fontSize: "smaller" }}>
      <div className="container py-5 px-3 px-md-0">
        <div className="row gy-4 text-white">
          {/* Brand */}
          <div className="col-sm-4 col-lg-4">
            <h4 className="fw-bold">GCTechies</h4>
            <div className="mt-2 mt-md-3">
              Empowering aspiring developers with practical, hands-on training
              in modern web technologies. Learn, build, and launch your tech
              career with confidence.
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-sm-2 col-lg-2">
            <h6 className="text-white mb-2 mb-md-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-decoration-none text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-decoration-none text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-decoration-none text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="col-6 col-sm-3 col-lg-3">
            <h6 className="text-white mb-2 mb-md-3">Popular Courses</h6>
            <ul className="list-unstyled">
              <li>HTML & CSS</li>
              <li>JavaScript (ES6)</li>
              <li>React JS</li>
              <li>Node JS</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-sm-3 col-lg-3">
            <h6 className="text-white mb-2 mb-md-3">Get In Touch</h6>
            <p className="mb-2">
              <i className="bi bi-envelope-fill me-2"></i>
              info@gctechies.com
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone-fill me-2"></i>
              +234 803 426 2759
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white fs-6">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="#" className="text-white fs-6">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white fs-6">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white fs-6">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-white my-3 my-md-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-white text-center text-md-start">
          <div>© 2026 Genius Computer Technologies. All Rights Reserved.</div>
          <div className="mt-2 mt-md-0">...we make solutions better</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
