import EnrollForm from "../../components/enrollForm";
function EnrollBody() {
  return (
    <>
      <div className="hero-bg" id="hero-bg-sign-up">
        <div
          className="container py-5 d-flex align-items-end"
          style={{ minHeight: "45vh" }}
        >
          <div className="h1 libertinus-math-regular fw-bold pt-5 text-buttom text-white">
            Student Enrollment Form
            <span
              className="d-block bg-light-blue rounded mb-1"
              style={{ width: "55px", height: "3px" }}
            ></span>
          </div>
        </div>
      </div>

      <EnrollForm />
    </>
  );
}

export default EnrollBody;
