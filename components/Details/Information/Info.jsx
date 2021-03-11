import Link from "next/link";
import { motion } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99];
const duration = 0.8;
const transition = { duration, ease: easing };
const fadeInUp = {
  initial: {
    y: 10,
    opacity: 0,
    transition,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition,
  },
  exit: {
    y: 10,
    opacity: 0,
    transition,
  },
};

const slideOut = {
  initial: {
    x: 10,
    opacity: 0,
    transition,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition,
  },
  exit: {
    x: 10,
    opacity: 0,
    transition,
  },
};

const Info = ({ product }) => {
  return (
    <motion.div className="description">
      <div className="top">
        <motion.h1 {...fadeInUp} className="name">
          {product.title}
        </motion.h1>
        <Link href={`/`}>
          <motion.div {...slideOut} className="back-button">
            BACK
          </motion.div>
        </Link>
      </div>
      <motion.p {...slideOut} className="about">
        {product.about}
      </motion.p>
    </motion.div>
  );
};

export default Info;
