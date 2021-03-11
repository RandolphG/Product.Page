import { defaultUrl } from "../../../utils";

export default function CardImage({ product }) {
  return (
    <a aria-label={`Go to details page for ${product.title}`}>
      <img
        className="card-img"
        src={product.images[0].url || defaultUrl}
        alt=""
        height="250"
        role="presentation"
      />
    </a>
  );
}
