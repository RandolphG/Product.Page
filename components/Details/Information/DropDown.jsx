import { motion } from "framer-motion";
import { fadeInUp } from "../../MotionSettings";

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
