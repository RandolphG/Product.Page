import CardImage from "./CardImage";
import CardBody from "./CardBody";

const Card = ({ product }) => (
  <div key={`p-${product.productId}`} className="card">
    <CardImage product={product} />
    <CardBody product={product} />
  </div>
);

export default Card;
