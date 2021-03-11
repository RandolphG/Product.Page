import React from "react";
import { motion } from "framer-motion";
import { Images } from "./Images";
import { Information } from "./Information";
import { Navbar } from "../Navbar";
import { animationSettings } from "../MotionSettings";

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
