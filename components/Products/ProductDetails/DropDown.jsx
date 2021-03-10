const DropDown = ({ option }) => {
  return (
    <div className="row my-3">
      <h2 className="col-3 h4 pr-3">{option.name}</h2>
      <select className="col-3" name={option.name} length="5">
        {option &&
          option.values.map((value, idx) => (
            <option key={`selection-${idx}`} value={value.value}>
              {value.value}
            </option>
          ))}
      </select>
    </div>
  );
};
export default DropDown;
