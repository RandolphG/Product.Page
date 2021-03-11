import { motion } from "framer-motion";

const ease = [0.6, -0.05, 0.01, 0.99];
const duration = 1.0;
const transition = {
  duration,
  ease,
};
const scaleUp = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition,
  },
  exit: { opacity: 0, scale: 0.7, transition },
};

const Image = ({ product, selectedImg }) => (
  <motion.img
    {...scaleUp}
    className="image"
    src={product.images[selectedImg].url}
    alt={product.images[selectedImg].alt}
  />
);

export default Image;
