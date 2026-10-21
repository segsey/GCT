import CourseData from "../courseData";
import CourseOverviewTemplate from "../courseOverviewTemplate";
import CourseTableTemplate from "../courseTableTemplate";
import java from "../courseTableData/java";

function JavaPage() {
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
                  Java
                </li>
              </ol>
            </nav>
          </div>
          {/* breadcrumbs end */}

          <div>
            <div>
              <CourseOverviewTemplate item={CourseData[0].java} />
            </div>
            <CourseTableTemplate item={java} />
          </div>
        </div>
      </div>
    </>
  );
}

export default JavaPage;
