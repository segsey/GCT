import TestimonyCardModule from "./testimony-card-module";
import TestimonyArr from "./studentsTestimony";

function Testimony() {
  return (
    <>
      <div className="testimony-bg">
        <div className="container py-10 sm:py-12">
          {/* heading */}
          <div className="text-center py-4">
            <span className="h1 fw-bold">What Our Students Say</span>
            <i className="d-block text-body-secondary">
              Trusted by Students. Proven by Results.
            </i>
          </div>

          <div className="row gy-3 justify-content-center align-items-center align-items-stretch pt-4">
            {TestimonyArr.map((item, index) => {
              return <TestimonyCardModule key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimony;
