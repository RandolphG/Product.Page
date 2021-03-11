import React from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";
import { Navbar } from "../Navbar";
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

const Main = ({ products }) => {
  const Quote = () => (
    <blockquote className="quote">
      <p className="font-italic">
        Lorem ipsum dolor sit amet, exercitation exercitation ea velit eu
        laborum Lorem occaecat ea.
      </p>
    </blockquote>
  );
  const SubTitle = () => (
    <div className="subheader">
      <h2 className="subtitle">Products</h2>
    </div>
  );

  return (
    <motion.div key={`home-page`} className="main" {...animationSettings}>
      <div className="container">
        <Navbar />
        <Quote />
        <SubTitle />
        <Cards products={products} />
      </div>
    </motion.div>
  );
};

export default Main;
