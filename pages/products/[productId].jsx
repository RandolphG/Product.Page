import { useState } from "react";
import useWindowSize from "../../hooks";
import { getProducts } from "../../services";
import { BOOTSTRAP_LG } from "../../utils";
import { motion } from "framer-motion";
import { ProductDetails } from "../../components";
import ProductImages from "../../components/ProductImages";

const animationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

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
    <motion.div
      key={`product-page`}
      {...animationSettings}
      className="container mt-4"
    >
      <div className="row">
        <ProductImages
          selectedImg={selectedImg}
          isWindowMd={isWindowMd}
          product={product}
          setSelectedImg={setSelectedImg}
        />
        <ProductDetails product={product} isWindowMd={isWindowMd} />
      </div>
    </motion.div>
  );
};

export default ProductPage;
