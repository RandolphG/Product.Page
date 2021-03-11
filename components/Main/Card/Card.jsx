import { motion } from "framer-motion";
import CardImage from "./CardImage";
import CardBody from "./CardBody";

const Card = ({ product }) => (
  <motion.div key={`p-${product.productId}`} className="card">
    <CardImage product={product} />
    <CardBody product={product} />
  </motion.div>
);

export default Card;
