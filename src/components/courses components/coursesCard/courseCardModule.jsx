import { Link } from "react-router-dom";
function CourseCardModule({ item }) {
  return (
    <>
      <div className="col-sm-6 col-md-4 d-flex">
        <div className="card">
          <div className="position-relative">
            <img
              src={item.image}
              className="card-img-top card-img-height"
              alt="..."
            />
            <span
              className={`${item.badge.color} bg-light-subtle position-absolute top-0 start-0 m-2 badge fw-light`}
            >
              {item.badge.level}
            </span>
          </div>
          <div className="card-body d-flex flex-column justify-content-between text-center">
            <h5 className="card-title">
              {item.courseTitle}
              <span
                className="d-block bg-light-blue rounded mt-2 mb-3 mx-auto"
                style={{ width: "60px", height: "3px" }}
              ></span>
            </h5>
            <h6>{item.description.short}</h6>
            <p className="card-text text-secondary fw-bold">
              {item.description.long}
            </p>
            <Link
              to={item.path}
              className="btn btn-primary w-100"
            >
              View Course
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default CourseCardModule;
