import { removeTrailingSpace } from "../../../utils";
import Link from "next/link";

const ProductCardAbout = ({ product }) => {
  if (!product.about || !product.about.length) {
    return null;
  }

  if (product.about.length > 128) {
    const shortText = product.about.substring(0, 125);
    const displayText = removeTrailingSpace(shortText);
    return (
      <Link href={`/products/${product.productId}`}>
        <a className="text-decoration-none text-dark">
          {`${displayText}... `}
          <span className="sr-only">Read more about {product.title}</span>
        </a>
      </Link>
    );
  }

  return (
    <Link href={`/products/${product.productId}`}>
      <a className="text-decoration-none text-dark">
        {product.about}
        <span className="sr-only">Go to details page for {product.title}</span>
      </a>
    </Link>
  );
};

export default ProductCardAbout;
