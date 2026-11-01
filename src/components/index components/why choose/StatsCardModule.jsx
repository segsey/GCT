function StatsCardModule({ icon, figure, detail, optional }) {
  return (
    <div className="d-flex justify-content-center gap-1 md:gap-7 align-items-center">
      <div>
        <i className={`${icon} fs-xl fw-bold`}></i>
      </div>
      <div className="d-flex flex-column">
        <span className="md:h5 fw-bold">{figure}</span>
        <span className="fg-secondary">{detail}</span>
      </div>
    </div>
  );
}

export default StatsCardModule;
