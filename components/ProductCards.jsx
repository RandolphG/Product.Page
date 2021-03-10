import { motion } from "framer-motion";
import ProductCardImage from "./ProductCardImage";
import ProductCardBody from "./ProductCardBody";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ProductCards = ({ products }) => {
  const ProductCard = ({ product }) => (
    <div
      key={`p-${product.productId}`}
      className="col-12 col-md-6 col-lg-4 my-2"
    >
      <motion.div className="card m-auto border-0">
        <ProductCardImage product={product} />
        <ProductCardBody product={product} />
      </motion.div>
    </div>
  );
  return (
    <motion.div variants={stagger} className="row">
      {products && products.map((product) => <ProductCard product={product} />)}
    </motion.div>
  );
};

export default ProductCards;
