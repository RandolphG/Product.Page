import { useState } from "react";
import useWindowSize from "../../hooks";
import { getProducts } from "../../services";
import { BOOTSTRAP_LG } from "../../utils";
import { Products } from "../../components";

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
  const windowSize = useWindowSize();
  const isWindowMd = windowSize.width && windowSize.width <= BOOTSTRAP_LG;

  return (
    <Products
      product={product}
      selectedImg={selectedImg}
      isWindowMd={isWindowMd}
      setSelectedImg={setSelectedImg}
    />
  );
};

export default ProductPage;
