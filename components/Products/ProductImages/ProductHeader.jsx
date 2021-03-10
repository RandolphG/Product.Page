import Link from "next/link";

const ProductHeader = ({ product }) => {
  return (
    <div>
      <Link href={`/`}>
        <div>BACK</div>
      </Link>
      <h1>{product.title}</h1>
      <p>{product.about}</p>
    </div>
  );
};

export default ProductHeader;
