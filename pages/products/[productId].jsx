import { useState } from "react";
import useWindowSize from "../../hooks";
import { getProducts } from "../../services";
import { BOOTSTRAP_LG } from "../../utils";
import { motion } from "framer-motion";
import {
  ProductHeader,
  SlickSlider,
  ProductImage,
  ProductDetails,
} from "../../components";

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
        <div className="col col-12 col-md-6">
          <ProductImage product={product} selectedImg={selectedImg} />
          <SlickSlider
            product={product}
            onClick={setSelectedImg}
            selectedImg={setSelectedImg}
          />
          {isWindowMd && <ProductHeader product={product} />}
        </div>
        <ProductDetails product={product} isWindowMd={isWindowMd} />
      </div>
    </motion.div>
  );
};

export default ProductPage;
