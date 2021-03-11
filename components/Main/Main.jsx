import React from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";
import { Navbar } from "../Navbar";
import { animationSettings } from "../MotionSettings";

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
