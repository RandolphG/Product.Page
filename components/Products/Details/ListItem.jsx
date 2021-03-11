const ListItem = ({ product }) => (
  <ul className="details">
    <div className="list">
      {product &&
        product.details.map((bullet, idx) => (
          <li className="details-list-item" key={`bullet=${idx}`}>
            {bullet}
          </li>
        ))}
    </div>
  </ul>
);

export default ListItem;
