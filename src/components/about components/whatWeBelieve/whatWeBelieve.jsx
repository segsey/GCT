import WhatWeBelieveCard from "./whatWeBelieveCard";

let arr = [
  {
    id: 0,
    icon: "bi-laptop",
    heading: "Practical Learning",
    description:
      "We believe technology is best learned by building real projects, not just reading theory.",
  },
  {
    id: 1,
    icon: "bi-person-heart",
    heading: "Every Student Matters",
    description:
      "Every learner deserves encouragement, patience, and guidance tailored to their pace.",
  },
  {
    id: 2,
    icon: "bi-graph-up-arrow",
    heading: "Growth Through Consistency",
    description:
      "Small daily improvements lead to extraordinary results over time.",
  },
  {
    id: 3,
    icon: "bi-journal-bookmark",
    heading: "Learning Never Stops",
    description:
      "Technology evolves every day, and we believe our students should always stay ahead.",
  },
];

function WhatWeBelieve() {
  return (
    <>
      <div className="bg-body-secondary">
        <div className="container py-5">
          <div className="h1 text-center">
            What We Believe
            <span
              className="d-block bg-light-blue mx-auto rounded mt-2 mb-4"
              style={{ width: "75px", height: "3px" }}
            ></span>
          </div>

          <div className="d-flex flex-wrap flex-md-nowrap justify-content-center align-items-stretch my-4 gap-3">
            {arr.map((arr) => {
              return <WhatWeBelieveCard key={arr.id} item={arr} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatWeBelieve;
