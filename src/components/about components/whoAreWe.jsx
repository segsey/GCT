function WhoAreWe() {
  return (
    <>
      <div className="py-12">
        <div className="container col-11 sm:col-12 mx-auto py-5 bg-1 rounded shadow-sm">
          {/* body */}
          <div className="d-flex flex-wrap md:flex-nowrap align-items-stretch">
            <div className="md:col-6">
              <div className="p-3 md:p-7">
                <div className="h1 fw-bold">
                  Who Are We
                  <span
                    className="d-block bg-light-blue rounded ms-2 mt-1 mb-3"
                    style={{ width: "65px", height: "3px" }}
                  ></span>
                </div>
                <p className="fs-lg">
                  <b>Genius Computer Technologies (GCTechies) </b>
                  is a technology training institute based in Quarry Road,
                  Abeokuta, Ogun State, dedicated to equipping aspiring tech
                  professionals with practical skills that prepare them for real
                  opportunities in today's digital world.
                </p>
                <p className="fs-lg">
                  We specialize in <b>Web Development</b> and
                  <b>Information & Communication Technology (ICT)</b>, helping
                  students build confidence through hands-on learning rather
                  than theory alone. Whether you're just starting your journey
                  or looking to improve your existing skills, our goal is to
                  guide you every step of the way.
                </p>
              </div>
            </div>
            <div className="vr mx-3 hidden md:block"></div>
            <div className="col-12 md:col-6">IMAGE FROM CLASS HERE!!!</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoAreWe;
