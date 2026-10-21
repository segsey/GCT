import TestimonyCardModule from "./testimony-card-module";

function Testimony() {
  return (
    <>
      <div className="testimony-bg">
        <div className="container py-5">
          {/* heading */}
          <div className="text-center py-2" data-aos="fade-up">
            <span className="h1 fw-bold">What Our Students Say</span>
            <i className="d-block text-body-secondary">
              Trusted by Students. Proven by Results.
            </i>
          </div>

          <div className="row gy-3 justify-content-center align-items-center align-items-stretch pt-4">
            <TestimonyCardModule
              testimony="Before joining GCTechies, I had no experience in web development. The hands-on projects and supportive instructors made learning enjoyable and practical. I can now build responsive websites with confidence."
              name="Daniel A."
              courseLearnt="Frontend Development Student"
            />
            <TestimonyCardModule
              testimony="GCTechies gave me the confidence to start my 
                  journey as a developer. The mentors were always 
                  willing to help, and the practical approach made 
                  complex topics much easier to understand."
              name="Sarah K."
              courseLearnt="JavaScript & React Student"
            />
            <TestimonyCardModule
              testimony="One of the best decisions I've made was enrolling at GCTechies. The classes were interactive, the assignments were challenging in a good way, and I left with skills I can apply to real-world projects."
              name="Micheal E."
              courseLearnt="Backend Development Student"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimony;
