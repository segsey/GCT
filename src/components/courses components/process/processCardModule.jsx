function ProcessCardModule({ num, icon, heading, detail }) {
  return (
    <>
      <div>
        <div className="d-flex align-items-center h-100  bg-warning-subtle rounded text-white p-3">
          <div>
            <i
              className={`bi ${icon} px-2 py-1 rounded-circle bg-vibrant-yellow text-light-blue fw-bolder`}
            ></i>
          </div>
          <div className="d-flex flex-column text-center text-dark">
            <h6>{num}</h6>
            <div>
              <small className="d-block fw-bold">{heading}</small>
              <small className="d-block text-secondary">{detail}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProcessCardModule;
