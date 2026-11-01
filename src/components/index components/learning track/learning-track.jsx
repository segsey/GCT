import LearningTrackCard from "./learning-track-card-module";
import backendImg from "../../../assets/learning-track/backend.jpg";
import frontendImg from "../../../assets/learning-track/frontend.jpg";
import dsaImg from "../../../assets/learning-track/dsa.jpg";
import programmingImg from "../../../assets/learning-track/programming-fundamentals.jpg";
import {
  frontendSkills,
  backendSkills,
  programmingFundamentals,
  dsa,
} from "./skillBadge.jsx";

function LearningTrack() {
  return (
    <>
      {/* our learning track start */}
      <div className="container py-12">
        {/* heading */}
        <div className="text-center my-5">
          <div className="h1 libertinus-math-regular fw-bold">
            Our Learning Tracks
          </div>
          <i className="d-block mx-auto" style={{ maxWidth: "620px" }}>
            Acquire job-ready software development skills with hands-on training
          </i>
        </div>

        <div className="row g-7 justify-content-center align-items-stretch">
          <LearningTrackCard
            image={frontendImg}
            title="Frontend Development"
            summary="Build beautiful, responsive websites and web apps."
            description="Learn HTML, CSS, Bootstrap, JavaScript (ES6), and React to create modern user interfaces that work seamlessly across devices."
            skills={frontendSkills}
          />

          <LearningTrackCard
            image={backendImg}
            title="Backend Development"
            summary="Create powerful server-side applications and APIs."
            description="Master Node.js, Express.js, RESTful APIs, and databases to build robust backend systems that power web applications."
            skills={backendSkills}
          />

          <LearningTrackCard
            image={dsaImg}
            title="Data Structures & Algorithms"
            summary="Master essential data structures and algorithms."
            description="Learn fundamental data structures and algorithms to solve complex problems efficiently."
            skills={dsa}
          />

          <LearningTrackCard
            image={programmingImg}
            title="Programming Fundamentals"
            summary="Build a strong foundation in programming concepts."
            description="Learn essential programming principles and techniques that apply across different languages and domains."
            skills={programmingFundamentals}
          />
        </div>
      </div>
      {/* our learning track end */}
    </>
  );
}

export default LearningTrack;
