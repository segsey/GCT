function WhatWeBelieveCard({ item }) {
  return (
    <>
      <div className="md:col-3 rounded">
        <div className="text-center p-3">
          <div>
            <i
              className={`bi ${item.icon} d-inline-flex justify-content-center align-items-center  px-6 py-4 rounded-circle bg-white fs-xl`}
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
