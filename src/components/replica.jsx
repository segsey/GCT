import React from "react";

const replica = () => {
  return (
    <div className="container py-5 hero-video-bg">
      <div
        className="mx-auto text-center fw-bold mt-5 animate__animated animate__bounce"
        style={{ maxWidth: "550px", fontSize: "50px", lineHeight: "0.9" }}
      >
        Turning Learners Into{" "}
        <span className="text-vibrant-yellow">Confident, Skilled</span> Tech
        Creators.
      </div>
      <h6 className="d-block text-center my-4">
        Learn practical tech skills, build real projects, and grow with the
        confidence to create your future.
      </h6>

      <div className="d-flex gap-3 justify-content-center my-3">
        <Link
          to="/enroll"
          className="px-3 py-2 nav-acct-links rounded-pill bg-vibrant-yellow"
        >
          Get Started
        </Link>
        <Link
          to="/courses"
          className="px-3 py-2 nav-acct-links rounded-pill border border-warning-subtle text-dark"
        >
          View Courses
        </Link>
      </div>

      <div className="col-11 col-md-10 mx-auto py-3">
        <HeroMarqueeEffect />
      </div>

      <div className="text-center fw-bold bespokeSerif">
        GCT | We Make Solutions Better
      </div>
    </div>
  );
};

export default replica;
