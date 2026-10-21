function CourseTableTemplate({ item }) {
  return (
    <>
      <div className="mt-3">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col-2">#</th>
              <th scope="col-7">Topic</th>
            </tr>
          </thead>
          <tbody>
            {item.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.topic}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CourseTableTemplate;
