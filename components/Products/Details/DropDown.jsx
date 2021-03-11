import { motion } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99];
const duration = 0.8;
const transition = { duration, ease: easing };

const slideOut = {
  initial: {
    x: 10,
    opacity: 0,
    transition,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition,
  },
  exit: {
    x: 10,
    opacity: 0,
    transition,
  },
};

const DropDown = ({ option }) => {
  return (
    <div className="selection">
      <div className="container">
        <motion.h2 {...slideOut} className="size">
          {option.name}
        </motion.h2>
        <select className="select" name={option.name} length="5">
          {option &&
            option.values.map((value, idx) => (
              <option key={`selection-${idx}`} value={value.value}>
                {value.value}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};
export default DropDown;
