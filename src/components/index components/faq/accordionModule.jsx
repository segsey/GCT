const Accordion = ({ item }) => {
  return (
    <>
      <details className="accordion-item" name="accordionExample">
        <summary className="accordion-header">
          <b>{item.heading}</b>
          <svg
            className="accordion-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m2 5 6 6 6-6" />
          </svg>
        </summary>
        <div className="accordion-body">{item.content}</div>
      </details>
    </>
  );
};

export default Accordion;
