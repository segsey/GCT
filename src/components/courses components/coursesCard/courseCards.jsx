import CourseCardModule from "./courseCardModule";
import CardArr from "./cardArr";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function CourseCards() {
  return (
    <>
      <div className="container py-5">
        {/* heading  */}
        <div className="text-center mb-3">
          <div className="h1 fw-bold libertinus-math-regular">Our Courses</div>
          <i className="text-body-secondary d-block">
            Learn practical skills. Build real projects.
          </i>
        </div>

        <div className="row g-3 justify-content-center align-items-stretch">
          {CardArr.map((item) => {
            return <CourseCardModule key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default CourseCards;
