import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col justify-center items-center text-justify"
        initial={{ y: 1000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 1000, opacity: 0 }}
        transition={{
          duration: 0.8,
          ease: "anticipate",
        }}
      >
        <div>
          <h1 className="text-9xl">Products</h1>
          <Link to="/advertisement">TEEEEEST</Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
