function TestimonyCardModule({ testimony, name, courseLearnt }) {
  return (
    <div className="col-12 col-md-4">
      <div className="card h-100">
        <div className="card-body">
          <i className="bi bi-blockquote-left fs-4 d-block"></i>
          <i className="py-3 d-block">"{testimony}"</i>
          <div className="d-flex gap-2">
            <div>
              <span className="p-3 rounded-circle bg-body-secondary">
                <i className="bi bi-person fs-3"></i>
              </span>
            </div>
            <div className="d-flex flex-column">
              <span className="fw-bold">{name}</span>
              <span className="text-body-secondary">{courseLearnt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonyCardModule;
