function StatsCardModule({ icon, figure, detail, optional }) {
  return (
    <div className={`d-flex justify-content-center gap-1 align-items-center`}>
      <div>
        <span className="p-2 p-md-3 bg-body-secondary rounded-circle">
          <i className={`${icon} fs-4 fw-bold`}></i>
        </span>
      </div>
      <div className="d-flex flex-column">
        <span className="h5-md fw-bold">{figure}</span>
        <span className="text-body-secondary">{detail}</span>
      </div>
    </div>
  );
}

export default StatsCardModule;
