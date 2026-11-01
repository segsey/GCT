import { Link } from "react-router-dom";
import HeroMarqueeEffect from "./heroMarqueeEffect";
import "../../../css/herovideobg.css";
const Hero = () => {
  return (
    <>
      <div
        className="py-12"
        style={{
          background: "white",
          backgroundImage: `
       linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
       linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
       radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
     `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      >
        <div className="container py-12 hero-video-bg">
          <div
            className="mx-auto text-center fw-bold mt-12 animate__animated animate__bounce"
            style={{ maxWidth: "550px", fontSize: "50px", lineHeight: "0.9" }}
          >
            Turning Learners Into{" "}
            <span className="text-vibrant-yellow">Confident, Skilled</span> Tech
            Creators.
          </div>
          <h6 className="d-block text-center my-7">
            Learn practical tech skills, build real projects, and grow with the
            confidence to create your future.
          </h6>

          <div className="d-flex gap-5 justify-content-center my-3">
            <Link
              to="/enroll"
              className="px-3 py-2 nav-acct-links rounded-pill bg-vibrant-yellow"
            >
              Get Started
            </Link>
            <Link
              to="/courses"
              className="px-3 py-2 nav-acct-links rounded-pill border border-warning-subtle fg-dark"
            >
              View Courses
            </Link>
          </div>

          <div className="col-11 md:col-10 mx-auto py-7">
            <HeroMarqueeEffect />
          </div>

          <div className="text-center fw-bold bespokeSerif">
            GCT | We Make Solutions Better
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
