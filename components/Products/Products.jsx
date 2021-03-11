import React from "react";
import { motion } from "framer-motion";
import { Images } from "./Images";
import { Details } from "./Details";

const ease = [0.6, -0.05, 0.01, 0.99];
const duration = 1.0;
const transition = {
  duration,
  ease,
};
const animationSettings = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition,
  },
  exit: { opacity: 0, transition },
};

const Products = ({ selectedImg, isWindowMd, product, setSelectedImg }) => {
  return (
    <motion.div
      key={`product-page`}
      className="product-page"
      {...animationSettings}
    >
      <div className="container">
        <Images
          selectedImg={selectedImg}
          isWindowMd={isWindowMd}
          product={product}
          setSelectedImg={setSelectedImg}
        />
        <Details product={product} isWindowMd={isWindowMd} />
      </div>
    </motion.div>
  );
};

export default Products;
