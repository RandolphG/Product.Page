import Card from "./Card/Card";
import { motion } from "framer-motion";

const Cards = ({ products }) => {
  return (
    <div className="cards">
      <motion.div className="outer-border">
        {products &&
          products.map((product, idx) => (
            <Card key={`Card-${idx}`} product={product} />
          ))}
      </motion.div>
    </div>
  );
};

export default Cards;
