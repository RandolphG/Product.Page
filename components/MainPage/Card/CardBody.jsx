import Link from "next/link";
import CardDescription from "./CardDescription";

const CardBody = ({ product }) => {
  const Title = ({ product }) => (
    <Link href="/products/[productId]" as={`/products/${product.productId}`}>
      <a
        className="card-title"
        aria-label={`Go to details page for ${product.title}`}
      >
        <h3 className="card-title">{product.title}</h3>
      </a>
    </Link>
  );

  return (
    <div className="card-body">
      <Title product={product} />
      <CardDescription product={product} />
    </div>
  );
};
export default CardBody;
