import CourseData from "../courseData";
import CourseOverviewTemplate from "../courseOverviewTemplate";
import CourseTableTemplate from "../courseTableTemplate";
import dsa from "../courseTableData/dsa";

function DsaPage() {
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
                  Data Structures & Algorithm
                </li>
              </ol>
            </nav>
          </div>
          {/* breadcrumbs end */}

          <div>
            <div>
              <CourseOverviewTemplate
                item={CourseData[0].dsa}
                optionalBg={"bg-white"}
                optionalPadding={"p-1"}
              />
            </div>
            <CourseTableTemplate item={dsa} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DsaPage;
