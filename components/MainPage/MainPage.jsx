import React from "react";
import { motion } from "framer-motion";
import ProductCards from "./ProductCards";

const animationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const MainPage = ({ products }) => {
  const Title = () => <h1 className="title">Online Store</h1>;
  const Quote = () => (
    <blockquote className="quote">
      <p className="font-italic">
        Lorem ipsum dolor sit amet, exercitation deserunt exercitation ea velit
        eu consequat laborum Lorem occaecat ea.
      </p>
    </blockquote>
  );
  const SubTitle = () => <h2 className="subtitle">Products</h2>;

  return (
    <motion.div key={`home-page`} {...animationSettings} className="main">
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
