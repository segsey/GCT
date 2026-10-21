function SignInBody() {
  return (
    <>
      <div className="hero-bg">
        <div className="container py-5">
          <div className="row pt-5 justify-content-center align-items-center">
            <div className="col-11 mx-auto col-md-6">
              <div className="text-center">
                <div className="h1 text-white mb-3 mb-sm-4">
                  Welcome Back To{" "}
                  <span className="text-light-blue">GCTechies</span>
                </div>
                <div className="h5 h4-sm text-white">
                  Continue learning with hands-on projects, expert mentorship,
                  and practical tech skills.
                </div>
              </div>
            </div>
            <div className="col-11 mx-auto col-md-6">
              <div className="bg-glass col-md-10 mx-auto rounded text-center text-white">
                {/* form  */}
                <div className="p-4 p-md-5">
                  <div className="h1 mb-4">
                    Login
                    <span
                      className="d-block bg-light-blue rounded mx-auto mt-2 mb-3"
                      style={{ width: "65px", height: "2px" }}
                    ></span>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="bi bi-person fs-5"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control form-control-md-lg"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="input-group mb-1">
                    <span className="input-group-text">
                      <i className="bi bi-lock fs-5"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control form-control-md-lg"
                      id="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="fs-6 text-start mb-4">
                    <small>
                      Don't have an account?
                      <a className="text-decoration-none" href="./sign-up.html">
                        sign up
                      </a>
                    </small>
                  </div>
                  <div>
                    <button className="btn px-5 py-2 submit-btn rounded-pill bg-vibrant-yellow text-white fw-bold">
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignInBody;
