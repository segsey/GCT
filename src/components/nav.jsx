import companyLogo from "../assets/images/logo-with-text.png";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar md:navbar-expand nav-underline sticky-top">
      <div className="container navbar-glass rounded-pill py-1" id="navbar">
        <NavLink className="navbar-brand" to="/">
          <img src={companyLogo} className="img-fluid" width="75px" alt="" />
        </NavLink>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="drawer"
          data-bs-target="#navbarDrawer"
          aria-controls="navbarDrawer"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-3" />
        </button>
        <dialog
          className="drawer drawer-end"
          tabIndex="-1"
          id="navbarDrawer"
          aria-labelledby="navbarDrawerLabel"
        >
          <div className="drawer-header">
            <h5 className="drawer-title" id="navbarDrawerLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="drawer"
              aria-label="Close"
            ></button>
          </div>
          <div className="drawer-body mb-2 md:mb-0">
            <ul className="nav navbar-nav mx-auto gap-3 lg:gap-5">
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
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/courses">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  type="button"
                  data-bs-toggle="menu"
                  aria-expanded="false"
                >
                  Menu
                </button>
                <div className="menu">
                  <a className="menu-item" href="#">
                    Action
                  </a>
                </div>
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
        </dialog>
      </div>
    </nav>
  );
}

export default Nav;
