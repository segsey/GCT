import companyLogo from "../assets/images/logo-with-text.png";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg nav-underline sticky-top">
      <div className="container navbar-glass rounded-5 py-1" id="navbar">
        <a className="navbar-brand" href="./index.html">
          <img src={companyLogo} className="img-fluid" width="75px" alt="" />
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-3"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item dropdown d-flex">
              <NavLink className="nav-link text-white" to="/courses">
                Courses
              </NavLink>
              <button
                className="dropdown-toggle dropdown-toggle-split border-0 bg-transparent text-white p-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Drop Down</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item text-white" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-white" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          {/* nav-acct-links */}
          <div className="d-flex">
            <div>
              <NavLink
                className="px-3 py-2 nav-acct-links fw-bold"
                to="/signIn"
              >
                <span className="text-light-blue">Sign In</span>
              </NavLink>
            </div>
            <div>
              <NavLink
                className="px-3 py-2 nav-acct-links rounded-pill bg-vibrant-yellow"
                to="/enroll"
              >
                Enroll Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
