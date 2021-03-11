import Link from "next/link";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  exit: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
};

const Description = ({ product }) => {
  return (
    <motion.div {...fadeInUp} className="back-link">
      <div className="top-section">
        <h1 className="product-title">{product.title}</h1>
        <Link href={`/`}>
          <div className="back-button">BACK</div>
        </Link>
      </div>
      <p className="product-description">{product.about}</p>
    </motion.div>
  );
};

export default Description;
