import React from "react";
import { motion } from "framer-motion";
import ProductCards from "./ProductCards";
let easing = [0.6, -0.05, 0.01, 0.99];

const animationSettings = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: easing,
    },
  },
  exit: { opacity: 0, transition: { duration: 1.6 } },
};

const MainPage = ({ products }) => {
  const Title = () => <h1 className="title">Online Store</h1>;
  const Quote = () => (
    <blockquote className="quote">
      <p className="font-italic">
        Lorem ipsum dolor sit amet, exercitation exercitation ea velit eu
        laborum Lorem occaecat ea.
      </p>
    </blockquote>
  );
  const SubTitle = () => <h2 className="subtitle">Products</h2>;

  return (
    <motion.div key={`home-page`} className="main" {...animationSettings}>
      <div className="container">
        <Title />
        <Quote />
        <SubTitle />
        <ProductCards products={products} />
      </div>
    </motion.div>
  );
};

export default MainPage;
