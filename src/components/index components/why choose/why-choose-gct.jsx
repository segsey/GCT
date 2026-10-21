import { Link } from "react-router-dom";

import WhyChooseCard from "./whychooseCardModule";
import WhyChooseCardArr from "./WhyChooseCardArr";
import StatsCardModule from "./StatsCardModule";
import peopleCoding from "../../../assets/images/people-coding.jpg";

function WhyChooseGCT() {
  return (
    <>
      <div className="bg-body-secondary py-5">
        <div className="container">
          {/* heading */}
          <div className="text-center pb-4">
            <h6>
              <span className="px-2 py-1 heading-pill rounded-pill text-white">
                WHY CHOOSE US
              </span>
            </h6>
            <h1 className="fw-bold">
              Why Choose GCTechies?
              <span
                className="d-block bg-light-blue rounded mx-auto mt-2"
                style={{ width: "65px", height: "3px" }}
              ></span>
            </h1>
          </div>

          <div className="row justify-content-center align-items-stretch">
            <div className="col-12 col-lg-6 mb-2 mx-auto align-self-center">
              <div className="h-100">
                <img
                  src={peopleCoding}
                  className="img-fluid shadow-sm rounded"
                />
              </div>
            </div>

            <div className="col-12 col-lg-6 align-self-center">
              <div className="row g-2 align-items-stretch h-100">
                {WhyChooseCardArr.map((item) => {
                  return <WhyChooseCard key={item.id} item={item} />;
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="d-flex justify-content-around mt-4 py-2 px-1 py-sm-3 px-sm-2 text-center bg-white rounded shadow">
            <StatsCardModule
              detail="Students Trained"
              icon="bi bi-mortarboard"
              figure="250+"
            />
            <div className="vr my-2" />
            <StatsCardModule
              detail="Courses Offered"
              icon="bi bi-book"
              figure="10+"
            />
            <div className="vr my-2" />
            <StatsCardModule
              detail="Practical Learning"
              icon="bi bi-graph-up-arrow"
              figure="95%"
            />
            {/* <div className="vr my-2 d-none d-sm-block" />
            <StatsCardModule
              detail="Project Based"
              icon="bi bi-bookmarks"
              figure="100%"
              optional="d-none d-sm-block"
            /> */}
          </div>
        </div>

        <div className="text-center mt-5">
          <Link
            className="px-4 py-3 fw-bold nav-acct-links rounded-pill bg-vibrant-yellow"
            to="/signIn"
          >
            Join GCT
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default WhyChooseGCT;
