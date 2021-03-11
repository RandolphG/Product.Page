import React from "react";
import { motion } from "framer-motion";
import { Images } from "./Images";
import { Details } from "./Details";

let easing = [0.6, -0.05, 0.01, 0.99];

const animationSettings = {
  initial: {
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  exit: { opacity: 0, transition: { duration: 1.6, ease: easing } },
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
