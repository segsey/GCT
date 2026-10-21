function ConatctCardTemplate({ item }) {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-3">
        <div className="p-3 bg-dark-subtle rounded text-center h-100">
          <div className="my-2">
            <i
              className={`bi ${item.icon} px-2 py-1 rounded-circle text-light-blue bg-body-secondary fs-4`}
            ></i>
          </div>
          <div className="fw-bold">
            {item.heading}
            <span
              className="d-block bg-light-blue mx-auto rounded mt-2 mb-3"
              style={{ width: "50px", height: "2px" }}
            ></span>
          </div>
          <div>
            <b>{item.subHeading}</b>
            <br></br>
            {item.detail}
          </div>
        </div>
      </div>
    </>
  );
}

export default ConatctCardTemplate;
