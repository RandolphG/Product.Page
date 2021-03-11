import { motion } from "framer-motion";
import Info from "./Info";
import Options from "./Options";
import ListItem from "./ListItem";
import Button from "./Button";
import { animationSettings } from "../../MotionSettings";

const Information = ({ product }) => {
  return (
    <motion.div className="information" {...animationSettings}>
      <Info product={product} />
      <Options product={product} />
      <Button />
      <ListItem product={product} />
    </motion.div>
  );
};
export default Information;
