import "../css/courses.css";
import CoursesHero from "../components/courses components/coursesHero.jsx";
import CourseCards from "../components/courses components/coursesCard/courseCards.jsx";
import Process from "../components/courses components/process/process.jsx";

function Courses() {
  return (
    <>
      <CoursesHero />
      <CourseCards />
      <Process />
    </>
  );
}

export default Courses;
