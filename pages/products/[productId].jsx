import { useState } from "react";
import { getProducts } from "../../services";
import { Details } from "../../components";

export async function getServerSideProps(context) {
  try {
    const { productId } = context.params;
    const products = await getProducts();
    const product = products.find((product) => product.productId === productId);
    return { props: { product } };
  } catch (error) {
    console.log(error);
    return { props: { error: "internal server error" } };
  }
}

const ProductPage = ({ product }) => {
  const [selectedImg, setSelectedImg] = useState(0);

  return (
    <Details
      product={product}
      selectedImg={selectedImg}
      setSelectedImg={setSelectedImg}
    />
  );
};

export default ProductPage;
