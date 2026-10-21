function CourseOverviewTemplate({
  item,
  optionalWidth,
  optionalBg,
  optionalPadding,
}) {
  return (
    <>
      <h1 className="libertinus-math-regular fw-bold">{item.courseTitle}</h1>

      {/* html overview start  */}
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5">
          <img
            src={item.image}
            className={`img-fluid rounded ${optionalWidth} ${optionalBg} ${optionalPadding}`}
            alt=""
          />
        </div>
        <div className="col">
          <h3>{item.courseTitle}</h3>
          <p style={{ lineHeight: "1.5" }}>{item.description}</p>
        </div>
      </div>
    </>
  );
}
export default CourseOverviewTemplate;
