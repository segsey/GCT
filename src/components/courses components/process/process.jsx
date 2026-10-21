import ProcessCardModule from "./processCardModule";
function Process() {
  return (
    <>
      <div className="bg-body-tertiary">
        <div className="container py-5">
          {/* heading */}
          <h1 className="libertinus-math-regular text-center">
            How You'll learn
          </h1>

          {/* content */}
          <div className="border rounded p-2 my-4 shadow-sm">
            <div className="d-flex flex-wrap flex-md-nowrap justify-content-center align-items-center gap-3">
              <ProcessCardModule
                num="1"
                icon="bi-list-check"
                heading="Choose"
                detail="Select a course that perfectly matches your goals in IT."
              />

              <i className="bi bi-arrow-down text-light-blue d-block d-md-none"></i>
              <i className="bi bi-arrow-right text-light-blue d-none d-md-block"></i>

              <ProcessCardModule
                num="2"
                icon="bi-journals"
                heading="Learn"
                detail="Understand the concepts through instructor-led training."
              />

              <i className="bi bi-arrow-down text-light-blue d-block d-md-none"></i>
              <i className="bi bi-arrow-right text-light-blue d-none d-md-block"></i>

              <ProcessCardModule
                num="3"
                icon="bi-code-slash"
                heading="Practice"
                detail="Apply what you learn through exercises and assignments."
              />

              <i className="bi bi-arrow-down text-light-blue d-block d-md-none"></i>
              <i className="bi bi-arrow-right text-light-blue d-none d-md-block"></i>

              <ProcessCardModule
                num="4"
                icon="bi-list-check"
                heading="Build"
                detail="Work on real-world projects and build your portfolio."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Process;
