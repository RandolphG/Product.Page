import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ProductCards = ({ products }) => {
  return (
    <motion.div variants={stagger} className="row">
      {products && products.map((product) => <ProductCard product={product} />)}
    </motion.div>
  );
};

export default ProductCards;
