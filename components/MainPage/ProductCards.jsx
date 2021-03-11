import Card from "./Card/Card";
import { motion } from "framer-motion";

const ProductCards = ({ products }) => {
  return (
    <div className="products">
      <motion.div className="container">
        {products &&
          products.map((product, idx) => (
            <Card key={`Card-${idx}`} product={product} />
          ))}
      </motion.div>
    </div>
  );
};

export default ProductCards;
