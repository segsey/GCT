import { Link } from "react-router-dom";
import WhatWeBelieveCard from "./whatWeBelieveCard";

let arr = [
  {
    icon: "bi-laptop",
    heading: "Practical Learning",
    description:
      "We believe technology is best learned by building real projects, not just reading theory.",
  },
  {
    icon: "bi-person-heart",
    heading: "Every Student Matters",
    description:
      "Every learner deserves encouragement, patience, and guidance tailored to their pace.",
  },
  {
    icon: "bi-graph-up-arrow",
    heading: "Growth Through Consistency",
    description:
      "Small daily improvements lead to extraordinary results over time.",
  },
  {
    icon: "bi-journal-bookmark",
    heading: "Learning Never Stops",
    description:
      "Technology evolves every day, and we believe our students should always stay ahead.",
  },
];

function WhatWeBelieve() {
  return (
    <>
      <div className="bg-1">
        <div className="container py-12">
          <div className="h1 text-center">
            What We Believe
            <span
              className="d-block bg-light-blue mx-auto rounded mt-2 mb-4"
              style={{ width: "75px", height: "3px" }}
            ></span>
          </div>

          <div className="d-flex flex-wrap md:flex-nowrap justify-content-center align-items-stretch my-4 gap-3 md:6">
            {arr.map((item, index) => {
              return <WhatWeBelieveCard key={index} item={item} />;
            })}
          </div>

          <div className="text-center">
            <Link
              className="px-6 py-5 nav-acct-links rounded-pill bg-vibrant-yellow"
              to="/courses"
            >
              Explore Our Courses
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatWeBelieve;
