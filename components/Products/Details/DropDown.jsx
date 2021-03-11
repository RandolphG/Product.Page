const DropDown = ({ option }) => {
  return (
    <div className="selection">
      <div className="container">
        <h2 className="size">{option.name}</h2>
        <select className="select" name={option.name} length="5">
          {option &&
            option.values.map((value, idx) => (
              <option key={`selection-${idx}`} value={value.value}>
                {value.value}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};
export default DropDown;
