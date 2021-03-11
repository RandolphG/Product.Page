import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, slideOut } from "../../MotionSettings";

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
