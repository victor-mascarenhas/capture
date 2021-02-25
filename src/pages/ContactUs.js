import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContatUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Our Contact</h1>
    </motion.div>
  );
};

export default ContatUs;
