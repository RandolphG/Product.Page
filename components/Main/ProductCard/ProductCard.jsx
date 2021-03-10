import { motion } from "framer-motion";
import ProductCardImage from "./ProductCardImage";
import ProductCardBody from "./ProductCardBody";

const ProductCard = ({ product }) => (
  <div key={`p-${product.productId}`} className="col-12 col-md-6 col-lg-4 my-2">
    <motion.div className="card m-auto border-0">
      <ProductCardImage product={product} />
      <ProductCardBody product={product} />
    </motion.div>
  </div>
);

export default ProductCard;
