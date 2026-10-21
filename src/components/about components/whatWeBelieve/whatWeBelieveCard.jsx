function WhatWeBelieveCard({ item }) {
  return (
    <>
      <div className="col-md-3 bg-secondary-subtle rounded">
        <div className="text-center p-3">
          <div>
            <i
              className={`bi ${item.icon}  px-2 py-1 rounded-circle bg-white fs-4`}
            ></i>
          </div>
          <div className="fw-bold">
            {item.heading}
            <span
              className="d-block bg-light-blue mx-auto rounded mt-2 mb-3"
              style={{ width: "55px", height: "2px" }}
            ></span>
          </div>
          <div>{item.description}</div>
        </div>
      </div>
    </>
  );
}

export default WhatWeBelieveCard;
