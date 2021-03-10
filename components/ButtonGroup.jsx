export default function ButtonGroup({ option }) {
  return (
    <div className="button-group">
      <h2 className="title">{option.name}</h2>
      <div className="buttons-container" name={option.name}>
        {option.values.map((value) => (
          <button className="btn btn-primary m-1" value={value.value}>
            {value.value}
          </button>
        ))}
      </div>
    </div>
  );
}
