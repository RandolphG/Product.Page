const ListItem = ({ product }) => (
  <ul className="details-ul">
    <div className="list">
      {product &&
        product.details.map((bullet, idx) => (
          <li className="item" key={`bullet=${idx}`}>
            {bullet}
          </li>
        ))}
    </div>
  </ul>
);

export default ListItem;
