import React from "react";
import { motion } from "framer-motion";
import ProductCards from "./ProductCards";

const Main = ({ products }) => {
  const Title = () => <h1>Online Store</h1>;
  const SubTitle = () => <h2>Products</h2>;
  const Header = () => (
    <blockquote className="blockquote">
      <p className="font-italic">
        Lorem ipsum dolor sit amet, exercitation deserunt exercitation ea velit
        eu consequat laborum Lorem occaecat ea.
      </p>
    </blockquote>
  );

  return (
    <motion.div key={`home-page`} className="container">
      <Title />
      <Header />
      <SubTitle />
      <ProductCards products={products} />
    </motion.div>
  );
};

export default Main;
