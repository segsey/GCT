import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function EnrollForm() {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-11 mx-auto col-md-7 p-3 bg-body-secondary rounded shadow">
            <form
              className="d-flex flex-column gap-3 needs-validation"
              noValidate
            >
              {/* student name  */}
              <div className="d-flex flex-column mb-1">
                <div className="fw-bold h5 ps-1">
                  <i className="bi bi-person-circle"></i>
                  Student Name:
                </div>
                <div className="row justify-content-start">
                  <div className="col-md-6">
                    <div className="form-floating mb-2">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingFirstName"
                        placeholder="First Name"
                        required
                      />
                      <label htmlFor="floatingFirstName">First Name</label>
                      <div className="invalid-tooltip text-danger bg-transparent p-0">
                        Please enter your first name.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-2">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingLastName"
                        placeholder="Last Name"
                        required
                      />
                      <label htmlFor="floatingLastName">Last Name</label>
                      <div className="invalid-tooltip text-danger bg-transparent p-0">
                        Please enter your last name.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* contact info  */}
              <div className="d-flex flex-column">
                <div className="fw-bold h5 ps-1">
                  <i className="bi bi-person-lines-fill"></i>
                  Contact Info:
                </div>
                <div className="row justify-content-start">
                  <div className="col-md-6">
                    <div className="form-floating mb-2">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingEmail"
                        placeholder="Enter Your Email"
                        required
                      />
                      <label htmlFor="floatingEmail">Email</label>
                      <div className="invalid-tooltip text-danger bg-transparent p-0">
                        Please enter a valid email.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-2">
                      <input
                        type="tel"
                        className="form-control"
                        id="floatingPhone"
                        placeholder="Phone No."
                        pattern="(070|080|081|090|091)[0-9]{8}"
                        required
                      />
                      <label htmlFor="floatingPhone">Phone No.</label>
                      <div className="invalid-tooltip text-danger bg-transparent p-0">
                        Please enter a valid phone number.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* preferred course  */}
              <div className="d-flex flex-column">
                <div className="fw-bold h5 ps-1">
                  <i className="bi bi-pencil-square"></i>
                  Courses:
                </div>
                <div className="row justify-content-start">
                  {/* 1  */}
                  <div className="col-md-6">
                    <div className="ps-1 fw-bold">Program Selection:</div>
                    <div className="row ps-2">
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="htmlAndCSS"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="htmlAndCSS"
                          >
                            HTML
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="javascript"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="javascript"
                          >
                            JavaScript(ES6)
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="reactJS"
                          />
                          <label className="form-check-label" htmlFor="reactJS">
                            React JS
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="nodeJS"
                          />
                          <label className="form-check-label" htmlFor="nodeJS">
                            Node JS
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="dataStructuresAndAlgorithm"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="dataStructuresAndAlgorithm"
                          >
                            Data Structures And Algorithms
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*  2  */}
                  <div className="col-md-6">
                    <div className="ps-1 fw-bold">Learning Mode:</div>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radioDefault"
                            id="physicalClass"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="physicalClass"
                          >
                            Physical Class
                          </label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radioDefault"
                            id="onlineClass"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="onlineClass"
                          >
                            Online Class
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* submit  */}
              <div className="mx-auto">
                <button className="btn px-5 py-2 submit-btn rounded-pill bg-vibrant-yellow text-white fw-bold">
                  Confirm
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center mx-auto">
            <DotLottieReact
              src="../../public/animations/Learning Data.lottie"
              style={{ width: "300px", height: "300px" }}
              autoplay
              loop
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EnrollForm;
