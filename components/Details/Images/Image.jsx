import { motion } from "framer-motion";
import { scaleUp } from "../../MotionSettings";

const Image = ({ product, selectedImg }) => (
  <motion.img
    {...scaleUp}
    className="image"
    src={product.images[selectedImg].url}
    alt={product.images[selectedImg].alt}
  />
);

export default Image;
