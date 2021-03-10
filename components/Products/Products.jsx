import React from "react";
import { motion } from "framer-motion";
import { ProductImages } from "./ProductImages";
import { ProductDetails } from "./ProductDetails";

const animationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Products = ({ selectedImg, isWindowMd, product, setSelectedImg }) => {
  return (
    <motion.div
      key={`product-page`}
      {...animationSettings}
      className="container mt-4"
    >
      <div className="row">
        <ProductImages
          selectedImg={selectedImg}
          isWindowMd={isWindowMd}
          product={product}
          setSelectedImg={setSelectedImg}
        />
        <ProductDetails product={product} isWindowMd={isWindowMd} />
      </div>
    </motion.div>
  );
};

export default Products;
