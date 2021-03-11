import React from "react";
import { motion } from "framer-motion";
import { Images } from "./Images";
import { Information } from "./Information";
import { Navbar } from "../Navbar";

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

const Details = ({ selectedImg, product, setSelectedImg }) => {
  return (
    <motion.div key={`details`} className="details" {...animationSettings}>
      <div className="outer-border">
        <Navbar />
        <div className="inner-border">
          <Images
            selectedImg={selectedImg}
            product={product}
            setSelectedImg={setSelectedImg}
          />
          <Information product={product} />
        </div>
      </div>
    </motion.div>
  );
};

export default Details;
