import { motion } from "framer-motion";
import Info from "./Info";
import Options from "./Options";
import ListItem from "./ListItem";
import Button from "./Button";

const animationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6 },
};

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
