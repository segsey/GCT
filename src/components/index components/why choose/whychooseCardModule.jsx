function WhyChooseCard({ item }) {
  return (
    <div className="col-12 col-sm-6 col-lg-6">
      <div className="p-3 bg-white rounded h-100">
        <div>
          <span className="p-2 bg-body-secondary rounded-circle">
            <i className={`${item.icon} fs-4 fw-bold`}></i>
          </span>
        </div>
        <div className="fw-bold">
          {item.title}
          <span
            className="d-block bg-deep-purple rounded my-1"
            style={{ width: "50px", height: "2px" }}
          />
        </div>
        <div className="text-body-secondary fs-6">{item.description}</div>
      </div>
    </div>
  );
}

export default WhyChooseCard;
