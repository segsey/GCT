import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={{ background: "#0b0b1f" }}>
      <div className="container py-12 px-9 md:px-0">
        <div className="row gy-4 fg-white">
          {/* Brand */}
          <div className="sm:col-4 lg:col-4">
            <h4 className="fw-bold">GCTechies</h4>
            <div className="mt-2 mt-md-3">
              Empowering aspiring developers with practical, hands-on training
              in modern web technologies. Learn, build, and launch your tech
              career with confidence.
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 sm:col-2 lg:col-2">
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
          <div className="col-6 sm:col-3 lg:col-3">
            <h6 className="text-white mb-2 mb-md-3">Popular Courses</h6>
            <ul className="list-unstyled">
              <li>HTML & CSS</li>
              <li>JavaScript (ES6)</li>
              <li>React JS</li>
              <li>Node JS</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-3 lg:col-3">
            <h6 className="fg-white mb-2 mb-md-3">Get In Touch</h6>
            <p className="mb-2">
              <i className="bi bi-envelope-fill me-2"></i>
              info@gctechies.com
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone-fill me-2"></i>
              +234 803 426 2759
            </p>
            <div className="d-flex gap-5 mt-3">
              <a href="#" className="text-white fs-lg">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="#" className="text-white fs-lg">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white fs-lg">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white fs-lg">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-white my-3 md:my-4" />

        <div className="d-flex flex-column md:flex-row justify-content-between align-items-center text-white text-center md:text-start">
          <div>© 2026 Genius Computer Technologies. All Rights Reserved.</div>
          <div className="mt-2 md:mt-0">...we make solutions better</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
