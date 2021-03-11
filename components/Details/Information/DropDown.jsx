import { motion } from "framer-motion";

const ease = [0.6, -0.05, 0.01, 0.99];
const duration = 1.0;
const transition = {
  duration,
  ease,
};

const fadeInUp = {
  initial: {
    y: 10,
    opacity: 0,
    transition,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition,
  },
  exit: {
    y: 10,
    opacity: 0,
    transition,
  },
};

const DropDown = ({ option }) => {
  return (
    <div className="selection">
      <div className="container">
        <motion.h2 {...fadeInUp} className="size">
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
