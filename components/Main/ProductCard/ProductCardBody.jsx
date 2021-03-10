import Link from "next/link";
import useWindowSize from "../../../hooks/useWindowSize";
import { BOOTSTRAP_XS } from "../../../utils";
import ProductCardAbout from "./ProductCardAbout";

const ProductCardBody = ({ product }) => {
  const windowSize = useWindowSize();
  const isWindowXs = windowSize.width && windowSize.width <= BOOTSTRAP_XS;

  if (isWindowXs) {
    return (
      <div className="card-body card-img-overlay text-center">
        <h3>
          <a className="card-title h3 font-weight-normal">{product.title}</a>
        </h3>
      </div>
    );
  }

  const ProductTitle = ({ product }) => (
    <h3 className="h4 font-weight-normal">{product.title}</h3>
  );
  return (
    <div className="card-body">
      <Link href="/products/[productId]" as={`/products/${product.productId}`}>
        <a
          className="card-title"
          aria-label={`Go to details page for ${product.title}`}
        >
          <ProductTitle product={product} />
        </a>
      </Link>
      <ProductCardAbout product={product} />
    </div>
  );
};
export default ProductCardBody;
