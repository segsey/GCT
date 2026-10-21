import CourseData from "../courseData";
import CourseOverviewTemplate from "../courseOverviewTemplate";
import CourseTableTemplate from "../courseTableTemplate";
import html from "../courseTableData/html";
import css from "../courseTableData/css";

function HtmlAndCssPage() {
  return (
    <>
      <div className="py-5 bg-dark-subtle">
        <div className="container">
          {/* breadcrumbs start  */}
          <div className="mt-5">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="../../index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="../courses.html">Courses</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  HTML & CSS
                </li>
              </ol>
            </nav>
          </div>
          {/* breadcrumbs end */}

          {/* html overview */}
          <div>
            <div>
              <CourseOverviewTemplate item={CourseData[0].html} />
            </div>
            <CourseTableTemplate item={html} />
          </div>

          {/* css overview */}
          <div>
            <div>
              <CourseOverviewTemplate item={CourseData[0].css} />
            </div>
            <CourseTableTemplate item={css} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HtmlAndCssPage;
