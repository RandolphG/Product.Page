import { motion } from "framer-motion";
import Description from "./Description";
import Options from "./Options";
import ListItem from "./ListItem";
import Button from "./Button";

const detailsAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1.2 },
};

const Details = ({ product }) => {
  return (
    <motion.div className="product-details" {...detailsAnimation}>
      <Description product={product} />
      <Options product={product} />
      <Button />
      <ListItem product={product} />
    </motion.div>
  );
};
export default Details;
