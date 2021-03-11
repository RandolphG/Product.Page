import { motion } from "framer-motion";
import Description from "./Description";
import Options from "./Options";
import ListItem from "./ListItem";
import Button from "./Button";

const animationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6 },
};

const Details = ({ product }) => {
  return (
    <motion.div className="details" {...animationSettings}>
      <Description product={product} />
      <Options product={product} />
      <Button />
      <ListItem product={product} />
    </motion.div>
  );
};
export default Details;
