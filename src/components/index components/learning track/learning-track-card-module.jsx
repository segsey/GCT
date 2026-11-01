import SkillBadge from "./skillBadge";

function LearningTrackCard({ image, title, summary, description, skills }) {
  return (
    <div className="col-12 sm:col-6 md:col-3 d-flex">
      <div className="card">
        <img src={image} className="card-img-top card-img-height" />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{title}</h5>
          <h6 className="card-text">{summary}</h6>
          <p className="card-text">{description}</p>
          <hr />
          <div
            className="d-flex flex-wrap gap-2 px-4 pb-4"
            style={{ fontSize: "small" }}
          >
            {skills.map((skill) => (
              <SkillBadge
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningTrackCard;
