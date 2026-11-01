function WhyChooseCard({ item }) {
  return (
    <div className="col-12 sm:col-6 lg:col-6">
      <div className="px-6 py-8 bg-white rounded h-100 hover-lift">
        <div>
          <span className="px-4 py-2 bg-1 rounded-circle d-inline-flex justify-content-center align-items-center">
            <i className={`${item.icon} fs-2xl fw-bold`}></i>
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
