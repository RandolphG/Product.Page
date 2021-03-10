export default function ButtonGroup({ option, idx }) {
  return (
    <div key={idx} className="button-group">
      <h2 className="title">{option.name}</h2>
      <div className="buttons-container" name={option.name}>
        {option &&
          option.values.map((value, idx) => (
            <button
              key={`button-${idx}`}
              className="btn btn-primary m-1"
              value={value.value}
            >
              {value.value}
            </button>
          ))}
      </div>
    </div>
  );
}
